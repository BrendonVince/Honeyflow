import moment from 'moment'
import './App.css'

const C = {
  FLOWING: "flowing",
  NOT_FLOWING: "not flowing :("
} as const

// input data: array of [status, time]
const data: [string, string][] = [
  [C.NOT_FLOWING, "2024-06-01T12:58:00+10:00"],
  [C.FLOWING, "2024-06-02T11:49:00+10:00"],
  [C.NOT_FLOWING, "2024-06-03T16:00:00+10:00"],
  [C.NOT_FLOWING, "2024-06-04T11:53:00+10:00"],
  [C.NOT_FLOWING, "2024-06-05T11:15:00+10:00"],
  [C.NOT_FLOWING, "2024-06-06T11:16:04+10:00"],
  [C.NOT_FLOWING, "2024-06-07T20:20:04+10:00"],
]

function App() {
  const latest = data[data.length - 1]
  const [text, updateTimeStr] = latest
  const updateTime = moment(updateTimeStr)

  // Determine the background class based on the status
  const backgroundClass = text === C.FLOWING ? 'flowing-background' : 'not-flowing-background';

  return (
    <div className={backgroundClass}>
      <div className='emoji-container'>
        <span role='img' aria-label='honey'>
          🍯
        </span>
      </div>
      <h1>{text}</h1>
      <p className="read-the-docs">
        {updateTime.format("LLLL")} ({updateTime.fromNow()})
      </p>
    </div>
  );
}

export default App;
