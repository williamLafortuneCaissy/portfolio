import styles from "./button.module.css";

const Button = ({as: Component = "button", secondary = false, className = '', disabled = false, ...props}) => {
    return ( 
        <Component className={`${styles.btn} ${(secondary ? styles.secondary : styles.primary)} ${className} ${disabled ? styles.disabled : ''}`} disabled={disabled} {...props} />  // className={`btn ${secondary ? 'btn-secondary' : 'btn-primary'}`} {...props} />  
    );
}
 
export default Button;