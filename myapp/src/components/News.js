import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

class News extends React.Component {
    static propTypes = {
        news: PropTypes.array.isRequired,
        name: PropTypes.oneOfType([ //sadece number ve string ifadeler kabul ediliyor
            PropTypes.number,
            PropTypes.string
        ]).isRequired
    };
    render(){
        const elements = this.props.news.map(news => 
        <div key = {news.id} >
        <NewsItem
            title = {news.title}
            description = {news.description}
        />
        </div> );
        return(
            <div>
                { this.props.name }
                { elements }
            </div>
        )
    }
}

export default News;