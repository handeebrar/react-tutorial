import React, { Component } from 'react';
import NewsItemCss from '../NewsItem.css';

class NewsItem extends React.Component {
    render() {
        return (
            <div>
            <h1 className = 'title'>Hello React</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum congue augue, in dictum neque hendrerit sit amet.</p>
            </div>
        );
    }
}

export default NewsItem; //componenti disa aktarmak icin kullaniliyor