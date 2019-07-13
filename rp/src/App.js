import React, {Component} from 'react';
import Card from './components/Cards';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import image from './whiteImages.json'

class App extends Component {

state = {
  image,
  score:0,
  highscore:0
};


export default App;
