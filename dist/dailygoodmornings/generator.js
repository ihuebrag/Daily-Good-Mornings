function get_image_url_for_day(urls, dayOfYear) {
    return urls[(dayOfYear - 1) % urls.length];
}

function generate_html(imageUrl) {
    const htmlContent = `<img id="dailyImg" src="${imageUrl}" alt="Good Morning Image">`;
    const dailyImageDiv = document.getElementById('dailyImage');
    if (dailyImageDiv) {
        dailyImageDiv.innerHTML = htmlContent;
    }
}

function fetchImageUrlsAndGenerateHtml(urlsFile) {
    fetch(urlsFile)
        .then(response => response.text())
        .then(data => {
            const urls = data.trim().split('\n');
            const currentDayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
            const imageUrl = get_image_url_for_day(urls, currentDayOfYear);
            generate_html(imageUrl);
        })
        .catch(error => console.error('Error fetching image URLs:', error));
}

// Call the function with your URLs file path
document.addEventListener('DOMContentLoaded', () => {
    const urlsFile = 'image_urls.txt';
    fetchImageUrlsAndGenerateHtml(urlsFile);
});
