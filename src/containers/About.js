import React from 'react';
import withStyles from '../withStyles';
import styles from './About.css';

function About() {
  return <div className={styles.title}>About</div>;
}

export default withStyles(styles)(About);
