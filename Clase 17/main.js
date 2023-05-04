// const getLetter = (ms,value) =>{
//     return new Promise((resolve,reeject)=>{
//         setTimeout(() => {
//             const letras = {
//                 a:1,
//                 b:2,
//                 c:3,
//                 d:4,
//                 e:5,
//             }
//             const l = letras[value]

//             if(!l){
//                 reeject(`No se encontro la letra`)
//             }else{
//                 resolve({value})
//             }
//         }, ms);
//     })

// }
// getLetter(500,`j`)
// .then(response=> console.log(response))
// .catch(error=> console.log(error))

// fetch(`http://www.google.com`)
// .then(response => response.json())
// .catch(error=>alert(error))

const miPromesa = () => {
    return new Promise ((resolve,reject)=>{
        resolve(`wizaa`)
        reject(`ups`)
    });
};

//THEN CATCH
// const llamarMiPromesa =()=> {
//     //llamar a la promesa, con then le pasamos el valor, la mayoria de las veces
//     //no sabemos que vamos a recibir de la api, por defecto lo llamamos res.
//     miPromesa()
//     .then.apply(res=> console.log(`response ${res} `))
//     .catch(err => console.log(err))
// }
// llamarMiPromesa()

//TRY CATCH

// const llamarMiPromesa = async () =>{
//     try{
//         const res = await miPromesa();
//         console.log(res)
//     }catch(error){
//         console.log(`Pinto este error: ${error} `)
//     }
// }
// llamarMiPromesa()

//Vamos a sacar el cuadrado de un numero con promesas

// const cuadradoNumero = value => {
//     if(typeof value !== `number`){
//         return Promise.reject(`Error,el valor ${value} que escribiste no es un numero `)
//     }
//     return new Promise((resolve,reject)=> {
//         setTimeout(() => {
//             resolve({
//                 value,
//                 result : value * value
//             })
//         }, 500);
//     })
// }

//Refactorizamos la funcion de arriba
const cuadradoNumero = value => {
    return new Promise((resolve,reject)=> {
        typeof value == `number`
        ? setTimeout(() => {
            resolve({value,result:value*value})        
        }, 500)
        :reject(`Error, el valor ${value} no es un numero`)        
    })
}
cuadradoNumero(0)
.then(res=> {
    console.log(`Respuesat: ${res.value},${res.result} `)
    //Devolvemos la respuesta para poder encadenar la siguiente respuesta
    return cuadradoNumero(1)
    })
.then(res=>{
    console.log(`Respuesta: ${res.value},${res.result}`)
    return cuadradoNumero(`asd`)
})
.then(res=>console.log(`Respuesta: ${res.value},${res.result}`))
.catch(err => console.error(err))
