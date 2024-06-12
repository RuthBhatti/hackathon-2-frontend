import { useState, useEffect } from 'react';
import './Board.scss'
import Category from '../Category/Category';
import axios from 'axios';


const Board = () => {
    const [trivia, setTrivia] = useState([])

    const getTriviaData = async () => {
        try {
            const res = await axios(`http://localhost:8080/questions`)
            setTrivia(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getTriviaData()
    }, [])

    return (
        <>
            <header>
                <h1>NAME</h1>
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