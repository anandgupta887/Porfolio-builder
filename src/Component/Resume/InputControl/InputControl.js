import React from "react";

import styles from "./InputControl.module.css";

function InputControl({ label, isMultiline, ...props }) {
  return (
    <>
      {isMultiline ? (
        <div className={styles.container}>
          {label && <label>{label}</label>}
          <textarea type="text" {...props} />
        </div>
      ) : (
        <div className={styles.container}>
          {label && <label>{label}</label>}
          <input type="text" {...props} />
        </div>
      )}
    </>
  );
}

export default InputControl;
