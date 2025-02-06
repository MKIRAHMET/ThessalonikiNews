var xhr = new XMLHttpRequest();
var url = 'https://newsapi.org/v2/everything?q=Thessaloniki&language=en&sortby=popularity&apiKey=6472a3593ba346bea3dadb1ccf882e28';

xhr.open('GET', url, true);
xhr.responseType = 'json';


xhr.onload = function() {
    if (xhr.status === 200) {

        var news = xhr.response.articles;
        var newsDiv = document.createElement('div');
        newsDiv.classList.add('news-container');
    
        news.forEach(function(item) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var h2 = document.createElement('h2');
            h2.textContent = item.title;
            var sourceInfo = document.createElement('p');
            sourceInfo.innerHTML = `<strong>${item.source.name}</strong> | ${item.author || "Unknown Author"}`;
            var p = document.createElement('p');
            p.textContent = item.description;

            var img = document.createElement('img');
            img.src = item.urlToImage || "https://via.placeholder.com/150";
            img.alt = "News Image";
            img.style.width = "100%"

            var a = document.createElement('a');
            a.href = item.url;
            a.textContent = "Read More";
            a.target = "_blank";

            articleDiv.append(h2, sourceInfo, img, p, a);
            

            newsDiv.appendChild(articleDiv);
        });
        document.body.appendChild(newsDiv);
    } else {
        alert('There was an error')
    }
  
}
xhr.onerror = function() {
    console.error("Network request failed.");
};

xhr.send();