function Button({ classes, text, onClick, type }) {
  return (
    <button type={type} className={classes} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
