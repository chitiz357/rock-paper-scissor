import React from 'react'
import './App.css'

enum O {
	r = 'rock',
	p = 'paper',
	s = 'scissor',
}

enum winState {
	lose = 'lose',
	win = 'win',
	tie = 'tie',
}

function App() {
	return (
    <div className='App'>
      <h1>rock, paper, scissor</h1>
      <div className='bar'>

			<button className='button-game green' onClick={() => pick(O.r)}>
				🪨
			</button>
			<button className='button-game blue' onClick={() => pick(O.p)}>
				📃
			</button>
			<button className='button-game red' onClick={() => pick(O.s)}>
				✂️
			</button>
      </div>
		</div>
	)
}
function isWin(pick: O, foo = pickRandom()) {
	if (
		(pick === O.r && foo === O.s) ||
		(pick === O.p && foo === O.r) ||
		(pick === O.s && foo === O.p)
	) {
		return winState.win
	}
	if (pick === foo) {
		return winState.tie
	} else {
		return winState.lose
	}
}

function pickRandom() {
	const rand = Math.floor(Math.random() * 3 + 1)
	if (rand === 1) return O.r
	if (rand === 2) return O.p
	if (rand === 3) return O.s
}

function pick(userOption: O): void {
	const cpu = pickRandom()
	const con = isWin(userOption, cpu)

	alert(`
  you pick is: ${userOption}
  cpe pick is: ${cpu}
  you are: ${con}`)
}

export default App
