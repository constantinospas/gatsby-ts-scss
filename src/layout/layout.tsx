import React from 'react'
import './layout.scss'
import Header from '../components/header'
import Footer from '../components/footer'

class Layout extends React.Component {
  constructor (props: any) {
    super(props)
  }

  public render () {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Layout