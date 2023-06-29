import styles from "./Anchor.module.css";

const Anchor = (props) => {
  const { children, link } = props;
  return (
    <a href={link ? link : "/"} className={styles.link}>
      {children ? children : "Link"}
    </a>
  );
};

export default Anchor;
