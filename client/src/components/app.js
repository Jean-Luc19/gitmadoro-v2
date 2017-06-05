import React from 'react';
import * as Cookies from 'js-cookie';


import LoginPage from './login-page';
import { connect } from 'react-redux';
import { fetchUser, fetchIssues } from '../actions';


class App extends React.Component {


    componentDidMount() {
      this.props.fetchUser();

    }

    render() {
      let hi;
        if (this.props.user) {
           hi = <p>Hi {this.props.user.name}</p>;
           this.props.fetchIssues();
        }

        return (
          <div>
            {hi}
            <button></button>

          </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
  user: state.user.currentUser,

});

export default connect(mapStateToProps, { fetchUser, fetchIssues })(App);
