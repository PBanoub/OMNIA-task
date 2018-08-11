import React from 'react';
import {Glyphicon} from 'react-bootstrap';
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
    
    //========= Fetching News
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

    //=========event listener on search input changes   
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

    //========= rendering news list
    render() {
        return (
            <div className="container news-area">
                <Title onSearch={event => this.handleSrchChange(event)}/>
                <div className="app-card-list" id="app-card-list">
                    {
                    //========= rendering news Cards        
                        Object
                        .keys(this.state.posts)
                        .map(key => <Card key={key} index={key} details={this.state.posts[key]} />)
                    }
                </div>
            </div>
        )
    }
}
    //========= separate title component
class Title extends React.Component {
    render() {
        return (
            <section className="list-title">
                <div className="title-content">
                    <h1>Latest News</h1>
                </div>
                {/* ========= Search Input */}
                <div className="search">
                    <input type="text" name="search" placeholder="SEARCH NEWS" onChange={this.props.onSearch}/>
                    <Glyphicon glyph="search"/>
                </div>
            </section>
        )
    }
}

export default NewsList;