function getDayOfYear(date) {
    // Calculate the day of the year
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function get_image_url_for_day(urls, dayOfYear) {
    return urls[(dayOfYear - 1) % urls.length];
}

function fetchImageUrlsAndGenerateHtml(urlsFile) {
    fetch(urlsFile)
        .then(response => response.text())
        .then(data => {
            const urls = data.trim().split('\n');
            const currentDate = new Date();
            const currentDayOfYear = getDayOfYear(currentDate);
            const imageUrl = get_image_url_for_day(urls, currentDayOfYear);

            // Create the <img> element
            const imgElement = document.createElement('img');
            imgElement.id = 'dailyImg';
            imgElement.src = imageUrl;
            imgElement.alt = 'Good Morning Image';

            // Replace the existing content of #dailyImage with the new <img> element
            const dailyImageDiv = document.getElementById('dailyImage');
            dailyImageDiv.innerHTML = ''; // Clear existing content if any
            dailyImageDiv.appendChild(imgElement);

            console.log('Generated HTML for image:', imgElement.outerHTML);
        })
        .catch(error => console.error('Error fetching image URLs:', error));
}

// Call the function with your URLs file path
const urlsFile = 'image_urls.txt';
fetchImageUrlsAndGenerateHtml(urlsFile);
