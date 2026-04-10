import './Header.css'

export function Header() {
    return (
        <header>
            <a href=""><img src="Logo.png" alt="Logo" /></a>
            <div className="navbar">
                <nav><a href="">Destinations</a></nav>
                <nav><a href="">Hotels</a></nav>
                <nav><a href="">Flights</a></nav>
                <nav><a href="">Bookings</a></nav>
            </div>
            <div className="header-section">
                <a href="">Login</a>
                <button className="sign-up-button">Sign up</button>
                <select name="language" id="" className="select-language">
                    <option value="1">EN</option>
                    <option value="1">IT</option>
                </select>
            </div>
        </header>
    )
}