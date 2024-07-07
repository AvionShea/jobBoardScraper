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
    const jobLocation = "27518" //enter city, state, zip code, or "remote" of location wanted
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
            //linkSelector: "",

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
        const dropdownDatePostedOption = board.dropdownDatePostedOption;
        const expLvlFilter = board.expLvlFilter;
        const expLvlFilterMenu = board.expLvlFilterMenu;
        const dropdownListItemLink = board.dropdownListItemLink;
        const expLvlDropdownOption = board.expLvlDropdownOption;
        const cardsSelector = board.cardsSelector;



        await page.goto(searchUrl, { waitUntil: 'networkidle2' })

        await page.locator(searchJobTitle).fill(jobTitle);

        await page.locator(clearSearch).click();

        await page.locator(searchLocation).fill(jobLocation);

        await page.locator(searchBtn).click();


        // time frame posted selector
        await page.locator(datePostedFilter).click(dropdownList);

        await page.waitForSelector(datePostedFilterMenu);

        await page.evaluate((dropdownListItemLink, dropdownDatePostedOption) => {

            const dropdownItems = Array.from(document.querySelectorAll(dropdownListItemLink));

            const dropdownTimeframe = dropdownItems.find(item => item.innerText.includes(dropdownDatePostedOption));

            if (dropdownTimeframe) {
                dropdownTimeframe.click();
            }
        }, dropdownListItemLink, dropdownDatePostedOption);


        //exp lvl selector
        await page.locator(expLvlFilter).click(dropdownList);

        await page.waitForSelector(expLvlFilterMenu);

        await page.evaluate((dropdownListItemLink, expLvlDropdownOption) => {

            const expLvlItems = Array.from(document.querySelectorAll(dropdownListItemLink));

            const expLvl = expLvlItems.find(expElement => expElement.innerText.includes(expLvlDropdownOption));

            if (expLvl) {
                expLvl.click();
            }
        }, dropdownListItemLink, expLvlDropdownOption);

        await page.locator(cardsSelector).click()


        const jobs = await page.$$eval(board.cardsSelector, (jobElements, board) => {
            return jobElements.map((jobElement) => {
                const title = jobElement.querySelector(board.titleSelector)?.innerText.trim();
                const company = jobElement.querySelector(board.companySelector)?.innerText.trim();
                const location = jobElement.querySelector(board.locationSelector)?.innerText.trim();
                //const link = jobElement.querySelector(board.link)?.innerText.trim();

                return { title, company, location, /*link*/ };
            });
        }, board);

        jobResults.push(...jobs);

    }

    console.log(jobResults)

})();
