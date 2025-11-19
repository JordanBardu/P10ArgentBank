function Icon({ iconType, strokeColor, title, subtitle }) {
  return (
    <>
      <h1>{iconType}</h1>
      <h2 style={{ color: strokeColor }}>{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
}

export default Icon;
