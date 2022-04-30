const fs = require('async-file');


(async () => {

 const addressnyaa = await readlineSync.question('Input addressnya cok:');
 const addressAkun = await fs.readFile(addressnyaa, 'utf8')
 
 
 let akunList = [];
	await akunList.push(addressAkun.toString());

    if(akunList[0].length > 0) {
	    for (var i = 0; i < akunList[0].length; i++) {
	    const akunn = akunList[0];

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
       
    }
}
})