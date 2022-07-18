import { useEffect, useState } from 'react'
import useClock from './useClock'
import ClockFace from './ClockFace'

import './Ticker.css'

const SimpleTicker = () => {
    const [isTick, setIsTick] = useState(false)
    const time = useClock('HH:mm:ss')

    useEffect(() => {
        setIsTick((t) => !t)
    }, [time])

    return (
        <div className="Ticker">
            <div className="Ticker-clock">
                <h1>Time {isTick ? 'Tick!' : 'Tock!'}</h1>
                {time}
                <br />
                <ClockFace time={time} />
            </div>
        </div>
    )
}

export default SimpleTicker
