import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { graphql } from "gatsby"
import Card from "../components/card"
import { Helmet } from "react-helmet"

function OSS({ data }) {
  const ossList = data.allOssYaml.edges

  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>OSS</title>
      </Helmet>
      <div className="row">
        {ossList.map(({ node }) => {
          return (
            <Card
              cardTitle={node.title}
              cardSubtitle={node.description}
              cardStack={node.stack}
              link={node.link}
              key={node.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default OSS

export const query = graphql`
  {
    allOssYaml {
      edges {
        node {
          title
          description
          stack
          link
          id
        }
      }
    }
  }
`
