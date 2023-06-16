
document.writeln("</br>");
document.writeln("</br>");
document.writeln("</br>");
document.writeln("Hello");
document.writeln("</br>");
document.writeln("</br>");
document.writeln("</br>");

const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const operator = document.getElementById("operator");
const hasil = document.getElementById("hasil");
const submit = document.getElementById("submit");
submit.addEventListener('click', function () {
hasil.innerText = eval(angka1.value + operator.value + angka2.value);
//hasil.innerText = Number(angka1.value) + operator.value + Number(angka2.value);
            //hasil.innerText = Number(angka1.value) - Number(angka2.value);
            //hasil.innerText = Number(angka1.value) * Number(angka2.value);
            //hasil.innerText = Number(angka1.value) / Number(angka2.value);
})
            


document.writeln("ini hello world di file javascript");
document.writeln("</br>");
var fullName = "Aulia Sawitri"
var firstName = "Aulia"
var middleName = "Titi"
var lastName = "Sawwitri"

document.writeln("Nama lengkap : " + fullName);
document.writeln("</br>");
document.writeln("Nama pertama : " + firstName);
document.writeln("</br>");
document.writeln("Nama tengah : " + middleName);
document.writeln("</br>");
document.writeln("Nama terakhir : " + lastName);
document.writeln("</br>");


let counter=1;
    for (; counter <= 10;) 
    
    {document.writeln("<p>Perulangan ke " + counter  + "</p>")
    counter++;
    }
    //for(let counter=1); counter <=10; counter++)
    
function segitiga1(baris) {
    let pola= '';
    for(let i=1; i<=baris; i++){
        for (let j = 1; j <=i; j++){
            pola+='*';
        }
        pola += '</br>';
    }
    return pola;
}
document.writeln(segitiga1(5));


