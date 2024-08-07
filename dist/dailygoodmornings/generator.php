<?php
function get_image_url_for_day($urls_file, $day_of_year) {
    $urls = file($urls_file, FILE_IGNORE_NEW_LINES);
    return $urls[($day_of_year - 1) % count($urls)];
}

function generate_html_file($image_url, $output_file) {
    $html_content = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Good Morning</title>
  <link rel="stylesheet" href="./cascade.css">
  <link rel="icon" href="./favicon.ico" type="image/x-icon">
  <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
</head>
<body>
    <div class = "mainGrid">
        <div class="topFrame">
            <h1>Good Morning!</h1>
        </div>
        <div id="dailyButtons">
            <button id="dailyImagebtn" onclick="window.location.href='index.html'"><p>Good Morning Image</p></button>
            <button id="dailyQuotebtn" onclick="window.location.href='quoteView.php'"><p>Daily Quote</p></button>
        </div>

        <div class="about">
            <h3> About </h3>  
            <p> Hello! Welcome to the Good Morning website. 
                This is a practice project the author of this site came up with to work on Web Development skills.
                Feel free to look around, explore the library (icon on the right), 
                and the Daily Quote generator above. And if you're wondering why some 
                images seem odd, blame AI image generators.</p>
        </div>

        <section class="homePage"> 
            <div id="dailyImage">
                <img id="dailyImg" src="$image_url" alt="Good Morning Image">
            </div>
            <button id="copyButton">Copy</button>
        </section>
    </div>
    <button class="libraryButton" onclick="window.location.href='library.php'"><img src="icons8-library-100.png" alt="Library"></button>

    <script src="function.js"></script>
    
</body>
</html>
HTML;

    file_put_contents($output_file, $html_content);
}

$urls_file = 'image_urls.txt';  // Path to the file containing image URLs
$output_file = 'index.html';     // Output HTML file
$current_day_of_year = date('z') + 1; // Get the day of the year (starting from 0)
$image_url = get_image_url_for_day($urls_file, $current_day_of_year);
generate_html_file($image_url, $output_file);
echo "success";
