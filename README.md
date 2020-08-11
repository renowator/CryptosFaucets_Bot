![BTC](https://www.cryptoimgs.com/img/freebitcoin/banners/Banner468x60.jpg)
[BTC](https://freebitcoin.io/?ref=303045)


![ETH](https://www.cryptoimgs.com/img/freeethereum/banners/Banner468x60.jpg)
[ETH](https://freeethereum.com/?ref=27517)


![XRP](https://www.cryptoimgs.com/img/coinfaucet/banners/Banner468x60.jpg)
[XRP](https://coinfaucet.io/?ref=630522)


![ADA](https://www.cryptoimgs.com/img/freecardano/banners/Banner468x60.jpg)
[ADA](https://freecardano.com/?ref=221297)


![TRX](https://www.cryptoimgs.com/img/freetron/banners/Banner468x60.jpg)
[TRX](https://free-tron.com/?ref=2879)


![BNB](https://www.cryptoimgs.com/img/freebinancecoin/banners/Banner468x60.jpg)
[BNB](https://freebinancecoin.com/?ref=27615)


# Cryptos bot

bot.js output example:


````
Attempt to collect coins:
17 HH || Date:8.2
You have received 0.00110457 Balance: 0.09470700 ADA
You have received 0.00000082 Balance: 0.00003757 ETH
You have received 0.00000003 Balance: 0.00000228 BTC
You have received 0.01578117 Balance: 0.59722029 TRX
You have received 0.00052687 Balance: 0.05957524 XRP
You have received 0.00001471 Balance: 0.00004451 BNB
All coins were collected!
Sleep for an hour
````


Tip: If one of the websites produces errors you can manually claim the coin, then enter free roll code for twitter (https://twitter.com/cryptosfaucets) on all the websites, so the bot keeps running smoothly. Avoid the bot executing every 10 minutes, unless necessary.

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



## About The Project

Cryptos Faucets is a newly established cryptocurrency faucet company which offers free cryptocurrency rolls every hour.

This script is developed to automate rolls on Cryptos Faucets websites given that all your accounts have same email address and password. Please review the code to make sure I am not storing your credentials in any way. The credentials are entered upon launching the bot and will be deleted when the bot is shut down.

The bot is performing quite well, but still needs to be improved for additional error handling and smarter behaviour to make sure rolls on each website are made every hour. Apart from that more security can be added to protect your credentials.

Please feel free to use, modify or improve this bot! 

To support this project please register on Cryptos Faucets websites using my referral links and use the bot often:


https://free-tron.com/?ref=2879


https://freecardano.com/?ref=221297


https://freebitcoin.io/?ref=303045


https://freeethereum.com/?ref=27517


https://freebinancecoin.com/?ref=27615


https://coinfaucet.io/?ref=630522


*Notice:* The USDC, USDT, STEAM and NEM faucets are not included. You can append the urls to these websites in .js file if you wish to automate the rolls for these as well. 

### Built With
* [Node.js](https://nodejs.org/en/)
* [Puppeteer](https://github.com/puppeteer/puppeteer)
* [Chromium](https://www.chromium.org/)



## Getting Started

To run this script you need to install Node.js and Puppeteer, Puppeteer-select and Chromium web browser.

### Prerequisites

Install Node.js:
https://nodejs.org/en/download/
* npm
```sh
npm install npm
```

* puppeteer
```sh
npm install puppeteer
```

* puppeteer-select
```sh
npm install puppeteer-select
```

* chromium-browser
```sh
apt-get install chromium-browser
````


### Installation

To use this bot as a standalone application instead of console you will need to use nwjs package: https://github.com/nwjs/nw.js

YOU CAN ADD THE EXECUTABLE TO AUTOSTART 

Please refer to their Wiki on building an app: https://github.com/nwjs/nw.js/wiki

You should download nwjs package, then depending on your system provide package.nw (Zip with different extension) file to nw.exe application. (Different for Mac, more information: https://nwjs.readthedocs.io/en/latest/For%20Users/Package%20and%20Distribute/#package-your-app )

Or download all code from this package directly into nwjs package and run nw.exe

## Usage

### Using the console and console_bot.js

To run console_bot.js you need to specify console environment variables EMAIL and PASS. Then you can launch the bot with


````
node console_bot
````

### Using executable obtained from nwjs

Once you created your executable file, the bot will launch in a new window. It will prompt you to enter email and password when launched. The bot should start working and display your balances on Cryptos Faucets websites in the browser window.


## Roadmap

The project was developed for personal use. The bot is usable, but might need some improvements like advanced password protection, ErrorHandling, UI and bot contol.



## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## License

Distributed under the MIT License.


## Contact

Nicholas Stepanov - [renowator](https://github.com/renowator) - n_stepanov@hotmail.com

Project Link: [https://github.com/renowator/CryptosFaucets_Bot](https://github.com/renowator/CryptosFaucets_Bot)



## Another faucet and bot 

![Freebico.in](https://static1.freebitco.in/banners/468x60-3.png)
[Freebitco.in](https://freebitco.in/?r=37175004)
[BitBot](https://my.bitbot.plus/)
