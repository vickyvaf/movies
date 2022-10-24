import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav>
        <div className="left">
          <img src="logo.png" alt="" />
        </div>
        <div className="mid">
          <Link to={'/'} className='nav-link active'>Home</Link>
          <Link to={'/series'} className='nav-link'>Series</Link>
          <Link to={'/movies'} className='nav-link'>Movies</Link>
          <Link to={'/new-and-popular'} className='nav-link'>New and Popular</Link>
          <Link to={'/my-list'} className='nav-link'>My List</Link>
        </div>
        <div className="right">
          <img src="search.png" alt=""/>
          <span>Vicky</span>
          <img src="gift.png" alt=""/>
          <img src="ring.png" alt=""/>
          <img src="avatar.png" alt=""/>
          <img src="arrow-down.png" alt=""/>
        </div>
      </nav>
    </header>
  )
}

export default Header