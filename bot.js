
const select = require ('puppeteer-select');
const puppeteer = require('puppeteer')

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
 var welcome = "----------------- BOT STARING -----------------\nWorking on email:" + email + "\n                   Good Luck!\n";
 const websites = ["https://freecardano.com","https://freeethereum.com/free","https://freebitcoin.io/free","https://free-tron.com","https://coinfaucet.io/free", "https://freebinancecoin.com/free"]
while(true){

  var loopError = false;
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1866, height: 768});

  var today = new Date();
  var date = '      ' + today.getHours()+' HH || Date:'+(today.getMonth()+1)+'.'+today.getDate();
  document.getElementById('results').innerHTML += '<br> Attempt to collect coins: <br>' + date +'<br>          Good Luck!';
for (var i = 0; i < websites.length; i++) {

  try{


  await page.goto(websites[i])
  var connect = false;
  var count = 0
  while (!connect || count >= 20){
  try {
  count = count + 1;
  await page.waitForSelector("input[name=email]", { timeout: 15000 })
  connect = true
}  catch{
  await sleep(1000)
  await page.goto(websites[i])
}
}
  await sleep(5000)
  await page.type('input[name=email]', email, {delay: 20})
  await page.type('input[name=password]', pass, {delay: 20})
  const element_log = await select(page).getElement('button:contains(LOGIN!)');
  await element_log.click()
  await page.waitForNavigation();  
  await autoScroll(page);
  const element_roll = await select(page).getElement('button:contains(ROLL!)');
  await element_roll.click()
  await sleep(3000);
  // Get inner HTMLs
  const innerReward = await page.evaluate(() => document.querySelector('.result').innerText);
  const innerBalance = await page.evaluate(() => document.querySelector('.navbar-coins').innerText);
  var balance = innerReward + "\nBalance:                 " + innerBalance;
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
  await sleep(600000);
  } else{
  console.log('!!!!!!!!!!!!!!!!! All coins collected succesfully !!!!!!!!!!!!!!!!!!!!!!')
  document.getElementById('results').innerHTML += '<br>All coins were collected!<br>Sleep for an hour';
  await sleep(3595000);
  }
// while loop end
}
})()
