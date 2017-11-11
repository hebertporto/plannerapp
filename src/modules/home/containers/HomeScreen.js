import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import { testRedux } from './../../../redux/actions/home/index'

class HomeScrenn extends Component {
  componentDidMount() {
    const { testRedux } = this.props
    testRedux()
  }

  render() {
    const { init } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Text> Home Screen </Text>
        <Text> {init} </Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    init: state.home.init,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testRedux: () => dispatch(testRedux()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScrenn)
