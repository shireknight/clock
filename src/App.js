import React, { useState } from 'react'
import './App.css'
import Ticker from './Ticker'
import SimpleTicker from './SimpleTicker'
import IntervalTicker from './IntervalTicker'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
    const [hidden, setHidden] = useState(false)

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/simple" element={<SimpleTicker />} />
                    <Route path="/interval" element={<IntervalTicker />} />
                    <Route
                        path="/clocks"
                        element={
                            <>
                                <h1>Clocks</h1>
                                <button onClick={() => setHidden((h) => !h)}>
                                    {hidden ? 'Show' : 'Hide'}
                                </button>
                                {hidden || <Ticker />}
                            </>
                        }
                    />
                </Routes>
                <ul>
                    <li>
                        <Link to="/simple">Simple ticker</Link>
                    </li>
                    <li>
                        <Link to="/interval">Interval ticker</Link>
                    </li>
                    <li>
                        <Link to="/clocks">A collection of clocks</Link>
                    </li>
                </ul>
            </BrowserRouter>
        </div>
    )
}

export default App
