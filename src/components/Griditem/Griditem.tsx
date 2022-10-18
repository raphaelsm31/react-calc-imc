import { Level } from "../../helpers/imc";
import styles from './Griditem.module.css'
import UpImage from '../../assets/up.png'
import DownImage from '../../assets/down.png'

type Props = {
    item: Level
};

export const GridItem = ({ item }: Props) => {
    return(
        <div className={styles.main} style={{ backgroundColor: item.color }}> 
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? UpImage : DownImage } alt="" width="30" />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc && 
                <div className={styles.yourImc}>Seu IMC é de <strong>{item.yourImc}</strong> kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}