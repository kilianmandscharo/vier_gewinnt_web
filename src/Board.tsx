import React from 'react';
import './Board.css';
import { useState, useEffect } from 'react';

export const Board = () => {

    const [gameState, setGameState] = useState(1);
    const [turn, setTurn] = useState(1);
    const [board, setBoard] = useState(createBoard());

    const setClass = (cell: string) => {
        let reVal = "cell"
        let c = cell.toString();
        if(c === "X") {
            reVal += " red-cell";
        } else if(c === "O") {
            reVal += " yellow-cell";
        } else {
            return reVal;
        }
        return reVal;
    }

    return(
        <div className="board">
            {board.map((row, rowIdx) => (
                <div key={rowIdx} className="row">{
                    row.map((cell, cellIdx) => (
                        <div key={cellIdx} className={setClass(cell)}>{cell}</div>
                    ))
                }</div>
            ))}
        </div>
    );
}

const createBoard = () => {
    let counter = 1;
    const board = [];
    for(let row = 1; row < 7; row++) {
        const currRow: string[] = [];
        for(let col = 1; col < 8; col++) {
            currRow.push(counter.toString());
            counter++
        }
        board.push(currRow);
    }
    board[0][5] = "X";
    board[4][2] = "O";
    return board;
}