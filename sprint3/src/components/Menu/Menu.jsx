import MenuItem from '../MenuItem';
import './style.css';

export default function Menu() {
    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
                <MenuItem/>
            </ul>
        </nav>
    );
}