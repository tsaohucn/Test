/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// import '@babel/polyfill';
import React, { Component } from 'react';
import "./global";
import RTC from "./src/RTC";


export default class App extends Component {
  render() {
    return (
      <RTC/>
    );
  }
}
