import logo from '../media/ball.png'
import '../style/Logo.css'

function Ball() {

    return (
        <div className="logo-container">
            <p/>
            <img className="spinning-logo" src={logo}/>
        </div>   
    );
}

export default Ball;
