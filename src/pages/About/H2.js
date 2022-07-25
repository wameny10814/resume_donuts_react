function H2(prop) {
  const { title, Entitle } = prop;
  return (
    <>
      <h3 className="bingH3 text-center">{Entitle}</h3>
      <h2 className="bingH2 text-center">{title}</h2>
    </>
  );
}

export default H2;
