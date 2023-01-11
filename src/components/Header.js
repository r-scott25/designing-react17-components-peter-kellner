function Header() {
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify=content-between">
          <img alt="SVCC Home Page" src="/images/SVCCLogo.png" />
        </div>
        <div className="light">
          <h4 className="header-title">
            Silicon Valley Code Camp
          </h4>
        </div>
        <div className="text-dark">
          Hello Mr. Smith &nbsp;&nbsp;
          <span>
            <a href="#">Sign-Out</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header;