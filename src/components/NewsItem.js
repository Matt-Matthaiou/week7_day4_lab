import React from "react";


const NewsItem = ({item, index}) => {
    return (
        <>
        <p>{item.title}</p>
        <p>{item.by}</p>
        </>
    )   

}

export default NewsItem;