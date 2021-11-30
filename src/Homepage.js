import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


class Homepage extends React.Component {
    render() {
        if (!isLoaded(this.props.decks)) {
            return <div>Loading...</div>;
        }

        const keys = Object.keys(this.props.decks);
        const links = keys.map(Id => {
            return (
                <div>
                    <Link onClick= {() => this.props.history.push(`/viewer/${Id}`)}>{this.props.decks[Id]['name']}</Link>
                    <br /> <br />
                </div>
              
            );
        });

        return(
            <div>
                <Link to="/editor">Go to card editor</Link>
            <br /> <br />
                <p> Card Decks: </p>
                {links}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log("state", state);
    const decks = state.firebase.data.homepage;
    return { decks: decks };
};

export default compose (
    firebaseConnect(['/homepage']),
    connect(mapStateToProps),
    withRouter,
)(Homepage);