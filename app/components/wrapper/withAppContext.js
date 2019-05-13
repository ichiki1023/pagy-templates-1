import React from 'react'
import AppContext from 'app/context/AppContext'

export default function withAppContext (Page) {
  return class extends React.Component {
    static getInitialProps (ctx) {
      if (Page.getInitialProps) return Page.getInitialProps(ctx)
    }
    render () {
      return (
        <AppContext.Consumer>
          {contexts => <Page {...this.props} {...contexts} />}
        </AppContext.Consumer>
      )
    }
  }
}