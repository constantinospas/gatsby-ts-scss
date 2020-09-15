import { graphql } from 'gatsby'
import * as React from 'react'
import * as styles from './Index.module.scss'
import Layout from '../layout/layout'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

class IndexPage extends React.Component<IndexPageProps, {}> {

  public render () {
    const { name, tagline } = this.props.data.site.siteMetadata
    return (
      <Layout>
        <div className={styles.Container}>
          <h1>{name}</h1>
          <p>{tagline}</p>
        </div>
      </Layout>
    )
  }
}

export default IndexPage