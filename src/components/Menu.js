import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/list">Q-List</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/prime">PrimeQK</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/math">Math</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/program">Program</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/hobby">Hobby</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Others</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="https://twitter.com/tus_toshi1213" className="button special fit">My Twitter</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
