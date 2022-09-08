import './style.scss';

function Header(props){
    return(
      <div className ='header_container'>
        <div className ='header_logo'>
          <div>
            <h1 className='logo'>Art-territory</h1>
            <p>Место про искусство</p>
          </div>
        </div>
        <div className='menuPanel'>
          <button>Главная</button>
          <button>Test</button>
          <button>О сайте</button>
        </div>
      </div>
    )
  }

export default Header;