import React from 'react';
import './Category.scss'

const Category = ({data}) => {

    return (
        <>
        <header>categoryName</header>
        <section>
            <article className='price-button'>
                <h2>$200.00</h2>
            </article>
            <article className='price-button'>
                <h2>$400.00</h2>
            </article>
            <article className='price-button'>
                <h2>$600.00</h2>
            </article>
            <article className='price-button'>
                <h2>$800.00</h2>
            </article>
            <article className='price-button'>
                <h2>$1000.00</h2>
            </article>
        </section>
        </>
    )
};

export default Category;