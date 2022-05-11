import "./Menu.css"
import "../../App.css"
import { Link, useHistory } from 'react-router-dom';

const Menu = (toggleMenu) => {
    return (
        <div id="menu-background">
            <h5 id='close' onClick={toggleMenu.toggleMenu}>X CLOSE</h5>
            <div id="options">
                <Link onClick={toggleMenu.toggleMenu} to="/about"  title="About">
                    <h4>ABOUT</h4>
                </Link>
                <Link onClick={toggleMenu.toggleMenu} to="/program"  title="Program">
                    <h4>PROGRAM</h4>
                </Link>
                <Link onClick={toggleMenu.toggleMenu} to="/proyecto-play"  title="ProyectoPlay">
                    <h4>PROYECTO PLAY</h4>
                </Link>
                <Link onClick={toggleMenu.toggleMenu} to="/proyecto-play/about"  title="About">
                    <h5>ABOUT</h5>
                </Link>
                <Link onClick={toggleMenu.toggleMenu} to="/proyecto-play/past-events"  title="PastEvents">
                    <h5>PAST EVENTS</h5>
                </Link>
                <Link onClick={toggleMenu.toggleMenu} to="/proyecto-play/upcoming-events"  title="UpcomingEvents">
                    <h5>UPCOMING EVENTS</h5>
                </Link>
                <Link onClick={toggleMenu.toggleMenu} to="/resources"  title="Resources">
                    <h4>RESOURCES FOR PLAY</h4>
                </Link>
                <Link onClick={toggleMenu.toggleMenu} to="/press"  title="Press">
                    <h4>PRESS</h4>
                </Link>
            </div>
        </div>
    );

}

export default Menu;