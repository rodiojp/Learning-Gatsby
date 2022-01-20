import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Styles
import * as styles from "./index.module.css"

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <section className={styles.wrapper}>
            <h1 className={styles.heading}>Welcome to your new Gatsby site.</h1>
            <p>Now go build something great.</p>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
            />
        </section>
    </Layout>
)

export default IndexPage
