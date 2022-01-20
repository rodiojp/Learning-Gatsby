import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

// Styles
import * as styles from "./index.module.css"

const NeuWrapper = styled.div`
  margin-bottom: 2rem;
  padding: 2rem 2rem 1rem;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 1rem 1rem 3rem hsla(0, 0%, 100%, 0.2), -1rem -1rem 3rem #ffffff;
`

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <section className={styles.wrapper}>
            <h1 className={styles.heading}>Welcome to your new Gatsby site.</h1>
            <NeuWrapper>
                <p>Now go build something great.</p>
                <StaticImage
                    src="../images/gatsby-astronaut.png"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem` }}
                />
                <p>This is the site we built together using Gatsby.</p>
                <p>
                    Though it may not look like much, it holds all the essentials you'll
                    need to get started building your own sites with Gatsby.
                </p>
                <p>
                    Make sure to check out the updated templates to see how the SEO
                    component is used, updated gatsby-node.js file for an additional
                    function to handle markdown articles without subject taxonomies, and
                    feel free to use this site as a template to build your own sites with
                    Gatsby!
                </p>
                <p>
                    And finally, lykke til from me to you on your journey with Gatsby!
                </p>
            </NeuWrapper>
        </section>
    </Layout>
)

export default IndexPage
