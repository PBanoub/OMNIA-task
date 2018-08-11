export async function getNews(url) {

    // let result = await fetch(url).then(response => response.json());
    let result = {
        "status": "ok",
        "totalResults": 20,
        "articles": [
            {
                "source": {
                    "id": "bbc-news",
                    "name": "BBC News"
                },
                "author": "https://www.facebook.com/bbcnews",
                "title": "Peru poisoning: Ten die after eating contaminated food at wake",
                "description": "The victims are believed to have eaten contaminated food at a wake in the Ayacucho region.",
                "url": "https://www.bbc.co.uk/news/world-latin-america-45096700",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1678F/production/_102874029_87f48911-798f-4b89-83f8-937625dc0c4e.jpg",
                "publishedAt": "2018-08-08T08:56:07Z"
            },
            {
                "source": {
                    "id": null,
                    "name": "Ocregister.com"
                },
                "author": "Beatriz E. Valenzuela, Chris Haire, Keith Sharon, Brian Rokos",
                "title": "Hope, evacuations increase on Holy fire",
                "description": "Temperatures in the mid-90s could help firefighters Wednesday.",
                "url": "http://www.ocregister.com/firefighters-continue-to-battle-holy-fire-amid-excessive-heat-warning",
                "urlToImage": "https://www.ocregister.com/wp-content/uploads/2018/08/OCR-L-HOLYDAY2-0808-WP023.jpg?w=1024&h=682",
                "publishedAt": "2018-08-08T04:11:40Z"
            },
            {
                "source": {
                    "id": "the-new-york-times",
                    "name": "The New York Times"
                },
                "author": null,
                "title": "Tesla to Go Private? Stock Soars After Elon Musk Hints Yes",
                "description": "Tesla’s chief executive suggested that being a public company, beholden to shareholders, created perverse incentives for short-sellers.",
                "url": "https://www.nytimes.com/2018/08/07/business/tesla-stock-elon-musk-private.html",
                "urlToImage": "https://static01.nyt.com/images/2018/08/08/business/08tesla-alpha2/08tesla-alpha2-facebookJumbo.jpg",
                "publishedAt": "2018-08-08T04:05:17Z"
            },
            {
                "source": {
                    "id": null,
                    "name": "Abc7chicago.com"
                },
                "author": "Liz Nagy",
                "title": "2 toddlers struck by train, 1 fatally, in Portage, Indiana",
                "description": "A 3-year-old boy was killed and his 2-year-old sister was injured when they were struck by a train Tuesday morning in Portage, Indiana.",
                "url": "https://abc7chicago.com/2-toddlers-struck-by-train-1-fatally-in-portage/3900700/",
                "urlToImage": "https://cdns.abclocal.go.com/content/wls/images/cms/automation/vod/3904343_1280x720.jpg",
                "publishedAt": "2018-08-08T02:26:15Z"
            },
            {
                "source": {
                    "id": null,
                    "name": "Abc7.com"
                },
                "author": "Eileen Frere, bio, about",
                "title": "Santa Ana HS volleyball coach arrested for having sex with underage students",
                "description": "A high school volleyball coach has been arrested on suspicion of having sex with \"several\" minor students.",
                "url": "https://abc7.com/santa-ana-police-hs-coach-arrested-for-having-sex-with-students/3901285/",
                "urlToImage": "https://cdns.abclocal.go.com/content/kabc/images/cms/3901291_1280x720.jpg",
                "publishedAt": "2018-08-08T00:01:58Z"
            }]
        }
    return result.articles;
}

