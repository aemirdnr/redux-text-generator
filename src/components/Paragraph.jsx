import Style from "../style.module.sass";

function Paragraph({ param }) {
  return <p className={Style.paragraph}>{param}</p>;
}

export default Paragraph;
