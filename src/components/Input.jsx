import Styles from "../style.module.sass";

function Input() {
  return (
    <div className={Styles.settings}>
      <div className="d-flex flex-column gap-2">
        <span>Paragraphs</span>
        <input type="number" value="3" />
      </div>
      <div className="d-flex flex-column gap-2">
        <span>Include HTML</span>
        <select>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
