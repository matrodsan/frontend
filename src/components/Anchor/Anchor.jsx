import { Link } from "react-router-dom";
import styles from "./Anchor.module.css";

const Anchor = (props) => {
  const { children, link } = props;
  return (
    <Link to={link ? link : "/"} className={styles.link}>
      {children ? children : "Link"}
    </Link>
  );
};

export default Anchor;
