import React, { memo } from "react";
import styles from "./Input.module.scss";

const Input = ({ id, type, labelText, onChange }) => {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <br />
      <input
        type={type}
        id={id}
        onChange={onChange}
        className={styles.input}
        required
      />
    </>
  );
};

export default React.memo(Input);
