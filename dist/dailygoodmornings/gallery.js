// gallery.js

document.addEventListener('DOMContentLoaded', function() {
    fetch('image_urls.txt')
        .then(response => response.text())
        .then(data => {
            const photoUrls = data.split('\n').filter(url => url.trim() !== ''); // Split by lines and remove empty lines

            const container = document.querySelector('.gallery'); // Changed to querySelector to select by class

            photoUrls.forEach(url => {
                const div = document.createElement('div');
                div.classList.add('photo');

                const img = document.createElement('img');
                img.src = url.trim();
                img.alt = 'Photo';

                div.appendChild(img);
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error fetching image URLs:', error));
});
