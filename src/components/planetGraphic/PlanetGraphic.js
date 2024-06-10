import styles from './planetGraphic.module.css';

const PlanetGraphic = ({ className = '', inverted = false}) => {
    return ( 
        <div className={`${styles.mask} ${inverted ? styles.inverted : ''} ${className}`}>
            <div className={`${styles.graphic}`} />
        </div>
    );
}
 
export default PlanetGraphic;