import React from 'react';
import './style.scss';

function Categories(){
    const [activeIndex, setActiveIndex] = React.useState(0);

    const categories = ['Все', '', '']

    const onClickCategory = (index)=>{
        setActiveIndex(index);
    }

    return(
        <div className='categories-container'>
            <ul>
                {
                    categories.map((value, index) =>(
                        <li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''} key={index}>
                            {value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;