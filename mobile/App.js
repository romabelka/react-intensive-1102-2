import React from 'react';
import {configure} from 'mobx'
import AppNavigator from "./src/components/app-navigator";

/*
configure({
  enforceActions: "always"
})
*/

export default function App() {
  return <AppNavigator/>
}

