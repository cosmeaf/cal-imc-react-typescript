import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/up.png";
import dowImage from "../../assets/down.png";



type Props = {
  item: Level,
};

export const GridItem = ({ item }: Props) => {
  return(
    <div>
        <div className={styles.main} style={{backgroundColor: item.color }}>
          <div className={styles.gridIcon}>
            <img src={item.icon === 'up' ? upImage : dowImage} alt="" width="30" />
          </div>
          <div className={styles.gridTitle}>{item.title}</div>
          <div className={styles.Info}>
            <>
            <p>Seu IMC está entre</p>
            <p><strong>{item.imc[0]}</strong> <strong>{item.imc[1]}</strong> </p>
            </>
          </div>
        </div>
    </div>
  );
}