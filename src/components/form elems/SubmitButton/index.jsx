import React from "react";
import styles from "./SubmitButton.module.scss";

const SubmitButton = ({ innerText, disabled }) => {
  return (
    <input
      type="submit"
      value={innerText}
      disabled={disabled}
      className={styles.submitButton}
    />
  );
};

export default SubmitButton;
