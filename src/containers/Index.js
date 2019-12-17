import React, { useState, useEffect } from 'react';
import { getIndexList } from '../store/index';
import { connect } from 'react-redux';
function Index(props) {
  const { title, list } = props;
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (!list.length) {
      props.getIndexList();
    }
  }, []);
  return (
    <div>
      <div>{title}</div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>累加</button>
      </div>
      <hr />
      <ul>
        {list.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
Index.loadData = store => store.dispatch(getIndexList());
export default connect(
  // mapStateToProps
  state => ({
    list: state.index.list
  }),
  // mapDispatchToProps
  {
    getIndexList
  }
)(Index);
