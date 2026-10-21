document.write("<h1>ZADANIE 1</h1>");

var tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];

document.write("Piąty element: " + tab1[4] + "<br>");

tab1[6] = 12;

var tab2 = [];

for (var i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[i];
}

var tab3 = [];

for (var i = 0; i < tab1.length; i++) {
    tab3[i] = tab1[i] + tab2[i];
}

document.write("Tablica 1: " + tab1.join(", ") + "<br>");
document.write("Tablica 2: " + tab2.join(", ") + "<br>");
document.write("Tablica 3: " + tab3.join(", ") + "<br>");

for (var i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[tab1.length - 1 - i];
}

document.write("Tablica 2 odwrotnie: " + tab2.join(", ") + "<br>");


document.write("<h1>ZADANIE 2</h1>");

var tab = [12, 7, 33, 4, 18, 3, 15, 9, 30, 6];

var min = tab[0];
var max = tab[0];
var suma = 0;
var ile3 = 0;
var parzyste = 0;
var nieparzyste = 0;
var podzielne3 = 0;

document.write("Tablica: " + tab.join(", ") + "<br>");

for (var i = 0; i < tab.length; i++) {
    if (tab[i] < min) min = tab[i];
    if (tab[i] > max) max = tab[i];

    suma += tab[i];

    if (String(tab[i]).indexOf("3") != -1) ile3++;

    if (tab[i] % 2 == 0) parzyste++;
    else nieparzyste++;

    if (tab[i] % 3 == 0) podzielne3++;
}

document.write("Minimum: " + min + "<br>");
document.write("Maksimum: " + max + "<br>");
document.write("Średnia: " + suma / tab.length + "<br>");
document.write("Liczby zawierające cyfrę 3: " + ile3 + "<br>");
document.write("Parzyste: " + parzyste + "<br>");
document.write("Nieparzyste: " + nieparzyste + "<br>");
document.write("Podzielne przez 3: " + podzielne3 + "<br>");

tab.sort(function(a, b) {
    return a - b;
});

document.write("Rosnąco: " + tab.join(", ") + "<br>");

var n = tab.length;
var mediana = (tab[n / 2 - 1] + tab[n / 2]) / 2;

document.write("Mediana: " + mediana + "<br>");
document.write("3 najmniejsze: " + tab.slice(0, 3).join(", ") + "<br>");
document.write("3 największe: " + tab.slice(-3).reverse().join(", ") + "<br>");

for (var i = 0; i < tab.length; i++) {
    tab[i] = tab[i] * tab[i];
}

document.write("Kwadraty: " + tab.join(", ") + "<br>");


document.write("<h1>ZADANIE 3</h1>");

var litery = ["K", "o", "t", "A", "m", "a", "l", "A", "s", "y"];

document.write("Litery: " + litery.join(" ") + "<br>");

var wyraz = "Komputery1";
var tabLitery = wyraz.split("");

for (var i = 0; i < tabLitery.length; i++) {
    if (tabLitery[i] == tabLitery[i].toUpperCase()) {
        tabLitery[i] = tabLitery[i].toLowerCase();
    } else {
        tabLitery[i] = tabLitery[i].toUpperCase();
    }
}

document.write("Zmienione litery: " + tabLitery.join("") + "<br>");

for (var i = tabLitery.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = tabLitery[i];
    tabLitery[i] = tabLitery[j];
    tabLitery[j] = temp;
}

document.write("Losowa kolejność: " + tabLitery.join("") + "<br>");


document.write("<h1>ZADANIE 4</h1>");

var A = [];

for (var i = 0; i < 100; i++) {
    A[i] = Math.floor(Math.random() * 100) + 1;
}

document.write("Tablica A: " + A.join(", ") + "<br>");

var maxA = A[0];

for (var i = 0; i < A.length; i++) {
    if (A[i] > maxA) maxA = A[i];
}

var ileMax = 0;

for (var i = 0; i < A.length; i++) {
    if (A[i] == maxA) ileMax++;
}

document.write("Największa liczba: " + maxA + "<br>");
document.write("Ile razy występuje: " + ileMax + "<br>");

document.write("Liczby nieparzyste: ");

for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 != 0) document.write(A[i] + " ");
}

document.write("<br>Liczby z nieparzystych indeksów: ");

for (var i = 1; i < A.length; i += 2) {
    document.write(A[i] + " ");
}

document.write("<br>Liczby od 5 do 14: ");

var ilePrzedzial = 0;

for (var i = 0; i < A.length; i++) {
    if (A[i] >= 5 && A[i] < 15) {
        document.write(A[i] + " ");
        ilePrzedzial++;
    }
}

document.write("<br>Ilość: " + ilePrzedzial + "<br>");

var a = 50;
var najblizsza = A[0];

for (var i = 1; i < A.length; i++) {
    if (Math.abs(A[i] - a) < Math.abs(najblizsza - a)) {
        najblizsza = A[i];
    }
}

document.write("Najbliższa liczba do 50: " + najblizsza + "<br>");

var indeksMin = 0;

for (var i = 1; i < A.length; i++) {
    if (A[i] < A[indeksMin]) indeksMin = i;
}

document.write("Minimum: " + A[indeksMin] + "<br>");

if (indeksMin > 0) {
    document.write("Poprzednik: " + A[indeksMin - 1] + "<br>");
}

if (indeksMin < A.length - 1) {
    document.write("Następnik: " + A[indeksMin + 1] + "<br>");
}

var B = [];
var j = 0;

for (var i = 0; i < A.length; i++) {
    if (A[i] > 10) {
        B[j] = A[i];
        j++;
    }
}

document.write("Liczby większe od 10: " + B.join(", ") + "<br>");

var C = [];
var sumaBiezaca = 0;

for (var i = 0; i < A.length; i++) {
    sumaBiezaca += A[i];
    C[i] = sumaBiezaca;
}

document.write("Sumy kolejnych elementów: " + C.join(", ") + "<br>");

A.sort(function(a, b) {
    return b - a;
});

document.write("Malejąco: " + A.join(", ") + "<br>");

document.write("Liczby występujące przynajmniej 3 razy: ");

for (var i = 0; i < A.length; i++) {
    var licznik = 0;
    var wczesniej = false;

    for (var j = 0; j < A.length; j++) {
        if (A[i] == A[j]) licznik++;
    }

    for (var j = 0; j < i; j++) {
        if (A[i] == A[j]) wczesniej = true;
    }

    if (licznik >= 3 && !wczesniej) {
        document.write(A[i] + " ");
    }
}

document.write("<br>");
document.write("<h1>ZADANIE 5 - FIBONACCI</h1>");
 
var fib = [0, 1];
 
for (var i = 2; i < 16; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}
 
document.write(fib.join(", ") + "<br>");
 
 
document.write("<h1>ZADANIE 6 - POTĘGI LICZBY 2</h1>");
 
var potegi = [];
potegi[0] = 1;
 
for (var i = 1; i < 10; i++) {
    potegi[i] = potegi[i - 1] * 2;
}
 
document.write(potegi.join(", ") + "<br>");
 
 
document.write("<h1>ZADANIE 7 - WIELOKROTNOŚCI 3</h1>");
 
var trojki = [];
 
for (var i = 0; i < 100; i++) {
    trojki[i] = (i + 1) * 3;
}
 
document.write(trojki.join(", ") + "<br>");
 
 
document.write("<h1>ZADANIE 8 - POTĘGI LICZBY 2</h1>");
 
var podwojenia = [];
podwojenia[0] = 2;
 
for (var i = 1; i < 10; i++) {
    podwojenia[i] = podwojenia[i - 1] * 2;
}
 
document.write(podwojenia.join(", ") + "<br>");



