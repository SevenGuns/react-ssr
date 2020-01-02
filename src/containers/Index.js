import React, { useState, useEffect } from 'react';
import { getIndexList } from '../store/index';
import withStyles from '../withStyles';
import { connect } from 'react-redux';
import styles from './Index.css';
function Index(props) {
  const { title, list } = props;
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (!list.length) {
      props.getIndexList();
    }
  }, []);
  return (
    <div className={styles.content}>
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
)(withStyles(styles)(Index));
