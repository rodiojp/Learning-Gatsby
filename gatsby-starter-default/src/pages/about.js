import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
        <Seo title="About page" description="About page description" image="../images/gatsby-icon.png" />
        <h1>About</h1>
        <p>This is a static image from the static folder.</p>
        <img
            src="/images/bubbles-callout.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Bubles the robot"
            style={{ marginBottom: `1.45rem` }}
        />
        <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
            <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
            <Link to="/using-dsg">Go to "Using DSG"</Link>
        </p>
    </Layout>
)

export default AboutPage
