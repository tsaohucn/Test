/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Livestream = $root.Livestream = (() => {

    /**
     * Namespace Livestream.
     * @exports Livestream
     * @namespace
     */
    const Livestream = {};

    Livestream.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof Livestream
         * @interface IMsg
         * @property {number|null} [timestamp] Msg timestamp
         * @property {Livestream.Msg.Type|null} [type] Msg type
         * @property {string|null} [streamid] Msg streamid
         * @property {string|null} [ip] Msg ip
         * @property {string|null} [audioPort] Msg audioPort
         * @property {string|null} [videoPort] Msg videoPort
         * @property {string|null} [videoSource] Msg videoSource
         */

        /**
         * Constructs a new Msg.
         * @memberof Livestream
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {Livestream.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg timestamp.
         * @member {number} timestamp
         * @memberof Livestream.Msg
         * @instance
         */
        Msg.prototype.timestamp = 0;

        /**
         * Msg type.
         * @member {Livestream.Msg.Type} type
         * @memberof Livestream.Msg
         * @instance
         */
        Msg.prototype.type = 0;

        /**
         * Msg streamid.
         * @member {string} streamid
         * @memberof Livestream.Msg
         * @instance
         */
        Msg.prototype.streamid = "";

        /**
         * Msg ip.
         * @member {string} ip
         * @memberof Livestream.Msg
         * @instance
         */
        Msg.prototype.ip = "";

        /**
         * Msg audioPort.
         * @member {string} audioPort
         * @memberof Livestream.Msg
         * @instance
         */
        Msg.prototype.audioPort = "";

        /**
         * Msg videoPort.
         * @member {string} videoPort
         * @memberof Livestream.Msg
         * @instance
         */
        Msg.prototype.videoPort = "";

        /**
         * Msg videoSource.
         * @member {string} videoSource
         * @memberof Livestream.Msg
         * @instance
         */
        Msg.prototype.videoSource = "";

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof Livestream.Msg
         * @static
         * @param {Livestream.IMsg=} [properties] Properties to set
         * @returns {Livestream.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link Livestream.Msg.verify|verify} messages.
         * @function encode
         * @memberof Livestream.Msg
         * @static
         * @param {Livestream.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.timestamp);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.streamid != null && message.hasOwnProperty("streamid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.streamid);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ip);
            if (message.audioPort != null && message.hasOwnProperty("audioPort"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.audioPort);
            if (message.videoPort != null && message.hasOwnProperty("videoPort"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.videoPort);
            if (message.videoSource != null && message.hasOwnProperty("videoSource"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.videoSource);
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link Livestream.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Livestream.Msg
         * @static
         * @param {Livestream.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof Livestream.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Livestream.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Livestream.Msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.uint32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.streamid = reader.string();
                    break;
                case 4:
                    message.ip = reader.string();
                    break;
                case 5:
                    message.audioPort = reader.string();
                    break;
                case 6:
                    message.videoPort = reader.string();
                    break;
                case 7:
                    message.videoSource = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Livestream.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Livestream.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof Livestream.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.streamid != null && message.hasOwnProperty("streamid"))
                if (!$util.isString(message.streamid))
                    return "streamid: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.audioPort != null && message.hasOwnProperty("audioPort"))
                if (!$util.isString(message.audioPort))
                    return "audioPort: string expected";
            if (message.videoPort != null && message.hasOwnProperty("videoPort"))
                if (!$util.isString(message.videoPort))
                    return "videoPort: string expected";
            if (message.videoSource != null && message.hasOwnProperty("videoSource"))
                if (!$util.isString(message.videoSource))
                    return "videoSource: string expected";
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Livestream.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Livestream.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.Livestream.Msg)
                return object;
            let message = new $root.Livestream.Msg();
            if (object.timestamp != null)
                message.timestamp = object.timestamp >>> 0;
            switch (object.type) {
            case "PLAY":
            case 0:
                message.type = 0;
                break;
            case "STOP":
            case 1:
                message.type = 1;
                break;
            case "KEEPALIVE":
            case 2:
                message.type = 2;
                break;
            }
            if (object.streamid != null)
                message.streamid = String(object.streamid);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.audioPort != null)
                message.audioPort = String(object.audioPort);
            if (object.videoPort != null)
                message.videoPort = String(object.videoPort);
            if (object.videoSource != null)
                message.videoSource = String(object.videoSource);
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Livestream.Msg
         * @static
         * @param {Livestream.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.timestamp = 0;
                object.type = options.enums === String ? "PLAY" : 0;
                object.streamid = "";
                object.ip = "";
                object.audioPort = "";
                object.videoPort = "";
                object.videoSource = "";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.Livestream.Msg.Type[message.type] : message.type;
            if (message.streamid != null && message.hasOwnProperty("streamid"))
                object.streamid = message.streamid;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.audioPort != null && message.hasOwnProperty("audioPort"))
                object.audioPort = message.audioPort;
            if (message.videoPort != null && message.hasOwnProperty("videoPort"))
                object.videoPort = message.videoPort;
            if (message.videoSource != null && message.hasOwnProperty("videoSource"))
                object.videoSource = message.videoSource;
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof Livestream.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name Livestream.Msg.Type
         * @enum {string}
         * @property {number} PLAY=0 PLAY value
         * @property {number} STOP=1 STOP value
         * @property {number} KEEPALIVE=2 KEEPALIVE value
         */
        Msg.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PLAY"] = 0;
            values[valuesById[1] = "STOP"] = 1;
            values[valuesById[2] = "KEEPALIVE"] = 2;
            return values;
        })();

        return Msg;
    })();

    return Livestream;
})();

export { $root as default };
