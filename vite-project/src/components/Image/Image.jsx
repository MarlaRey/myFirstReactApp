
import styles from './Image.module.scss';
import Food from '../../assets/images/pexels-abhinav-goswami-291528.jpg';
import Food2 from '../../assets/images/pexels-ash-376464.jpg';
import Food3 from '../../assets/images/pexels-eneida-nieves-803963.jpg';
import Food4 from '../../assets/images/pexels-julie-aagaard-2097090.jpg';
import Food5 from '../../assets/images/pexels-ash-376464.jpg';
import Food6 from '../../assets/images/pexels-lisa-fotios-1279330.jpg';
import Food7 from '../../assets/images/pexels-lumn-604969.jpg';
import Food8 from '../../assets/images/pexels-malidate-van-769289.jpg';
import Food9 from '../../assets/images/pexels-malidate-van-769289.jpg';
import Food10 from '../../assets/images/pexels-william-choquette-2641886.jpg';

export const myDishes = [Food, Food2, Food3, Food4, Food5, Food6, Food7, Food8, Food9, Food10];

export const Image = (props) => {
  return (
    <div className={styles.gallery}>
      {props.data.map((item, key) => (
        <img key={key} src={item} alt={`Image ${key}`} />
      ))}
    </div>
  );
};
