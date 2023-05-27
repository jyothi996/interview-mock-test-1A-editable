import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {editText: '', buttonClicked: false}

  onChangeInput = event => {
    this.setState({editText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({buttonClicked: !prevState.buttonClicked}))
  }

  render() {
    const {editText, buttonClicked} = this.state
    const buttonState = buttonClicked ? 'Edit' : 'Save'

    return (
      <div className="bg-container">
        <div className="editable-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="text-container">
            {buttonClicked ? (
              <p className="text">{editText}</p>
            ) : (
              <input
                className="input"
                type="text"
                value={editText}
                onChange={this.onChangeInput}
              />
            )}
            <button
              className="button"
              type="button"
              onClick={this.onClickButton}
            >
              {buttonState}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
