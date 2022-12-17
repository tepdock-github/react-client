import React from "react";
import { Link } from "react-router-dom";
import styles from "./TargetLink.module.scss";

const TargetLink = ({ targetText, path, linkText }) => {
  return (
    <span className={styles.targetLink}>
      {targetText} <Link to={path}>{linkText}</Link>
    </span>
  );
};

export default TargetLink;
