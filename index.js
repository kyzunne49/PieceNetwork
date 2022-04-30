const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { faker } = require('@faker-js/faker');
const chalk = require('chalk');
const readlineSync = require('readline-sync');
const fs = require('async-file');


 const getData = () => new Promise((resolve,reject)=>{
     fetch('https://name-fake.com/id_ID', {
         method: 'GET',
         headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0',
             'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
             'Accept-Language': 'en-GB,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
             'DNT': '1',
             'Connection': 'keep-alive',
             'Cookie': 'PHPSESSID=78fd62f29ab0d35bb777ca6edfffb335; prefetchAd_2861429=true',
             'Upgrade-Insecure-Requests': '1',
             'Sec-Fetch-Dest': 'document',
             'Sec-Fetch-Mode': 'navigate',
             'Sec-Fetch-Site': 'none',
             'Sec-Fetch-User': '?1',
             'TE': 'trailers'
         }
  })
  .then(ress => ress.text())
  .then(async result => {
      const $ = await cheerio.load(result);
     const twitter = $('div[id=copy1]').text();
     const telegram = $('div[id=copy2]').text();
    
      resolve({
          twitter: twitter,
          telegram: telegram,
      })
  }).catch(err => reject(err))
 });


 const AccountRegister = (address, twitter, telegram) => new Promise((resolve, reject)  => {
     fetch('https://piecenetwork.com/airdrop', {
         method: "POST",
         headers: {
    'Content-Length': '109',
    'Sec-Ch-Ua': '"(Not(A:Brand";v="8", "Chromium";v="100"',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'Sec-Ch-Ua-Mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Origin': 'https://piecenetwork.com',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://piecenetwork.com/airdrop/E2Dc16593e',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US,en;q=0.9',
         },
         body: `address=${address}&twitter=${twitter}&telegram=${telegram}&inviter=E2Dc16593e`

     })
     .then (res => res.json())
     .then(result => resolve(result)).catch(err => reject(err))
 });

 //const addressnya = "flags.txt";






(async () => {
 
 const dataAirdrop = await getData();
 const twitter = dataAirdrop.twitter;
 const telegram = dataAirdrop.telegram;


 
 const addressnyaa = await readlineSync.question('Input addressnya cok:');
 const addressAkun = await fs.readFile(addressnyaa, 'utf8')
 const address = addressAkun.address;
 
 let akunList = [];
	await akunList.push(addressAkun.toString());

    if(akunList[0].length > 0) {
	    for (var i = 0; i < akunList[0].length; i++) {
	    const akunn = akunList[0];
        }


 let sumbitData = readlineSync.question('Mau berapa reff:');
 const SumbitDatanya = await AccountRegister (address, '@'+twitter, '@'+telegram);
 
 for (let index = 0; index < parseInt(sumbitData); index++) {
     const element = sumbitData[index];
     if (SumbitDatanya.success == true) {
         console.log("Akun berhasil dibuat");
     } else {
         console.log("Akun tidak berhasil dibuat");
     }
 }

    } else {
        console.log("file kosong");
    }

})
();
