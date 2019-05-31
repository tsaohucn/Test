import KurentoClient from "kurento-client";
import React from "react";
import { View } from "react-native";
import { mediaDevices, RTCPeerConnection, RTCView } from "react-native-webrtc";
import * as AWSIot from "vvtk-js-mqtt";
import { rtcConfig, StreamService } from "vvtk-js-stream-service";
import { Livestream } from "./proto/livestream";

interface IState {
  stream?: string;
}

interface IProps {}

interface Port {
  audioPort?: string;
  videoPort?: string;
}

const deviceToken = "7d78aa8447d6f32922d39204d9ef2aec";

const streamid = "aa";

const getEncodeData = (msg: any) => Livestream.Msg.encode(msg).finish();

class RTC extends React.Component<IProps, IState> {
  private timer: any;

  constructor(props: any) {
    super(props);
    this.timer = null;
    this.state = {
      stream: ""
    };
  }

  componentDidMount() {
    mediaDevices.enumerateDevices().then((sourceInfos: any) => {
      mediaDevices
        .getUserMedia({
          audio: true,
          video: {
            mandatory: {
              minWidth: 500, // Provide your own width, height and frame rate here
              minHeight: 300,
              minFrameRate: 30
            },
            facingMode: "user"
            // optional: (videoSourceId ? [{sourceId: videoSourceId}] : [])
          }
        })
        .then((stream: any) => {
          // console.warn("XX----stream", stream);
          const streamService = new StreamService({
            onPcTrack: event => {
              const { stream } = event;
              const streamURL = stream.toURL();
              //console.warn("----stream", stream);
              this.setState({ stream: streamURL });
            },
            onRtpSdpAnswer: this.onRtpSdpAnswer,
            rtcPeerConnection: new RTCPeerConnection(rtcConfig),
            kurentoClient: KurentoClient,
            mediaClient: stream,
            mobile: true
          });
          streamService.start(
            () => {
              console.warn("----streamService start success");
            },
            err => {
              console.warn("----err", err);
            }
          );
        })
        .catch((error: any) => {
          console.warn("----error", error);
        });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    const msg = {
      timestamp: Date.now(),
      type: Livestream.Msg.Type.STOP,
      streamid
    };
    AWSIot.PublishBinary(
      `Device/${deviceToken}/sub/livestream`,
      getEncodeData(msg),
      (err: any) => {
        console.log(err);
      }
    );
  }

  onRtpSdpAnswer = async ({ videoPort, audioPort }: Port) => {
    const msg = {
      ip: "54.86.107.159",
      timestamp: Date.now(),
      type: Livestream.Msg.Type.PLAY,
      streamid,
      videoPort,
      audioPort
    };
    console.warn("----videoPort",videoPort)
    console.warn("----audioPort",audioPort)
    await AWSIot.PublishBinary(
      `Device/${deviceToken}/sub/livestream`,
      getEncodeData(msg)
    );
    const msg1 = {
      timestamp: Date.now(),
      type: Livestream.Msg.Type.KEEPALIVE,
      streamid,
      videoPort,
      audioPort
    };
    this.timer = setInterval(() => {
      AWSIot.PublishBinary(
        `Device/${deviceToken}/sub/livestream`,
        getEncodeData(msg1)
      );
    }, 6000);
  };

  render() {
    return (
      <View>
        <RTCView
          style={{ backgroundColor: "black", width: "100%", aspectRatio: 1 }}
          streamURL={this.state.stream}
        />
      </View>
    );
  }
}
/*<RTCView streamURL={this.state.stream} />*/

export default RTC;
