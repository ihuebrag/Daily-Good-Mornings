import datetime

def get_image_url_for_day(urls_file, day_of_year):
    with open(urls_file, 'r') as file:
        urls = file.readlines()
        return urls[(day_of_year - 1) % len(urls)].strip()

def generate_html_file(image_url, output_file):
    html_content = f"""<!DOCTYPE html>
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
    <section class="topFrame">
        <div>
            <h1>Good Morning!</h1>
        </div>
        <div id="topMenuLeft">
            <button id="dailyImagebtn" onclick="window.location.href='imageView.html'"><p>Good Morning Image</p></button>
            <button id="dailyQuotebtn" onclick="window.location.href='quoteView.html'"><p>Daily Quote</p></button>
        </div>
    </section>

    <section class="homePage"> 
        <div id="dailyImage">
            <img id="dailyImg" src="{image_url}" alt="Good Morning Image">
        </div>
        <button id="copyButton">Copy</button>
    </section>

    <button class="bottomCompressedMenu" onclick="window.location.href='Library.html'"><img src="icons8-library-100.png" alt="Library"></button>

    <script src="function.js"></script>
    
</body>
</html>
"""
    with open(output_file, 'w') as file:
        file.write(html_content)

def main():
    urls_file = 'image_urls.txt'  # Path to the file containing image URLs
    output_file = 'index.html'  # Output HTML file
    current_day_of_year = datetime.datetime.now().timetuple().tm_yday
    image_url = get_image_url_for_day(urls_file, current_day_of_year)
    generate_html_file(image_url, output_file)
    print("success")

if __name__ == "__main__":
    main()
