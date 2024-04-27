
const calcular = ()=>{
    var numero=document.getElementById('numero')
    var texto=numero.value;
    var valor=parseInt(texto);
    
    let i=0
    if(valor!=0){
        while(i<texto){
            console.log(valor-i);
            i++;
        }
    }else{
        console.log("Digite um valor valido")
    }
}

const forela =()=>{
    var numero=document.getElementById('numero')
    var texto=numero.value;
    var valor=parseInt(texto);
    console.log(`Taboada do ${valor}`)
    for(i=0;i<=10;i++){
        
        console.log(`${valor}*${i}=${valor*i}`)
        
    }
}

const divida=()=>{
    var numero=document.getElementById('numero')
    var texto=numero.value;
    var valor=parseInt(texto);
    console.log(`${valor} é divicivel por:`)
    for(i=0;i<=valor;i++){
        if(valor%i==0){
            console.log(`${valor}%${i}= ${valor%i} e ${valor}/${i}=${valor/i}`)
        }
    }
}