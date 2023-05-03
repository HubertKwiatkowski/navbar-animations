import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-top">
        <h2>Code Better</h2>
        <div className="subscribe">
          <p className="subscribe-text">3,000+ engineers community worldwide</p>
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      <ul className="navbar">
        <li>Typescript</li>
        <li>React Native</li>
        <li>Gatsby</li>
        <li>Github</li>
      </ul>
    </div>
  )
}

export default Navbar