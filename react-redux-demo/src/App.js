import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'
import './index.css'

// import createStore from './store'
import themeReducer from './reducer'

import { createStore } from 'redux'

const store = createStore(themeReducer)

class App extends Component {

    static childContextTypes = {
        store: PropTypes.Object
    }

    getChildContext () {
        return { store }
    }

    render () {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

export default App