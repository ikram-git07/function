// qui calcule la factorielle d'un entier positif.
//  La fonction doit prendre un entier en paramètre et retourner sa factorielle. 
// Utilisez cette fonction pour afficher la factorielle d'un nombre donné.
function facto (nbr){

    let nmbr = 1;
for ( i = 1; i <= nbr; i++ ){
  nmbr = nmbr * i 
} 
return nmbr ;
} 
console.log(facto(nbr=6));