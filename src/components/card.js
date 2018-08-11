import React from 'react';
import '../assets/styles/newsCard.css';

export default class Card extends React.Component {
    render() {
        return (
            <article className="card">
                <CardHeader image={this.props.details.urlToImage} />
                <CardBody title={this.props.details.title} author={this.props.details.source.name} date={this.props.details.publishedAt} />
            </article>
        )
    }
}

// =====Card Header render
class CardHeader extends React.Component {
    render() {
        const image = this.props.image;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} className="card-header"></header>
        )
    }
}

// =====Card Body render
class CardBody extends React.Component {
    render() {
        var date = new Date(this.props.date)
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var t = (day === 1||day === 21||day === 31 ? 'st' : day === 2||day === 22 ? 'nd' : day === 3 ? 'rd' : 'th');
        var strMonths = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
        var monthDateYear = day + t + " " + strMonths[month] + " " + year;

        return (
            <div className="card-body">
                <p className="date">{monthDateYear}</p>
                <h2 className="newsTitle">{this.props.title}</h2>
                <span className="author">
                    {this.props.author}
                </span>
            </div>
        )
    }
}