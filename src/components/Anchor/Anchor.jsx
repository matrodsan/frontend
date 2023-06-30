import { Link } from "react-router-dom";
import styles from "./Anchor.module.css";

const Anchor = (props) => {
  const { children, link, ativo } = props;
  return (
    <Link to={link ? link : "/"} className={`${styles.link} ${ativo ? styles.ativo : ""}`}>
      {children ? children : "Link"}
    </Link>
  );
};

export default Anchor;
