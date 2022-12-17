// function sayHello(ime,prezime) {
//   return 'Hello ' + ime + ' ' + prezime;
// }

// console.log(sayHello('Sandra','Balog'));

// function izračunajPovršinu(širina,visina) {
//   var površina = širina * visina;
//   return površina;
// }

// var površina1= izračunajPovršinu(3,5);

// var širinaSobe=5;
// var dužinaSobe = 3.5;

// var površina2= izračunajPovršinu (širinaSobe, dužinaSobe);

// console.log('Površina1: ' + površina1);
// console.log('Površina2: ' + površina2);

// var hotel = {
//   ime: 'Hotel Park',
//   adresa: 'Novosadskog Sajma 35',
//   brojSoba: 140,
//   rezervisano: 57,
//   teretana: true,
//   brojSlobodnihSoba: function () {
//     var slobodno = hotel.brojSoba - hotel.rezervisano;
//     return slobodno;
//   },
// };

// console.log('Podaci o hotelu:');
// console.log('Naziv ' + hotel.ime);
// console.log('Adresa ' + hotel.adresa);
// console.log('Kapacitet: ' + hotel.brojSoba);
// console.log('Teretana: ');
// if (hotel.teretana === true) {
//   console.log('Da');
// } else {
//   console.log('Ne');
// }
// console.log('Broj slobodnih soba: ' + hotel.brojSlobodnihSoba());

// var hoteli = [
//   {
//     naziv: 'Hotel Park',
//     adresa: 'Novosadskog sajma 35',
//     brojSoba: 140,
//     rezervisano: 57,
//     teretana: true,
//     brojSlobodnihSoba: function () {
//       var slobodno = hotel.brojSoba - hotel.rezervisano;
//       return slobodno;
//     },
//   },
//   {
//     naziv: 'Centar',
//     adresa: 'Uspenska 1',
//     brojSoba: 90,
//     rezervisano: 68,
//     teretana: false,
//     brojSlobodnihSoba: function () {
//       var slobodno = hotel.brojSoba - hotel.rezervisano;
//       return slobodno;
//     },
//   },
// ];
// for (let i = 0; i < hoteli.length; i++) {
//   var hotel = hoteli[i];
//   console.log('Podaci o hotelu: ');
//   console.log('Naziv: ' + hotel.naziv);
//   console.log('Adresa: ' + hotel.adresa);
//   console.log('Kapacitet: ' + hotel.brojSoba);
//   console.log('Teretana: ');
//   if (hotel.teretana === true) {
//     console.log('Da');
//   } else {
//     console.log('Ne');
//   }
//   console.log('Broj slobodnih soba: ' + hotel.brojSlobodnihSoba());
// }

// var now = new Date();
// console.log(now);

// var godina = now.getFullYear();
// console.log(godina);

// Zadatak 1
// Napisati program koji ce za zadatu matricu A sabrati elemente na glavnoj i sporednoj dijagonali i to prikazati kao rezultat.

// 		  1	2	3
// A = 	4	5	6
// 		  7	8	9

// var matrica = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

// var zbirElemenata = 0;

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//    if ( i === j) {
//     zbirElemenata += matrica[i][j];
//    }
//    if (i === 2 - j) {
//     zbirElemenata += matrica[i][j];
//    }
//   }
// }

// console.log(zbirElemenata);

// Zadatak 2
// Napisati program koji ce za zadatu matricu sabrati vrednosti elemenata iz druge kolone i treceg reda i to prikazati kao rezultat.

// 	    1	2	3	5
// A =  4	5	6	8
// 	    7	8	9	9
// 	    8	5	3	1

// var matrica = [
//   [1,2,3,5],
//   [4,5,6,8],
//   [7,8,9,9],
//   [8,5,3,1]
// ]

// var zbirElemenata = 0;

// for(i = 0; i < 4; i++) {
//   for( j = 0; j < 4; j++) {
//     if(i === 2) {
//       zbirElemenata += matrica[i][j];
//     }
//     if(j === 1) {
//       zbirElemenata += matrica[i][j];
//     }
//   }
// }

// console.log(zbirElemenata);

// Zadatak 3
// Napisati program koji za zadatu matricu kao krajnji rezultat vraca zbir elemenata ciji je ostatak pri deljenju sa 2 jednak 0.

// 	    1	2	3	5
// A =  4	5	6	8
// 	    7	8	9	9
// 	    8	5	3	1

// var matrica = [
//   [1,2,3,5],
//   [4,5,6,8],
//   [7,8,9,9],
//   [8,5,3,1]
// ]

// var rezultat = 0;

// for (let i = 0; i < 4; i++) {
//  for (let j = 0; j < 4; j++) {
//   if(matrica[i][j] % 2 === 0) {
//     rezultat += matrica[i][j];
//   }
//  }
// }
// console.log(rezultat);

// Zadatak 4
// Napisati program koji u zadatoj matrici menja brojeve 3 sa brojem 0, a brojeve 5 sa -1.

// 	    1	2	3	5
// A =  3	5	6	8
// 	    7	8	9	3
// 	    8	5	3	1

// var matrica = [
//   [1, 2, 3, 5],
//   [3, 5, 6, 8],
//   [7, 8, 9, 3],
//   [8, 5, 3, 1],
// ];

// for (var i = 0; i < 4; i++) {
//   for (var j = 0; j < 4; j++) {
//     if (matrica[i][j] === 3) {
//       matrica[i][j] = 0;
//     }
//     if (matrica[i][j] === 5) {
//       matrica[i][j] = -1;
//     }
//   }
// }

// console.log(matrica);

// Zadatak 5:
// Data je struktura:

// var ocene = [8, 7, 6, 9, 8, 10, 8];
// var ime_prez = ["Marko", "Markovic"];

// Napraviti funkciju koja prima dva parametra, prvi je niz ocena, drugi sadrzi ime i prezime.
// Funkcija treba da izracuna prosek ocena datog studenta i da ispise njegovo ime i prezime.
// Npr: "Student Marko Markovic ima prosek 8.7..."

// function student (ocena,podaci) {
//   var sum = 0;

//   var duzinaNiza = ocena.length;
//   for(var i = 0; i < ocena.length;i++) {
//     sum += ocena[i];
//   }

//   var srednjaVrednost = sum / duzinaNiza;
//   return 'Student ' + podaci[0] + ' ' + podaci[1] + ' sa prosekom ' + srednjaVrednost;
// }
// var ocene = [8, 7, 6, 9, 8, 10, 8];
// var ime_prez = ["Marko", "Markovic"];

// var result = student(ocene,ime_prez);
// console.log(result);

// Zadatak 6:
// U datoj strukturi se nalazi lista drzava sa svojim kodovima. U drugoj strukturi se nalaze gradovi sa kodovima odredjene drzave.
// Ispisati sve gradove i na osnovu koda drzave ispisati i njeno skraceno ime.
// Npr: Novi Sad - RS, London - UK, Madrid - ESP

// var drzave = { 1 : "RS" , 2 : "RU" , 3 : "UK", 4 : "ESP" };
// var gradovi = [ ["London", 3], ["Novi Sad", 1], ["Moskva", 2], ["Madrid", 4]];

// var drzave = { 1: 'RS', 2: 'RU', 3: 'UK', 4: 'ESP' };
// var gradovi = [
//   ['London', 3],
//   ['Novi Sad', 1],
//   ['Moskva', 2],
//   ['Madrid', 4],
// ];

// for (var i = 0; i < gradovi.length; i++) {
//   var grad = gradovi[i];
//   var drzava = drzave[grad[1]];
//   console.log(grad[0] + ' - ' + drzava);
// }

// Zadatak 7:
//keirati JavaScript objekat koji ce reprezentovati jedan automobil.
// 	Objekat treba da sadrzi slede atribute:
// 		- Marka 	(String)
// 		- Model		(String)
// 		- Upaljen	(Boolean)
// 		- Snaga		(int)
// 		- Boja		(String)
// 	I sledece metode:
// 		- Upali: 		Postavlja atribut 'Upaljen' na true
// 		- Ugasi: 		Postavlja atribut 'Upaljen' na false
// 		- Prefarbaj:	Kao parametar prima ime nove boje, i postavlja atribut 'Boja' na tu vrednost

// var automobil = {
//   marka: 'Mercedes',
//   model: 'A klasa',
//   upaljen:false,
//   snaga:100,
//   boja:'Crna',
//   upali: function() {
//     automobil.upaljen = true;
//   },
//   ugasi:function() {
//     automobil.upaljen = false;
//   },
//   prefarbaj: function (novabBoja) {
//     automobil.boja = novabBoja;
//   }
// }

// automobil.upali();
// automobil.prefarbaj('Roza');

// console.log('Podaci o automobilu:');
// console.log("Marka: " + automobil.marka);
// console.log("Model: " + automobil.model);
// console.log("Snaga: " + automobil.snaga);
// console.log("Boja: " + automobil.boja);
// console.log("Upaljen: ");

// if(automobil.upaljen == true) {
// 	console.log("DA");
// }else {
// 	console.log("NE");
// }
