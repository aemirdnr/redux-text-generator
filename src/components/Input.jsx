import Styles from "../style.module.sass";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchParas } from "../redux/textSlice";
import { useEffect } from "react";

function Input() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [type, setType] = useState();

  useEffect(() => {
    dispatch(
      fetchParas({ paras: count, option: type === "Yes" ? "html" : "text" })
    );
  }, [count, type]);

  return (
    <div className={Styles.settings}>
      <div className="d-flex flex-column gap-2">
        <span>Paragraphs</span>
        <input
          type="number"
          value={count}
          min="1"
          onChange={(e) => setCount(e.target.value)}
        />
      </div>
      <div className="d-flex flex-column gap-2">
        <span>Include HTML</span>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
  );
}

export default Input;
