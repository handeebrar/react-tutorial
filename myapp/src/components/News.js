import React from 'react';
import NewsItem from './NewsItem';

class News extends React.Component {
    render(){
        let nameElement = <div>hande</div>
        return(
            <div>
                { 2+2 === 4 ? nameElement : "hayır"}
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}

export default News;