import React, { Component } from 'react'
import { View, Text } from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Hello React-Native</Text>
      </View>
    );
  }
}

export default App;