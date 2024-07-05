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
    const jobLocation = "Morrisville, NC" //enter city, state, zip code, or "remote" of location wanted
    const jobBoards = [
        {
            name: "Indeed", //website name
            url: "https://www.indeed.com/", //website URL
            searchBar: "input[id='text-input-what']", //search bar url
            searchJobTitle: "button[class='yosegi-InlineWhatWhere-primaryButton']", // search button url
            searchLocation: "input[id='text-input-where']", //search by location
            clearSearch: "#jobsearch > div > div.css-13s6tc1.eu4oa1w0 > div.css-1jk1vg0.eu4oa1w0 > div > div > span > span.css-16oh2fs.e6fjgti0", //clears default location
        }
    ];


    const jobResults = [];

    for (const board of jobBoards) {
        const searchUrl = `${board.url}`
        const searchBar = board.searchBar
        const searchJobTitle = board.searchJobTitle
        const searchLocation = board.searchLocation
        const clearSearch = board.clearSearch

        await page.goto(searchUrl, { waitUntil: 'networkidle2' })

        await page.locator(searchJobTitle).fill(jobTitle);

        await page.locator(clearSearch).click();

        await page.locator(searchLocation).fill(jobLocation);

        await page.locator(searchBtn).click();


    }

})();
