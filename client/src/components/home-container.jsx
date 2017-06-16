import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchIssues, openModal } from '../actions';
import { LOGIN_MODAL } from './modals/modal-types';


class HomeContainer extends Component {

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
              <div className="col m8 offset-m2 s12 card clock-container">
                <i className="small material-icons icon">settings</i>
                <button onClick={() => this.props.openModal(LOGIN_MODAL)}>Login</button>
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

export default connect(mapStateToProps, { fetchUser, fetchIssues, openModal })(HomeContainer);
