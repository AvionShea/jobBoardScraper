## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Code Snippets to Copy](#snippets)
6. [Assets](#links)
7. [More](#more)

## <a name="introduction">Introduction</a>

Built with Node.js, No Name Job Board is a customizable web scraper platform that searches user selected job boards and emails a list on a frequency determined by the user.

## <a name="tech-stack">Tech Stack</a>

- Node.js
- Puppeteer
- Nodemailer
- node-cron

## <a name="features">Features</a>

👉 **Custom Job Boards**: Search any job board you can image just by providing the needed information.

👉 **Automated Emails**: Integrates Nodemailer and node-cron to send a list of scraped jobs.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Puppeteer](https://pptr.dev/)
- [Nodemailer](https://nodemailer.com/)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [Puppeteer Extra](https://www.npmjs.com/package/puppeteer-extra)
- [Puppeteer Stealth Plugin](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth)

**Cloning the Repository**

```bash
git clone https://github.com/AvionShea/jobBoardScraper.git
cd job-scraper
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
node board-scraper.js
```

Opens in new Chromium browser.

## <a name="snippets">Snippets</a>

<details>
<summary><code>Customizable Job Board Search</code></summary>

```javascript
const jobTitle = "Software Engineer"; //enter job tile searching for
const jobBoards = [
  {
    name: "Indeed", //website name
    url: "https://www.indeed.com/", //website URL
    searchBar: "input[id='text-input-what']", //search bar url
    searchBtn: "button[class='yosegi-InlineWhatWhere-primaryButton']", // search button url
  },
];
```

</details>

## <a name="links">Links</a>

**Docs**

- [Puppeteer](https://pptr.dev/category/introduction)
- [Avoiding Bot Detection](https://www.zenrows.com/blog/puppeteer-avoid-detection#puppeteer-stealth)

## <a name="links">Challenges</a>

**Challenges I faced**

- Appointing the correct selectors for the scraper to utilize.

## <a name="more">Author</a>

- LinkedIn - [@avion-cobb](https://www.linkedin.com/in/avion-cobb/)
- Twitter - [@Blvck_Lotus003](https://twitter.com/Blvck_Lotus003)
