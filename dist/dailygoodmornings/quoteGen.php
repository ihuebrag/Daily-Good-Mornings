<?php
function get_individual_quote_for_the_day($quotes_file, $day_of_year) {
    $quotes = file($quotes_file, FILE_IGNORE_NEW_LINES);
    return $quotes[($day_of_year - 1) % count($quotes)];
}

$quotes_file = 'quote_database.txt';
$daily_quote = get_individual_quote_for_the_day($quotes_file, date('z') + 1);

// Splitting the quote at the last quotation mark
$quote_parts = explode('"', $daily_quote, 3);

// Reconstructing the quote with the dash and text after the last quotation mark on a new line
$formatted_quote = '<div class="dailyQuotePage"><p id="quotesText" alt="quote">' . $quote_parts[0] . '"' . $quote_parts[1] . '"<br/><br/>' . $quote_parts[2] . '</p></div>';

echo $formatted_quote;

//echo '<div class="dailyQuotePage"><p alt="quote">' . $daily_quote . '<p/></div>';
