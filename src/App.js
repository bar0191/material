import React, { Component } from 'react'
import './App.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MotionMenu from 'react-motion-menu'
import Menu from 'material-ui/svg-icons/navigation/menu'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <div className="App-header-middle">
              <MotionMenu
                type="circle"
                margin={120}
                y={0}
                bumpy
                x={0}
                openSpeed={80}
                wing={false}
                reverse={false}
                onOpen={() => console.log('onOpen')}
                onClose={() => console.log('onClose')}>
                <FloatingActionButton><Menu/></FloatingActionButton>
                <FloatingActionButton></FloatingActionButton>
                <FloatingActionButton></FloatingActionButton>
                <FloatingActionButton></FloatingActionButton>
                <FloatingActionButton></FloatingActionButton>
                <FloatingActionButton></FloatingActionButton>
                <FloatingActionButton></FloatingActionButton>
                <FloatingActionButton></FloatingActionButton>
              </MotionMenu>
            </div>
          </div>
        </div>

      </MuiThemeProvider>
    )
  }
}

export default App
