document.addEventListener('DOMContentLoaded', () => {
    const dailyImg = document.getElementById('dailyImg');
    const copyButton = document.getElementById('copyButton');

    if (dailyImg && copyButton) {
        copyButton.addEventListener('click', () => {
            copyToClipboard(dailyImg.src);
        });
    } else {
        console.error('One or more required elements not found.');
    }

    /* Changes CSS of buttons based on if daily quote is pressed or not */

    const dailyQuoteBtn = document.getElementById('dailyQuotebtn');
    if (dailyQuoteBtn) {
        dailyQuoteBtn.addEventListener('mouseover', () => {
            document.querySelector('#dailyImagebtn').classList.add('dailyQuoteActive');
        });
        dailyQuoteBtn.addEventListener('mousedown', () => {
            document.querySelector('#dailyImagebtn').classList.add('dailyQuoteActive');
        });
        dailyQuoteBtn.addEventListener('mouseout', () => {
            document.querySelector('#dailyImagebtn').classList.remove('dailyQuoteActive');
        });
    } else {
        console.error('dailyQuoteBtn not found.');
    }

    const dailyImageBtnQuoteView = document.getElementById('dailyImagebtnQuoteView');
    if (dailyImageBtnQuoteView) {
        dailyImageBtnQuoteView.addEventListener('mouseover', () => {
            document.querySelector('#dailyQuotebtnQuoteView').classList.add('dailyImgActive');
        });
        dailyImageBtnQuoteView.addEventListener('mousedown', () => {
            document.querySelector('#dailyQuotebtnQuoteView').classList.add('dailyImgActive');
        });
        dailyImageBtnQuoteView.addEventListener('mouseout', () => {
            document.querySelector('#dailyQuotebtnQuoteView').classList.remove('dailyImgActive');
        });
    } else {
        console.error('dailyImageBtnQuoteView not found.');
    }
});

async function writeToCanvas(src) {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    return new Promise((res, rej) => {
        img.crossOrigin = 'Anonymous';
        img.src = src;
        img.onload = function() {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
                res(blob);
            }, 'image/png');
        };
    });
}

async function copyToClipboard(src) {
    try {
        const image = await writeToCanvas(src);
        await navigator.clipboard.write([
            new ClipboardItem({
                'image/png': image,
            })
        ]);

        console.log("Success");
    } catch(e) {
        console.error("Copy failed: " + e);
    }
}
