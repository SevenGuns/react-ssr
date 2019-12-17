import axios from 'axios';

// action type
const GET_USER = 'USER/GET_USER';

// action creators
const getUser = data => ({
  type: GET_USER,
  data
});

// effects
export const getUserInfo = server => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get('http://localhost:9090/api/user/info12').then(res => {
      const { data } = res.data;
      dispatch(getUser(data));
    });
  };
};

const defaultState = {
  data: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};
