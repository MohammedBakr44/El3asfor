import { useState, useRef } from 'react'
import logo from './logo.svg'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { incrementPlay, pausePlay } from './redux'
import './App.css'
import el3asfor from './el3asfor.mp3';

function App({ count, dispatch }) {
  const audioEl = useRef(null);

  const handlePlayAudio = () => {
    let current = audioEl.current;
    if (!current.paused && !current.ended) {
      current.pause();
    }
    dispatch(incrementPlay());
    current.play();
  }

  const handlePauseAudio = () => {
    dispatch(pausePlay());
    audioEl.current.pause();
  }

  return (
    <div className="App">
      <header className="App-header">
        <audio ref={audioEl}>
          <source src={el3asfor} type="audio/mp3" />
        </audio>
        <div className="App-actions">
          <button className='primary' onClick={handlePlayAudio}>
            PLAY
          </button>
          <button className="danger" onClick={handlePauseAudio}>
            PAUSE
          </button>
        </div>
        <main className="counter">
          <p className="count">{count}</p>
        </main>
      </header>
    </div >
  )
}

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps)(App)
