import './navbar.css'

export const Navbar = ({user}) => {
    const currentUser = user[0]

    console.log(currentUser.image)
  return (
    <div className='navbar'>
        <div className="logo">
            <span>F</span>F
        </div>
        <div className="userProfile">
            <img className='avatar'  src={currentUser.image} alt= ' avatar '/> 
            <p>{currentUser.name}</p>
        </div>
    </div>
  )
}
