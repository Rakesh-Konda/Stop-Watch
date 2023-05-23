// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, sec: 0, go: true, hlo: true}

  componentDidMount() {
    console.log('component')
    this.timerId = setInterval(this.tick, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {go, min, sec} = this.state
    let newMin = min
    let newSec = sec

    if (go) {
      return
    }

    if (!go) {
      newSec = sec + 1

      if (newSec === 60) {
        newSec = 0
        newMin = min + 1
      }

      if (newMin === 60) {
        newMin = 0
      }

      this.setState({min: newMin, sec: newSec})
    }
  }

  start = () => {
    console.log('start')
    this.setState({go: false, hlo: false})
    clearInterval(this.timerId)
    this.timerId = setInterval(this.tick, 100)
  }

  stop = () => {
    console.log('stop')
    clearInterval(this.timerId)
    this.setState({go: true})
  }

  reset = () => {
    console.log('reset')
    clearInterval(this.timerId)
    this.setState({min: 0, sec: 0, go: true})
    clearInterval(this.timerId)
  }

  render() {
    const {min, sec, hlo} = this.state
    const formattedMin = min.toString().padStart(2, '0')
    const formattedSec = sec.toString().padStart(2, '0')
    return (
      <div className="bg">
        <h1>Stopwatch</h1>
        <div className="card">
          <div className="cen">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img"
            />
            <p>Timer</p>
          </div>
          <h1 className="hh">
            {hlo ? '00:00' : `${formattedMin}:${formattedSec}`}
          </h1>
          <div className="but">
            <button type="button" className="but1" onClick={this.start}>
              Start
            </button>
            <button type="button" className="but2" onClick={this.stop}>
              Stop
            </button>
            <button type="button" className="but3" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
