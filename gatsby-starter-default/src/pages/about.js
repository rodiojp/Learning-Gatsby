import * as React from "react"
import { Link } from "gatsby"
import RobotImage from "../components/RobotImage"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
        <Seo title="About page" description="About page description" image="../images/gatsby-icon.png" />
        <h1>About</h1>
        <p>These are static images from the static folder showing by using a new [RobotImage] component.</p>
        <RobotImage src="/images/bubbles-callout.png" alt="Bubles the robot"/>
        <RobotImage src="/images/dolly-callout.png" alt="Dolly the robot"/>
        <RobotImage src="/images/eileen-callout.png" alt="Eileen the robot"/>
        <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
            <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
            <Link to="/using-dsg">Go to "Using DSG"</Link>
        </p>
    </Layout>
)

export default AboutPage
