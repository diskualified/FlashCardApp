import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';

class Test extends React.Component {
    render() {
        if (!isLoaded(this.props.flashcards)) {
            return <div>Loading...</div>;
        }
        return <div>{this.props.flashcards.deck1.name}</div>;
    }
}

const mapStateToProps = state => {
    console.log(state);
    const flashcards = state.firebase.data.flashcards;
    return { flashcards: flashcards };
};
  
export default compose(
    firebaseConnect(['/flashcards']),
    connect(mapStateToProps),
)(Test);


/*
class Test extends React.Component {
    render() {
        return (
            <div>
                Test {this.props.match.params.id}
                <br />
                <button onClick={() => this.props.history.push('/')}>
                    go to home
                </button>
            </div>            
        )
    }
}

export default withRouter(Test)
*/