export async function getNews(url) {

    let result = await fetch(url).then(response => response.json());
    return result.articles;
}

