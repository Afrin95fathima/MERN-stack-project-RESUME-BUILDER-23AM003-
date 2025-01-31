import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, type, value, placeholder, onChange }) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type || "text"}
        value={value || ""}
        placeholder={placeholder || ""}
        onChange={(e) => onChange && onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}

export default InputControl;
