import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from "./src/screens/Home/index"
import Post from "./src/components/Post/index"
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults/index'
import LocationSearchScreen from './src/screens/LocationSearch/index'

const post1 = feed[0];


const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView scrollable={true}>
      {/*<HomeScreen>*/}
      {/*<Post post={post} />*/}
      {/*<SearchResultsScreen />*/}
      <LocationSearchScreen />
      </SafeAreaView>
    </>
  );
}

export default App