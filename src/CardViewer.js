import React from 'react';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {flipped: true}
    }

    flipCard = () => this.setState({ flipped: !this.state.flipped });
    
    incIndex = () => {
        this.props.incIndex();
        this.setState({ flipped: true });
    };
    
    decIndex = () => {
        this.props.decIndex();
        this.setState({ flipped: true });
    };

    render() {
        const card = this.props.cards[this.props.index]  
        return (
        <div>
            <h2>Card Viewer</h2>
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
                        <button disabled={this.props.index == 0} id="back" onClick={() => this.decIndex()}> Back </button>                
                        <button disabled={this.props.index == this.props.cards.length - 1} id="next" onClick={() => this.incIndex()}> Next </button>
                    </td>
                </tr>
                <tr>
                    <td>Card {this.props.index + 1}/{this.props.cards.length}</td>
                </tr>
            </table>
            <br />
            <hr />
            <button onClick={this.props.switchMode}>Go to card editor</button>
        </div>
        );
    }
}

export default CardViewer;