import React from 'react'
import './layout.scss'

class Layout extends React.Component {
  constructor (props: any) {
    super(props)
  }

  public render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout