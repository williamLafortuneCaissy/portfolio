import styles from "./button.module.css";

const Button = ({as: Component = "button", secondary = false, className = '', ...props}) => {
    return ( 
        <Component className={`${styles.btn} ${(secondary ? styles.secondary : styles.primary)} ${className}`} {...props} />  
    );
}
 
export default Button;