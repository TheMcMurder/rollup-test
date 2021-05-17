import React from 'react'
import ReactDOM from 'react-dom'
console.log('hey')
// import Root from './root.jsx'

const domNode = document.querySelector('main')
console.log('domNode', domNode)
ReactDOM.render(<div>test</div>, domNode)