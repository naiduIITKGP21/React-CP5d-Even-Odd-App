// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  changeState = () => {
    this.setState(prevStat => ({
      count: prevStat.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const type = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg">
        <div className="eo-bg">
          <h1 className="eo-count">Count {count}</h1>
          <div>
            <p className="eo-count-type">Count is {type}</p>
            <button
              className="eo-button"
              type="button"
              onClick={this.changeState}
            >
              Increment
            </button>
            <p className="eo-description">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
