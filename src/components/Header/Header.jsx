import React from 'react';
import './style.scss';

function Header(props){
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickMenu = (index) =>{
    setActiveIndex(index);
  }

  const menu = [
    'Главная',
    'Новости',
    'Картины и художники',
    'Экскурсии и музеи',
    'О сайте'
  ]

    return(
      <div className ='header_container'>
        <div className ='header_logo'>
          <div>
            <h1 className='logo'>Art-territory</h1>
            <p>Место про искусство</p>
          </div>
        </div>
        <div className='menuPanel'>
          <ul>
            {
              menu.map((value, index) => (
                <li onClick={() => onClickMenu(index)} className={activeIndex === index? 'active': ''}>
                  {value}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }

export default Header;