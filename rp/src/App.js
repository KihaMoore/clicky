import React from 'react';
import Card from './components/Cards';
import Wapper from './components/Wrapper';
import Title from './components/Title';

class App extends Component {

state = {
  card,
  score:0,
  highscore:0
};


gameOver = () => {
  if(this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score},function(){
      console.log(this.state.highscore);
    });
  }
  this.state.cards.forEach(card => {
  card.count = 0;
  });
  alert("GAME OVER, you clicked the same image twice!")
  this.setState({score: 0});
  return true;
}


clickCount = id => {
  this.state.cards.find((o,i) => {
    if(o.id ===id){
      if(cards[i].count ===0){
        
        cards[i].count = cards[i].count + 1;
        this.setState({score : this.state.score +1},function(){
          console.log(this.state.score);
        
        });
        this.state.cards.sort(() => Math.random() -  0.5)
        return true;
      }else{
        this.gameOver();
      }
    }
  });
}

render() {
  return (
    <Wrapper>
   <Title score={this.state.score} highscore={this.state.highscore}>Memory game</Title>
   {this.state.cards.map(card => (
     <Card
     clickCount = {this.clickCount}
     id={card.id}
     key={card.id}
     image={card/image}
     />
   ))}

   </Wrapper>



  )
}
}



export default App;
