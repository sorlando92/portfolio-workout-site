import HeaderLogo from "../Images/CSLogo.png"

function Header() {

    return (
        <nav className="navbar navbar-expand-xl">
            <div className="container d-flex justify-content-start align-items-center flex-nowrap">
                <div>
                    <a className="navbar-brand" href="https://coachsean.online">
                        <img className="navbar-brand"
                            src={HeaderLogo}
                            alt="Coach Sean's Logo" height="100" width="" />
                    </a>
                </div>
                <span>
                    <h1>Coach Sean's Programming</h1>
                </span>
            </div>
        </nav>
    )
}

export default Header
