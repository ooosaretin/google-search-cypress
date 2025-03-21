# Google Search Cypress Tools Automated Test

This repository contains an automated test suite for Google Search using Cypress, along with a video and screenshot recording of the test execution. The test checks the functionality of Google Search and ensures that the page behaves as expected.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Test Recording](#test-recording)
7. [Contributing](#contributing)
8. [License](#license)

## Overview
This project demonstrates how to use [Cypress](https://www.cypress.io/) to perform automated end-to-end testing for Google Search. The test includes search functionality validation and checks the presence of elements on the search results page. Additionally, the test includes video and screenshot captures to visualize the test execution.

## Features
- Automated testing using Cypress.
- Search functionality validation on Google Search.
- Captures video and screenshots during test execution.
- Detailed error logging for easier debugging.
- Supports headless and headed modes for testing.

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Cypress](https://www.cypress.io/)

## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/google-search-cypress.git
   ```
2. Navigate to the project directory:
   ```bash
   cd google-search-cypress
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage
1. To run the tests locally, use the following command:
   ```bash
   npm cypress open
   ```
2. By default, the tests will run in headless mode. If you'd like to see the test execution in a browser window, you can use:
   ```bash
   npm cypress run --headless
   ```

### Test Recording
During the execution of the Cypress test, video recordings and screenshots are generated to capture the behavior of the application. These files are stored in the `cypress/videos/` and `cypress/screenshots/` directories, respectively.

To view the video of the Google Search test:
1. Navigate to the `cypress/videos/` directory.
2. Locate the video file corresponding to the test run (e.g., `google-search.spec.js.mp4`).
3. Play the video to observe the test execution in real-time.

**Example Screenshot of Test Execution:**

![Google Search Test Screenshot](path/to/screenshot.png)


### Additional tips:
- **Video/Screenshot Storage:** Ensure the video and screenshots are either added directly to the repo (if small enough) or provide clear instructions on where the user can find them after running the tests (for example, saving them locally or via a cloud storage link).
- **Customization:** Adjust any commands or specific details based on your testing setup (e.g., test script names, directories, etc.).


https://github.com/user-attachments/assets/fa3d0009-1df8-445b-95e9-b83cb046e479

