import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ProfilePic from "../images/profile-pic.jpg"

class Hello extends React.Component {
    render() {
        const { data } = this.props;
        const { social, title, miniDesc } = data.site.siteMetadata;

        return (
        <Layout
            location={this.props.location}
            title={title}
            miniDesc={miniDesc}
        >
            <SEO title="Hello" />
            <h1>Hello I'm Jessica!</h1>
            <h3>I'm a maker from Mexico.</h3>
            <p>I like to make all sort of things but mostly props and scratch built models and recently I've being intrested on making small props for action figures and some dioramas.</p>
            <img src={ProfilePic} alt={`${title} ${miniDesc}`}  title={`${title} ${miniDesc}`} />
            <p>If you want to know what I'm up to you can follow me here:</p>
            <a target="_blank" href={`${social.instagram}`} rel="noopener noreferrer" >Instagram</a><br></br>
            <a target="_blank" href={`${social.facebook}`} rel="noopener noreferrer" >Facebook</a>
        </Layout>
        )
    }
}

export default Hello

export const pageQuery = graphql`
    query {
        site {
        siteMetadata {
            title,
            miniDesc,
            social {
                facebook,
                instagram,
            }
        }
        }
    }
`
