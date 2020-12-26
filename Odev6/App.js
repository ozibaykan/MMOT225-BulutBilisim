/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ImportInfo from './ImportInfo';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ImportInfo/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;