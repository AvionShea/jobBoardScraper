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
    const jobBoards = [
        {
            name: "Indeed", //website name
            url: "https://www.indeed.com/", //website URL
            searchBar: "input[id='text-input-what']", //search bar url
            searchBtn: "button[class='yosegi-InlineWhatWhere-primaryButton']", // search button url
        }
    ];


    const jobResults = [];

    for (const board of jobBoards) {
        const searchUrl = `${board.url}`
        await page.goto(searchUrl, { waitUntil: 'networkidle2' })

        await page.locator(searchBar).fill(jobTitle);

        await page.locator(searchBtn).click();
    }

})();