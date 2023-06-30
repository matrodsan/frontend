import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.imgBox}>
        <img src="logo512.png" alt="React logo" />
      </div>
      <h3>{props.dados.descricao}</h3>
      <p>Autor: {props.dados.autor}</p>
    </div>
  );
};

export default Item;
