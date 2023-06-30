import styles from "./ItemPage.module.css";
import { useParams } from "react-router-dom";
import itens from "../../json/items.json";

const ItemPage = () => {
  let param = useParams();
  const item = itens.find((el) => Number(el.id) === Number(param.id));
  return (
    <div className={styles.itemPage}>
      <img src="/logo192.png" alt="React Logo" />
      <div>
        <h1>{item.descricao}</h1>
        <span>{item.autor}</span>
        <p>{item.texto}</p>
      </div>
    </div>
  );
};

export default ItemPage;
