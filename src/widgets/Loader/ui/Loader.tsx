import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.gradient}></div>
    </div>
  );
};

export default Loader;
