function nombre(caractere){ 
    let S=0;
    for(let i=0;i<caractere.length;i++){
        S+=caractere.charCodeAt(i); 
    }
    return S
}
/* a =nombre("Hiba"); "2344"=hiba
console.log(a);*/
function somme(nombre){  
    let s=0;
    ch=String(nombre);
    for(let i=0;i<ch.length;i++){
        ch1=ch.charAt(i); 
        s+=parseInt(ch1);
    }
    return s
}

console.log(somme(23));

function chiffreAssocie(nombre){
    serie=somme(nombre);
    while(serie>9){
        serie=somme(serie);
    }
    return serie;
}
