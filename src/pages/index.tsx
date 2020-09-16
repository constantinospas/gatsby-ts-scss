import * as React from 'react'
import Layout from '../layout/layout'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

class IndexPage extends React.Component {

  public render () {

    return (
      <Layout>
        <div>
          Main content
          <div className={`buttons`}>
            <ButtonGroup>
              <Button variant={`contained`} color={`primary`}>Button1</Button>
              <Button variant={`text`} color={`secondary`}>Button2</Button>
              <Button variant={`outlined`} color={`default`}>Button3</Button>
            </ButtonGroup>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage