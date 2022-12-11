import React, { useEffect, useState } from "react";
import Painting from "../../components/PaintingBlock/Painting";
import Api from "../../Api/PaintingActions/Painting";
import styles from "../PaintingsCatalog/styles.module.scss"

function PaintingCatalog(props) {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    (async () => {
      const test = await Api.getPaintigs();
      setPaintings(test);
    })();
  }, []);

  return (
    <div className={styles.paintings}>
      {paintings !== null &&
        paintings.length > 0 &&
        paintings.map((painting) => <Painting {...painting} />)}
    </div>
  );
}

export default PaintingCatalog;
