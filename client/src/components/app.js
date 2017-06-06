import React from 'react';
import * as Cookies from 'js-cookie';


import LoginPage from './login-page';
import { connect } from 'react-redux';
import { fetchUser, fetchIssues } from '../actions';


class App extends React.Component {


    componentDidMount() {
      this.props.fetchUser();
      this.props.fetchIssues();

    }

    render() {
      const issues = this.props.issues ? this.props.issues.map(issue => {
        return <li className="collection-item" key={issue.id}>{issue.title}</li>;
      }) : '';

        return (
          <div className="container">
            <div className="row">
              <div className="col m8 offset-m2 s12 center card clock-container">
                <i className="medium material-icons">settings</i>
                <ul className="collection">
                  {issues}
                </ul>

              </div>
            </div>

          </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
  user: state.user.currentUser,
  issues: state.user.issues

});

export default connect(mapStateToProps, { fetchUser, fetchIssues })(App);
