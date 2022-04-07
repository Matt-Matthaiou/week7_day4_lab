import React from "react";


const NewsItem = ({item, index}) => {
    const dateObj = new Date(item.time * 1000)
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
    const date = dateObj.getDate()
    const month = months[dateObj.getMonth()]
    const year = dateObj.getFullYear()

    return (
        <>
            <div class="news-item">
                <br></br>
                <span>#{index}</span>
                <a href={item.url}><p>{item.title}</p></a>
                <p>{item.by}</p><span>{date} {month} {year}</span>
            </div>
        </>
    )   

}

export default NewsItem;