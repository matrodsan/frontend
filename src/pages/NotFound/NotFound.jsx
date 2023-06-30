import { Icon } from "@iconify/react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Icon icon="iconamoon:cloud-error-duotone" />
      Página não encontrada
    </div>
  );
};

export default NotFound;
