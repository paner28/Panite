import React from 'react'
import ShareButtonList from './ShareButtonList'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <ShareButtonList title="Panite" url={`https://hungry-stonebraker-a61d3b.netlify.app/`} />
            </ul>
            <ul className="copyright">
                <li>&copy; Panite</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
