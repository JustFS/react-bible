import React, { Component } from 'react'
import './AppMD.scss'
import marked from 'marked'
import { sampleText } from './sampleText'

class AppMD extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')

    if (text) {
      this.setState({ text })
    } else {
      this.setState({ text: sampleText })
    }
  }

  componentDidUpdate () {
    const { text } = this.state
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render () {
    return (
      <div className='mkd-container'>
        <div className='row'>
          <div className='col-sm-6'>
            <textarea
              onChange={this.handleChange}
              value={this.state.text}
              className='form-control'
              rows='35' 
              placeholder="Enter your text text..."
            />
          </div>
          <div className='col-sm-6'>
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)} />
          </div>
        </div>
      </div>
    )
  }
}

export default AppMD
