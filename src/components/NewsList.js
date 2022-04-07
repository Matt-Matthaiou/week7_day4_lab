import React from "react";
import NewsItem from './NewsItem';

const NewsList = ({news}) => {

    const newsList = news.map((something, index) =>
        {
            return (
                <NewsItem key={index} item={something}/>
            )
        })

    return (
        <>
            <h2>Hello from NewsList </h2>
            {newsList}
        </>
        
    )

}

export default NewsList;