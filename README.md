# Good Morning Website

## Project Overview

The Good Morning Website is a web application that generates and displays a new good morning image and quote daily. This project aims to provide users with a fresh and positive start to their day through visually appealing images and inspiring quotes.

## Features

- **Daily Updates**: Automatically updates with a new image and quote every day.
- **Responsive Design**: Ensures a seamless experience across different devices and screen sizes.
- **User-Friendly Interface**: Simple and intuitive design for easy navigation and interaction.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Automation**: Cron Jobs
- **Hosting**: 000webhost

## Installation

### Prerequisites

- A web server with PHP support (e.g., Apache, Nginx)
- Cron job scheduling capability

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/good-morning-website.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd good-morning-website
   ```
3. **Upload Files to Your Server**
   Upload the project files to your web server using FTP or any other method.

4. **Set Up Cron Job**
   Configure a cron job to run the `update.php` script daily to fetch new images and quotes. Example cron job setup:
   ```bash
   0 0 * * * /usr/bin/php /path-to-your-project/update.php
   ```

5. **Access the Website**
   Open your browser and navigate to your domain to see the Good Morning Website in action.

## Usage

- **Homepage**: Displays the daily good morning image and quote.
- **Archive**: Allows users to browse previous images and quotes (if implemented).

## Project URL

- The live version of the website can be accessed [here](https://goodmorningmom.000webhostapp.com) (active until May 2025).

## Contributing

Contributions are welcome! If you would like to contribute to the project, please fork the repository and submit a pull request.

## Contact

For any questions or suggestions, please contact [Irene Huebra Garcia](mailto:irene@huebra.es).

---

Thank you for using the Good Morning Website! We hope it brings a positive start to your day.
