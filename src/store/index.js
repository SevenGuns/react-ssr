// page /
const GET_LIST = 'INDEX/GET_LIST';

// action creators
const changeList = list => ({
  type: GET_LIST,
  list
});

/**
 * 这里相当于redux-thunk和react-redux一起用
 * payload本身是一个函数，通过mapDispatchToProps可以在调用时dispatch出去
 * 而thunk会在payload为函数时代理dispatch，也就是说axiosInstance是thunk传过来的，看下thunk的api
 * @param {*} server
 */
export const getIndexList = server => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/course/list').then(res => {
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
