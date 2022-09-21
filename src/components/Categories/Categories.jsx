import React from 'react';
import './style.scss';

function Categories(){
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index)=>{
        setActiveIndex(index);
    }

    return(
        <div className='categories-container'>
            <ul>
                <li onClick={() => onClickCategory(0)}
                    className={activeIndex===0? 'active' : ''}>
                    Все
                </li>
                <li onClick={() => onClickCategory(1)}
                    className={activeIndex===1? 'active' : ''}>
                </li>
                <li onClick={() => onClickCategory(2)}
                    className={activeIndex===2? 'active' : ''}>
                </li>
            </ul>
        </div>
    )
}

export default Categories;