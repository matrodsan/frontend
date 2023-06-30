import Item from "../../components/Item/Item";
import styles from "./Itens.module.css";
import itens from "../../json/items.json";

const Itens = () => {
  return (
    <div className={styles.itens}>
      <h1>Listagem de itens:</h1>
      <div className={styles.carrousel}>
        {itens.map((item) => (
          <Item dados={item} />
        ))}
      </div>
    </div>
  );
};

export default Itens;
