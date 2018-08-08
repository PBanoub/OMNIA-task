import React from 'react';
import '../assets/styles/list.css';
import { getNews } from '../news';
import Card  from './card';

class NewsList extends React.Component {
    constructor() {
        super();
        this.state = { posts: [], refreshing: true,searchValue:'',lastChar:'' };
        this.fetchNews = this.fetchNews.bind(this);
    }

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews(searchVal) {
        var searchfor='Latest News';
        var sortBy='publishedAt';
        if(searchVal){
            searchfor=searchVal;
            sortBy='relevancy';
        }
        var url = 'https://newsapi.org/v2/everything?q='+searchfor+'&from=' + new Date() + '&page=3&pageSize=6&sortBy='+sortBy+'&apiKey=1d87b99528314f04865d88485a0e3733';
        getNews(url).then(posts => this.setState({ posts, refreshing: false }))
        .catch(() => this.setState({ refreshing: false }));
    }
    handleSrchChange (event) {
        this.setState({
            searchValue : event.target.value,
            lastChar: event.target.value.slice(-1)
        }, function() {
            if(this.state.searchValue.length>=2){
                this.fetchNews(this.state.searchValue);
             }
        });


    }
    render() {
        return (
            <div className="container news-area">
                <Title onSearch={event => this.handleSrchChange(event)}/>
                <div className="app-card-list" id="app-card-list">
                    {
                        Object
                        .keys(this.state.posts)
                        .map(key => <Card key={key} index={key} details={this.state.posts[key]} />)
                    }
                </div>
            </div>
        )
    }
}

class Title extends React.Component {
    render() {
        return (
            <section className="app-title">
                <div className="app-title-content">
                    <h1>Latest News</h1>
                </div>
                <div className="search">
                    <input type="text" name="search" placeholder="SEARCH NEWS" onChange={this.props.onSearch}/>
                    <i className="fa fa-search"></i>
                </div>
            </section>
        )
    }
}

export default NewsList;