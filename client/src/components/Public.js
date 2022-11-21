import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Chuy's Bike Repair!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Not-San Antonio, Chuy's Bike Repair Shop  provides a trained staff ready to meet your cycling needs!</p>
                <address className="public__addr">
                    Chuy's Bike Repair<br />
                    123 Not A Real St<br />
                    Not-San Antonio, TX 12345<br />
                    <a href="tel:+18002239797">(800) 223-9797</a>
                </address>
                <br />
                <p>Owner: Chuy Probably</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public