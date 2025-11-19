function Icon({ iconType, title, text }) {
  return (
    <>
        <h2 className="sr-only">Features</h2>
        <div className="feature-item">
          <img src={iconType} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{text}</p>
        </div>
    </>
  );
}

export default Icon;
