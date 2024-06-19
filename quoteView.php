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
            <button id="dailyImagebtnQuoteView" onclick="window.location.href='index.html'"><p>Good Morning Image</p></button>
            <button id="dailyQuotebtnQuoteView" onclick="window.location.href='quoteView.php'"><p>Daily Quote</p></button>
        </div>


        <div class="quoteText">
            <?php include ('quoteGen.php'); ?>
            <div class="quoteCopyButton">
                <div id="copyButton" onclick="copyContent()">
                    <h3>Copy</h3>
                </div>
            </div>
        </div>
    </div>


    <button class="libraryButton" onclick="window.location.href='library.php'"><img src="icons8-library-100.png" alt="Library"></button>

    <script>
        const copyButton = document.getElementById('copyButton');
        const quoteOfDay = document.getElementById('quoteText');
        
        const copyContent = async () => {
            try {
                var quote = quoteOfDay.textContent;
                await navigator.clipboard.writeText(quote);
                console.log("success");
            }
            catch(e) {
                console.log("not success");
            }
        }
    </script>
</body>
</html>
