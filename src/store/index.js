import axios from 'axios';
// page /
const GET_LIST = 'INDEX/GET_LIST';

// action creators
const changeList = list => ({
  type: GET_LIST,
  list
});

export const getIndexList = server => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get('/api/course/list').then(res => {
      const { list } = res.data;
      dispatch(changeList(list));
    });
  };
};

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};
