import styles from './gridSpot.module.css';

const GridSpot = ({ hero=false }) => {
    return ( 
        <div className={`${styles.spot} ${hero ? styles.heroSpot : ''}`}/>
    );
}
 
export default GridSpot;