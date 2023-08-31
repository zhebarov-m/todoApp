import styles from "./Button.module.css";

function Button(props) {
  const { children, title, onClick, disabled = false } = props;
  return (
    <button
      {...props}
      className={`${styles.button} ${disabled ? disabled : ""}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
