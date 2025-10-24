import styles from './Heading.module.css';

export function Heading(props) {
  return (
    <h1 {...props} className={styles.cyan}>
      {props.children}
    </h1>
  );
}
