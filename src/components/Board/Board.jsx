import React from 'react';
import './Board.scss'
import Category from '../Category/Category';


const Board = () => {
    return (
        <>
            <header>
                <h1>NAME</h1>
            </header>
            <div className='price-box'>
                <Category></Category>
                <Category></Category>
                <Category></Category>
                <Category></Category>
            </div>
        </>
    );
};

export default Board;