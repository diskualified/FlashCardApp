import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {front: 'front1', back: 'back1'},
        {front: 'front2', back: 'back2'}
      ],
      index: 0,
    };
  }

  addCard = card => {
    const cards = this.state.cards.slice().concat(card);
    this.setState({ cards });
  };

  deleteCard = index => {
    const cards = this.state.cards.slice();
    cards.splice(index, 1);
    this.setState({ cards });
  };

  incIndex = () => {
    this.setState(prevState => {
      return { index: prevState.index + 1 }
    });
  }

  decIndex = () => {
    this.setState(prevState => {
        return { index: prevState.index - 1 }
    });
  }

  render() {
    return (
      <Switch>
      <Route exact path="/editor">
        <CardEditor
          addCard={this.addCard}
          cards={this.state.cards}
          deleteCard={this.deleteCard}
          switchMode={this.switchMode}
        />
      </Route>
      <Route exact path="/viewer">
        <CardViewer 
          cards={this.state.cards} 
          switchMode={this.switchMode} 
          incIndex={this.incIndex}
          decIndex={this.decIndex}
          index={this.state.index}
        />
      </Route>
      </Switch>
    );
  }
}

export default App;
