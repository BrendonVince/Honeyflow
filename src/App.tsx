import moment from 'moment'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const C = {
  FLOWING: "flowing",
  NOT_FLOWING: "not flowing :("
} as const

// input data: array of [status, time]
const data: [string, string][] = [
  [C.NOT_FLOWING, "2024-06-01T12:58:00+10:00"],
]

function App() {
  const latest = data[data.length - 1]
  const [text, updateTimeStr] = latest
  const updateTime = moment(updateTimeStr)
  return (
    <>
      <div className='emoji-container'>
        <span  role='img' aria-label='honey'>
        🍯
        </span>
      </div>
      <h1>{text}</h1>
      <p className="read-the-docs">
        {updateTime.format("LLLL")} ({updateTime.fromNow()})
      </p>
    </>
  )
}

export default App