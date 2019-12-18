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
    //!FIX: 故意让部分接口报错
    return axiosInstance.get('/api/user/info123').then(res => {
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
