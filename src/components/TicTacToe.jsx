import React from "react";
import {BoardCell} from "./BoardCell";
import "../styles/tic-tac-toe.css";

export class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.renderBoardCell = this.renderBoardCell.bind(this);
        this.state = {
            positioning: Array(9).fill(null),
            isXNext: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleClick(i) {
        const positioning = this.state.positioning.slice();
        if (positioning[i] || calculateWinner(positioning)) return;
        positioning[i] = this.state.isXNext ? "x" : "o";
        this.setState(currentState => ({
            positioning: positioning,
            isXNext: !currentState.isXNext
        }));
    }

    renderBoardCell(v) {
        return (
            <BoardCell
                onClick={() => this.handleClick(v)}
                value={this.state.positioning[v]}
            />
        );
    }

    reset() {
        this.setState({
            positioning: Array(9).fill(null),
            isGameEnd: false
        });
    }

    render() {
        const winner = calculateWinner(this.state.positioning);
        let status;
        if (winner) {
            status = "The " + winner.toUpperCase() + " is winner!";
        } else {
            status = (
                <span>The next player is {this.state.isXNext ? "X" : "O"}</span>
            );
        }
        return (
            <>
                <div className="box">
                    <table className="board">
                        <tbody>
                        <tr className="firstRow">
                            {this.renderBoardCell(0)}
                            {this.renderBoardCell(1)}
                            {this.renderBoardCell(2)}
                        </tr>
                        <tr className="secondRow">
                            {this.renderBoardCell(3)}
                            {this.renderBoardCell(4)}
                            {this.renderBoardCell(5)}
                        </tr>
                        <tr className="thirdRow">
                            {this.renderBoardCell(6)}
                            {this.renderBoardCell(7)}
                            {this.renderBoardCell(8)}
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="box">{status}</div>

                <div className="box">
                    <button
                        className="button is-outlined is-warning"
                        onClick={this.reset}
                    >
                        Play again!
                    </button>
                </div>
            </>
        );
    }
}

function calculateWinner(pos) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i += 1) {
        const [a, b, c] = lines[i];
        if (pos[a] && pos[a] === pos[b] && pos[a] === pos[c]) {
            return pos[a];
        }
    }
    return null;
}
