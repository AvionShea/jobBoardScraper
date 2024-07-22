## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Code Snippets to Copy](#snippets)
6. [Documents](#links)
7. [Challenges and Successes](#challengesAndSuccesses)
8. [More](#more)

## <a name="introduction">Introduction</a>

Built with Node.js, No Name Job Board is a customizable web scraper platform that searches user selected job boards and emails a list on a frequency determined by the user.

## <a name="tech-stack">Tech Stack</a>

- Node.js
- Puppeteer
- Nodemailer
- node-cron

## <a name="features">Features</a>

👉 **Custom Job Boards**: Search any job board you can imagine just by providing the needed information.

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
const jobLocation = "27603"; //enter city, state, zip code, or "remote" of location wanted
const jobBoards = [
  {
    name: "Indeed", //website name
    url: "https://www.indeed.com/", //website URL
    searchJobTitle: "input[id='text-input-what']", //search by job title
    clearSearch:
      "#jobsearch > div > div.css-13s6tc1.eu4oa1w0 > div.css-1jk1vg0.eu4oa1w0 > div > div > span > span.css-16oh2fs.e6fjgti0", //clears default location
    searchLocation: "input[id='text-input-where']", //search by location
    searchBtn: "button[class='yosegi-InlineWhatWhere-primaryButton']", // search button url
    datePostedFilter: "#filter-dateposted",
    datePostedFilterMenu: "#filter-dateposted-menu",
    dropdownList: ".yosegi-FilterPill-dropdownList",
    dropdownListItemLink: "a.yosegi-FilterPill-dropdownListItemLink",
    dropdownDatePostedOption: "Last 14 days", // change based on available dropdown date posted options
    expLvlFilter: "#filter-explvl",
    expLvlFilterMenu: "#filter-explvl-menu",
    expLvlDropdownOption: "Entry Level", //change based on available level options
    cardsSelector: "div[class='job_seen_beacon']",
    titleSelector: "h2[class='jobTitle css-198pbd eu4oa1w0']",
    companySelector: "span[class='css-63koeb eu4oa1w0']",
    locationSelector: "div[data-testid='text-location']",
    linkSelector: "h2[class='jobTitle css-198pbd eu4oa1w0'] > a",
  },
];
```

</details>

## <a name="links">Docs</a>

**Docs**

- [Puppeteer](https://pptr.dev/category/introduction)
- [Avoiding Bot Detection](https://www.zenrows.com/blog/puppeteer-avoid-detection#puppeteer-stealth)
- [How to run Cron Jobs in Node.js?](https://www.geeksforgeeks.org/how-to-run-cron-jobs-in-node-js/amp/)
- [How to send email with Nodemailer using Gmail account in Node?](https://www.geeksforgeeks.org/how-to-send-email-with-nodemailer-using-gmail-account-in-node-js/amp/)

## <a name="challengesAndSuccesses">Challenges and Successes</a>

**Challenges I overcame**

- Appointing the correct selectors for the scraper to utilize.
- Getting nodemailer to work properly.

**Successes**

- Learned the basics of Puppeteer.
- Completed basic skeleton within a week.
- Implemented scraping for Indeed.
- Utilized resources to help find solutions.
- Learned node-cron scheduler.
- Learned to add a "start" script.

## <a name="more">Author</a>

- LinkedIn - [@avion-cobb](https://www.linkedin.com/in/avion-cobb/)
- Twitter - [@Blvck_Lotus003](https://twitter.com/Blvck_Lotus003)
