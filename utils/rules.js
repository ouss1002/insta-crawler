// instagram accounts you want to crawl
// example:
// links = [
//     'https://www.instagram.com/cristiano',
//     'https://www.instagram.com/leomessi/',
// ];
links = [
    
];

// number of posts
// 0 ==> get all posts from startDate to endDate
numberOfPosts = 0;

// start crawling from this date
// empty date ==> crawl the last [numberOfPosts] posts
// format: 'YYYY-MM-DD'
startDate = '2020-11-20';

// end crawling on this date
// empty date ==> crawl all posts from [startDate]
// format: 'YYYY-MM-DD'
endDate = '2020-12-20';

// chrome executable needded to run puppeteer
pathToChrome = 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe';

// emulate a mobile device ?
emulate = true;

// device emulated (phone, tablet, .etc)
// go to chrome -> inspect element -> Toggle device toolbar (CTRL + SHIFT + M) -> device list
device = 'iPhone X';

// hide from screen ?
hideScreen = false;

// instagram login page
loginPage = 'https://www.instagram.com/accounts/login/';

// username & password
username = '';
password = '';

// directory where to save the result (must start with '/')
result = '/result';

// module exports
module.exports = {
    links,
    startDate,
    endDate,
    numberOfPosts,
    pathToChrome,
    emulate,
    device,
    hideScreen,
    loginPage,
    username,
    password,
    result,
};