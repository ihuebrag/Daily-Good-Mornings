<?php
$photo_urls = file('image_urls.txt', FILE_IGNORE_NEW_LINES);
foreach ($photo_urls as $url) {
    echo '<div class="photo"><img src="' . $url . '" alt="Photo"></div>';
}
?>
