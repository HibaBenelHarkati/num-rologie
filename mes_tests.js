function nombre(caractere){ //cette function fait la somme des unit
    let S=0;
    for(let i=0;i<caractere.length;i++){
        S+=caractere.charCodeAt(i); //le unicode assicie a chaque index de la chaine de caractere 
    }
    return S
}
/* a =nombre("Hiba"); "2344"=hiba
console.log(a);*/
function somme(nombre){  // la somme des chiffres parseInt
    let s=0;
    ch=String(nombre);
    for(let i=0;i<ch.length;i++){
        ch=ch.charAt(i);  //The charAt() method returns the character at the specified index in a string.
        s+=parseInt(ch);
    }
    return s
}

console.log(somme(23));

function chiffreAssocie(nombre){ //cette fonction permet de sommer les chiffres jusqu a un seul chiffre 
    serie=somme(nombre);
    while(serie>9){
        serie=somme(serie);
    }
    return serie;
}
