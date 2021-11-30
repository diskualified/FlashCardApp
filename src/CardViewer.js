import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flipped: true, index: 0}
    }

    flipCard = () => this.setState({ flipped: !this.state.flipped });
    
    incIndex = () => {
        this.setState(prevState => {
          return { index: prevState.index + 1 }
        });
        this.setState({ flipped: true });
    }
    
      decIndex = () => {
        this.setState(prevState => {
            return { index: prevState.index - 1 }
        });
        this.setState({ flipped: true });
    }

    render() {
        if (!isLoaded(this.props.cards)) {
            return <div>Loading...</div>;
        }
        if (isEmpty(this.props.cards)) {
            return <div> Page Not Found! </div>
        }

        const card = this.props.cards[this.state.index]  
        return (
        <div>
            <h2>{this.props.name}</h2>
            <table>
                <thead>
                    <tr>
                    <th>Card</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{this.state.flipped? card.front:card.back}</td>
                </tbody>
                <td><button onClick={() => this.flipCard()}>Flip Card</button></td>
                <tr>
                    <td>
                        <button disabled={this.state.index === 0} id="back" onClick={() => this.decIndex()}> Back </button>                
                        <button disabled={this.state.index === this.props.cards.length - 1} id="next" onClick={() => this.incIndex()}> Next </button>
                    </td>
                </tr>
                <tr>
                    <td>Card {this.state.index + 1}/{this.props.cards.length}</td>
                </tr>
            </table>
            <br />
            <hr />
            <Link to="/"> Home </Link>
        </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(state);
    const deck = state.firebase.data[props.match.params.deckId];
    const name = deck && deck.name;
    const cards = deck && deck.cards;
    return { name: name, cards: cards };
};

export default compose (
    withRouter,
    firebaseConnect(props => {
        console.log('props', props);
        const deckId = props.match.params.deckId
        return [{ path: `/flashcards/${deckId}`, storeAs: deckId }]
    }),
    connect(mapStateToProps),
)(CardViewer);