import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from "./src/screens/Home/index"
import Post from "./src/components/Post/index"
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults/index'
import LocationSearchScreen from './src/screens/LocationSearch/index'
import GuestScreen from './src/screens/Guests/index';
import Router from './src/navigation/router'

const post1 = feed[0];


const App = () => {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    
      <Router />
      
    </>
  );
}

export default App