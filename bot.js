
const select = require ('puppeteer-select');
const puppeteer = require('puppeteer');

var useHash = false;
var myHash = "";

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 50;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
 const email  = prompt("Enter your email","<here>");
 const pass = prompt("Enter your password", "<here>");
 var welcome = '<br>----------------- BOT STARING -----------------<br>Working on email:" + email + "<br>                   Good Luck!<br>';
 const websites = ["https://freebitcoin.io/free", "https://freeethereum.com/free", "https://freedash.io/free","https://freebinancecoin.com/free", "https://freechain.link/free","https://coinfaucet.io/free", "https://freecardano.com/free","https://free-tron.com/free"]


while(true){

  var loopError = false;
  const browser = await puppeteer.launch({ headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1866, height: 768});
  var price = "";
  var today = new Date();
  var date = '      ' + today.getHours()+' HH || Date:'+(today.getMonth()+1)+'.'+today.getDate();
  document.getElementById('results').innerHTML += '<br> Attempt to collect coins: <br>' + date +'<br>          Good Luck!';
for (var i = 0; i < websites.length; i++) {

  try{
    if (!useHash){
      document.getElementById('hash_res').innerHTML = '';
    }

  await page.goto(websites[i])
  var connect = false;
  var count = 0
  while (!connect && count <= 20){
  try {
  count = count + 1;
  await page.waitForSelector("input[name=email]", { timeout: 15000 })
  connect = true
}  catch{
  await sleep(100)
  await page.goto(websites[i])
}
}
  await sleep(100)
  await page.type('input[name=email]', email, {delay: 20})
  await page.type('input[name=password]', pass, {delay: 20})
  await sleep(100)
  price = await page.evaluate(() => document.querySelector('.navbar-coins').innerText);
  document.getElementById('price').innerHTML += '<br>'+price;
  const element_log = await select(page).getElement('button:contains(LOGIN!)');
  await element_log.click()
  await page.waitForNavigation();

  if(useHash){
  await page.type('input[name=hash]', myHash, {delay: 20});
  const element_hash = await select(page).getElement('button:contains(Go!)');
  await element_hash.click();
  await page.waitForNavigation();
  await page.goto(websites[i]);
  await sleep(100);
  const check = await page.evaluate(() => document.querySelector('.timeout-container'))
  if ( check == null){
    document.getElementById('hash_res').innerHTML = '<br> Code used succesfully! <br>';
  }
  else{
      document.getElementById('hash_res').innerHTML = '<br> Your code is not valid... <br>';
  }
  }

  await autoScroll(page);
  const element_roll = await select(page).getElement('button:contains(ROLL!)');
  await element_roll.click()
  await sleep(3000);
  // Get inner HTMLs
  const innerBalance = await page.evaluate(() => document.querySelector('.navbar-coins').innerText);
  const luckyNums = await page.evaluate(() => document.querySelector('.lucky-numbers').innerText);
  const innerReward = await page.evaluate(() => document.querySelector('.result').innerText);
  var balance = "<br>  Lucky Number: " + luckyNums + "<br>" + innerReward + "<br>Balance:                 " + innerBalance;
  document.getElementById('results').innerHTML += '<br>' + balance

}
catch(e){
var message = "Error was encountered on: " + websites[i];
document.getElementById('results').innerHTML += '<br>!!!!!!!!!!!!!!!!!!!!!!!!!<br>' + message + '<br>!!!!!!!!!!!!!!!!!!!!!!!!!<br>' + e.message ;
loopError = true
// catch block end
}
// for loop end
}

  await page.close()
  await browser.close()
  if (loopError){
  document.getElementById('results').innerHTML += '<br>Not all coins were collected.<br>Sleep for 10 minutes';
  useHash = false;
  myHash = "";
  var counter = 0;
  while (counter < 600){
  // Sleep 1 second
  await sleep(999);
  counter = counter + 1;
  document.getElementById('hash_res').innerHTML = '<br>An error was encountered <br>Time since last roll attempt: ' + parseInt((600-counter)/60) + ' : ' + (600-counter)%60;
  if(useHash){break;}
  }
  } else{
  console.log('!!!!!!!!!!!!!!!!! All coins collected succesfully !!!!!!!!!!!!!!!!!!!!!!')
  document.getElementById('results').innerHTML += '<br>All coins were collected!<br>Sleep for an hour';
  useHash = false;
  myHash = "";

  var counter = 0;
  while (counter < 3600){
  // Sleep 1 second
  await sleep(999);
  counter = counter + 1;
  document.getElementById('hash_res').innerHTML = '<br>Time to new roll: ' + parseInt((3600-counter)/60) + ' : ' + (3600-counter)%60;
  if(useHash){break;}
  }

  }
  document.getElementById('price').innerHTML = '';
// while loop end
}
})()
