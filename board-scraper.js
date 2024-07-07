const puppeteer = require('puppeteer-extra')
const pluginStealth = require('puppeteer-extra-plugin-stealth');
puppeteer.use(pluginStealth());
const { executablePath } = require('puppeteer');

//const nodemailer = require('nodemailer');
//const cron = require('node-cron');



(async () => {

    const browser = await puppeteer.launch({
        headless: false,
        executablePath: executablePath(),
    }); //launch browser and see it navigate
    const page = await browser.newPage(); // opens new blank page

    const jobTitle = "Software Engineer"; //enter job tile searching for
    const jobLocation = "27560" //enter city, state, zip code, or "remote" of location wanted
    const jobBoards = [
        {
            name: "Indeed", //website name
            url: "https://www.indeed.com/", //website URL
            searchJobTitle: "input[id='text-input-what']", //search by job title
            clearSearch: "#jobsearch > div > div.css-13s6tc1.eu4oa1w0 > div.css-1jk1vg0.eu4oa1w0 > div > div > span > span.css-16oh2fs.e6fjgti0", //clears default location
            searchLocation: "input[id='text-input-where']", //search by location
            searchBtn: "button[class='yosegi-InlineWhatWhere-primaryButton']", // search button url
            datePostedFilter: "#filter-dateposted",
            datePostedFilterMenu: "#filter-dateposted-menu",
            dropdownList: "yosegi-FilterPill-dropdownList",
            dropdownListItemLink: "a.yosegi-FilterPill-dropdownListItemLink",
            dropdownDatePostedOptionOne: "Last 24 hours",
            dropdownDatePostedOptionTwo: "Last 3 days",
            dropdownDatePostedOptionThree: "Last 7 days",
            dropdownDatePostedOptionFour: "Last 14 days",
        }
    ];


    const jobResults = [];

    for (const board of jobBoards) {
        const searchUrl = `${board.url}`;
        const searchJobTitle = board.searchJobTitle;
        const searchLocation = board.searchLocation;
        const searchBtn = board.searchBtn;
        const clearSearch = board.clearSearch;
        const datePostedFilter = board.datePostedFilter;
        const datePostedFilterMenu = board.datePostedFilterMenu;
        const dropdownList = board.dropdownList;
        const dropdownListItemLink = board.dropdownListItemLink;
        const dropdownDatePostedOptionOne = board.dropdownDatePostedOptionOne;
        const dropdownDatePostedOptionTwo = board.dropdownDatePostedOptionTwo;
        const dropdownDatePostedOptionThree = board.dropdownDatePostedOptionThree;
        const dropdownDatePostedOptionFour = board.dropdownDatePostedOptionFour;

        await page.goto(searchUrl, { waitUntil: 'networkidle2' })

        await page.locator(searchJobTitle).fill(jobTitle);

        await page.locator(clearSearch).click();

        await page.locator(searchLocation).fill(jobLocation);

        await page.locator(searchBtn).click();

        await page.locator(datePostedFilter).click(dropdownList);

        await page.waitForSelector(datePostedFilterMenu);

        await page.evaluate((dropdownListItemLink, dropdownDatePostedOptionOne) => {

            const dropdownItems = Array.from(document.querySelectorAll(dropdownListItemLink));

            const dropdownTimeframe = dropdownItems.find(item => item.innerText.includes(dropdownDatePostedOptionOne));

            if (dropdownTimeframe) {
                dropdownTimeframe.click();
            }
        }, dropdownListItemLink, dropdownDatePostedOptionOne);


    }

})();
