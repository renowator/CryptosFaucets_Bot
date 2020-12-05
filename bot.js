const select = require ('puppeteer-select');
const puppeteer = require('puppeteer-extra');
//Using Stealth plugin for bypassing bot checks
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
//Using Adblock plugin for blocking pop-ups and ads
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
var fs = require('fs');

puppeteer.use(AdblockerPlugin());
puppeteer.use(StealthPlugin());
(async () => {
  //Please enter your email and password
 const email  = 'Your email here';
 const pass = 'Your password here';
 //Websites and their minimal withdrawal amount respectively (minimal withdrawal requirements may change)
 const websites = ["https://freebitcoin.io/", "https://freeethereum.com/", "https://freedash.io/", "https://freebinancecoin.com/", "https://freechain.link/","https://coinfaucet.io/", "https://freecardano.com/", "https://free-tron.com/", "https://free-ltc.com/", "https://freenem.com/","https://freesteam.io/","https://freetether.com/","https://freeusdcoin.com/","https://freeneo.io/"];
 const withdraw = ['0.00020000','0.00500000','0.01000000','0.05000000','0.10000000','1.00000000','5.00000000','30.00000000','0.01000000','5.00000000','5.00000000','1.00000000','1.00000000','1.00000000'];
 //Setting path for the log file
 const path = 'log.txt';
 //Launching browser
 const browser = await puppeteer.launch({ headless: true, ignoreDefaultArgs: ["--enable-automation"], args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.setViewport({ width: 1866, height: 768});
  await page.setDefaultTimeout(25000);
  //Appending current date to the log file
  var today = new Date();
  fs.appendFile(path,today + '\n', (err) => {if (err) throw err;});
for (var i = 0; i < websites.length; ++i) {

try{
  //Setting language of website to English
  await page.goto(websites[i]+'set-language/en', {waitUntil: 'networkidle0', timeout: 60000 });
  //Signing in
  await page.type('input[name=email]', email, {delay: 20})
  await page.type('input[name=password]', pass, {delay: 20})
  const element_log = await select(page).getElement('button:contains(LOGIN!)');
  await element_log.click();
  const navigationPromise = page.waitForNavigation();
  await navigationPromise;
  //Appending current website number to the log file
  fs.appendFile(path, (i<10 ? '0' : '')+i+ ': ',  (err) => {if(err) throw err;});
  //Waiting for countdown timer to disappear and rolling (timeout: 30 mins)
  const element_roll = await select(page).getElement('button:contains(ROLL!)');
  await page.waitForSelector('.roll-wrapper', {visible: true, timeout:1800000});
  await element_roll.click();
  await page.waitForSelector('.timeout-wrapper', {visible: true});
  //Timeout for more even result scrapping
  await new Promise((resolve, reject) => setTimeout(resolve, 8000));
  //Getting rolling results from the page
  const luckyNums = await page.evaluate(() => document.querySelector('.lucky-numbers').innerText);
  var result = luckyNums.replace(/[\n\s+]/g, '');
  const innerReward = await page.evaluate(() => document.querySelector('.result').innerText);
  const reward = innerReward.replace(/[^.\d]/g,'')
  result +=(reward.length>10?'  ':'  0')+ reward;
  const innerBalance = await page.evaluate(() => document.querySelector('.navbar-coins').innerText);
  const balance = innerBalance.replace(/[^.\d]/g,'');
  result += (balance.length>10?' ':' 0')+balance;
  var percentage = ((parseFloat(balance)/parseFloat(withdraw[i]))*100).toFixed(3);
  //Appending rolling results to the log file
  result += (withdraw[i].length>10 ? ' ' : ' 0')+withdraw[i]+' ['+percentage+'%]\n';
  fs.appendFile(path,result, (err) => {if(err) throw err;});
}
catch(e){
var message = 'Error : ' + e.message + '\n';
fs.appendFile(path,message, (err) => {if(err) throw err;})
}
}
  //Closing browser and application
  await page.close();
  await browser.close();
  process.exit();  
})()