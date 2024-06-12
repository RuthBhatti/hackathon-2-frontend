import { useState, useEffect } from 'react';
import './Board.scss'
import Category from '../Category/Category';
import axios from 'axios';


const Board = ({trivia}) => {


    return (
        <>
            <header className='Title'>
                <h1>Code Crackle Trivia</h1>
            </header>
            <div className='price-box'>
                {trivia.map(categoryData => {
                    return (<Category 
                    categoryData = {categoryData}
                    key={categoryData.topic}
                    />)
                }
                )}
            </div>
        </>
    );
};

export default Board;