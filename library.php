<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    <link rel="stylesheet" href="cascade.css">
</head>
<body>
    <button class="libraryButton" onclick="window.location.href='index.html'"><img src="icons8-home-384.png" alt="Home"></button>
    <h1 class="galleryHeader"> Gallery </h1>
    <div class="gallery">
        <?php include ('gallery.php'); ?>
    </div>
</body>
</html>
