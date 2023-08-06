import { Loader } from "shared/ui/Loader";
import styles from "./Loader.module.scss";

const PageLoader = () => {
  return (
    <div className={styles.wrap}>
      <Loader />
    </div>
  );
};

export default PageLoader;
