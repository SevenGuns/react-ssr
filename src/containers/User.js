import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserInfo } from '../store/user';

function User(props) {
  const { title, name } = props.user;
  useEffect(() => {
    if (!props.user.name) {
      props.getUserInfo();
    }
  }, []);
  return <Redirect to="/about"></Redirect>;
  // return (
  //   <div>
  //     你好！{title} ，你们最棒的人是{name}
  //   </div>
  // );
}

User.loadData = store => store.dispatch(getUserInfo());
export default connect(
  // mapStateToProps
  state => ({
    user: state.user.data
  }),
  // mapDispatchToProps
  {
    getUserInfo
  }
)(User);
