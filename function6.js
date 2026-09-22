// qui calcule le n-ième terme de la suite de Fibonacci.
//  La fonction doit prendre un entier en paramètre et retourner le n-ième terme.
//  Utilisez cette fonction pour afficher le terme de Fibonacci demandé.
function cal (number){
    if(number=== 0){
            return 0
        }
    if(number=== 1){
            return 1
        }
    let x = 1
    let y = 0
    let som = 0
    for (i = 2; i <= number; i++ ){
     som = x + y
     y = x
     x = som 
     
 }
 return som 
}
console.log(cal(100))
 

