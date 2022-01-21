import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./mainnav.module.css"

const Mainnav = () => (
    <nav className={styles.navigation}>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/events/">Events</Link></li>
            <li><Link to="/page-2/">Page 2</Link></li>
            <li><Link to="/using-typescript/">Using TypeScript</Link></li>
            <li><Link to="/using-ssr">Using SSR</Link></li>
            <li><Link to="/using-dsg">Using DSG</Link></li>
        </ul>
    </nav>
)

export default Mainnav