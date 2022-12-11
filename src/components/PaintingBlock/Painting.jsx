import React from "react";
import styles from "./style.module.scss";

function PaintingBlock(props) {
    const {name, pictureUrl, description, year} = props;
    console.log(props);
    return(
        <div className={styles.painting_block}>
            <div>
                <img src={pictureUrl} alt="painting" className={styles.painting_block_image} />
            <div className={styles.painting_block_overview}>
                <h4 className={styles.painting_block_title}>{name}</h4>
                <h4 className={styles.painting_block_year}>{year}</h4>
            </div>
                <div className={styles.painting_block_descr}>{description}</div>
            </div>
        </div>
    )
}

export default PaintingBlock;