import React from 'react'
import { createAppContainer } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from 'navigation/AppNavigation'
const AppContainer = createAppContainer(AppNavigation)

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  return <AppContainer />
}

const mapStateToProps = state => ({ state: state })
export default connect(mapStateToProps)(ReduxNavigation)