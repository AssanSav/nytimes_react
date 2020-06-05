import React from 'react';

const BestsellerCard = props => {
    return (
        <div>
            <ul>
                <p>Rank: {props.book.rank}</p>
                <p>Rank Last Week: {props.book.rank_last_week}</p>
                <p>Title: {props.book.title}</p>
                <p>Author: {props.book.author}</p>
                <p>Publisher: {props.book.publisher}</p>
                <p>Description: {props.book.description}</p>
                <img src={props.book.book_image} alt="books cover"/>
            </ul>
        </div>
    )
}

export default BestsellerCard;