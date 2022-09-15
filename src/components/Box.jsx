import Paragraph from "./Paragraph";
import Styles from "../style.module.sass";
import { useSelector } from "react-redux";

function Box() {
  const text = useSelector((state) => state.text.text);
  return (
    <div className={Styles.box}>
      <Paragraph param={text} />
    </div>
  );
}

export default Box;
