//programa 1.- Lanzar un dado 2 veces y sumar las caras que cayeron, repetir esto 100 veces y mostrar al final cuantas veces cayó cada posible valor de la suma.
let cuantasVeces = [0,0,0,0,0,0];
  let Dado= function (){
   let s =  Math.floor((Math.random()*6)+1);
    return s;
   
  }
  for (let i=0; i<100; i++){
    let s = Dado();
    cuantasVeces[s - 1] +=1;}
  for(let i=0;i<6;i++)

   document.write ("la cara  "  + (1+i) +   ' cayo '   + cuantasVeces[i] + "<br>" );
