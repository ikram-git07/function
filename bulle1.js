// qui implémente l'algorithme de tri à bulles pour trier un tableau d'entiers.
//  Affichez le tableau avant et après le tri.
let arr =[1,4,2,7,5,3,6]
for (i = 0; i <= arr.length; i++ ){
for (j = 0; j <= arr.length; j++ ){
    if (arr [j] > arr[j+1]){
         let ik = arr[j]
         arr[j] = arr [j+1]
         arr[j+1] = ik
    }
}
}
console.log(arr)