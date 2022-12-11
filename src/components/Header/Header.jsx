import React from "react";
import styles from "./style.module.scss";

function Header() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickMenu = (index) => {
    setActiveIndex(index);
  };

  const menu = [
    "Главная",
    "Новости",
    "Картины и художники",
    "Экскурсии и музеи",
    "О сайте",
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
          <h1 className={styles.logo}>Art-territory</h1>
          <p>Место про искусство</p>      
      </div>
      <div className={styles.menuPanel}>
        <ul>
          {menu.map((value, index) => (
            <li
              onClick={() => onClickMenu(index)}
              className={activeIndex === index ? `${styles.active}` : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
      <i class="gg-search"></i>
      <i class="gg-user"></i>
    </div>
  );
}

export default Header;
