import React from "react";
import Styles from "../style.module.sass";

function Header() {
  return (
    <div className={Styles.header}>
      <h1>React text generator app</h1>
      <hr />
    </div>
  );
}

export default React.memo(Header);
