
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
 const email  =process.env.EMAIL;
 const pass = process.env.PASS;
 console.log("----------------- BOT STARING -----------------");
 console.log("Working on email:");
 console.log(email)
 console.log("\n                   Good Luck!\n");
 const websites = ["https://freecardano.com","https://freeethereum.com","https://freebitcoin.io","https://free-tron.com","https://coinfaucet.io"]
while(true){

  var loopError = false;
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1866, height: 768});

  console.log("----------------- ATTEMPTING ROLLS -----------------");
  var today = new Date();
  var date = today.getHours()+'HH Date:'+(today.getMonth()+1)+'.'+today.getDate();
  console.log(date);
for (var i = 0; i < websites.length; i++) {

  try{


  await page.goto(websites[i])
  await sleep(200)
  console.log(websites[i])
  await page.type('input[name=email]', email, {delay: 20})
  await page.type('input[name=password]', pass, {delay: 20})
  const element = await select(page).getElement('button:contains(LOGIN!)');
  await element.click()
  await page.waitForNavigation();  
  await autoScroll(page);
  const element_roll = await select(page).getElement('button:contains(ROLL!)');
  await element_roll.click()
  await sleep(2000);
  // Get inner HTML
  const innerText = await page.evaluate(() => document.querySelector('.navbar-coins').innerText);
  var balance = "Balance:                 " + innerText;
  console.log(balance);
  console.log("\n\n\n                      SUCCESS! Coin claimed!");

}
catch(e){
var message = "Error was encountered on: " + websites[i];
console.log(message);
console.error("Error: " + e.message );
console.log("\n\n\n                      FAIL. Coin not claimed.");
loopError = true
// catch block end
}
// for loop end
} 

  await page.close()
  await browser.close()
  if (loopError){
  console.log("############## There was an error, retrying in 10 mins #############");
  await sleep(600000);
  } else{
  console.log('!!!!!!!!!!!!!!!!! All coins collected succesfully !!!!!!!!!!!!!!!!!!!!!!')
  console.log("Going to sleep\n             zzz\n                    zzz\n         See you in an hour                zzz")
  await sleep(3600000);
  console.log('----------------- WAKE UP -----------------');
  }
// while loop end
}
})()
