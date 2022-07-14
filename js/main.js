let contenitore=  document.getElementById('contenitore');
let play = document.getElementById("play");
let bombe = [];
let tentativi=0;



play.addEventListener('click', function(){
    let difficolta = parseInt(document.getElementById('difficult').value);
    let n=0;
    
    contenitore.innerHTML='';

        if(difficolta == 1){
            n=100;
        }else if(difficolta == 2){
            n=81;
        }else if(difficolta ==  3){
            n=49;
        }

        /*for(let x=1; x<=16; x++){
            posBomba=Math.floor(Math.random() * (n)) + 1;

            if(bombe.includes(posBomba)){
                x = x-1;
            }else{
                bombe.push(posBomba);
            }
        }*/

        while(bombe.length < 16){
            posBomba=Math.floor(Math.random() * (n)) + 1;
            if(!bombe.includes(posBomba)){
                bombe.push(posBomba);
            }
        }
        console.log('larray delle bombe è '+ bombe )
        creaquadrati(n);

    }
);




function creaquadrati(numero){
    console.log('SONO DENTRO LA FUNCTION')
    for(let i=1; i<=numero; i++){
        const creaquadrato= document.createElement('div');
        console.log('SONO DENTRO LA FOR')
        creaquadrato.classList.add('quadrato');
        creaquadrato.innerHTML = i;
        let radicequadrata= Math.sqrt(numero);
        creaquadrato.style.width=`calc(100% / ${radicequadrata})`;
        creaquadrato.style.height=`calc(100% / ${radicequadrata})`;
        contenitore.append(creaquadrato);

        creaquadrato.addEventListener('click',
            function (){
                
                if(bombe.includes(i)){
                    creaquadrato.classList.add('rosso');
                    let arrayelements= document.querySelectorAll('.azzurro');
                    for(z=0; z<arrayelements.length; z++){
                        arrayelements[z].classList.remove('azzurro');
                    }
                    alert(`Hai perso con ${tentativi}tentativi`)
                }else{
                    creaquadrato.classList.add('azzurro');
                    console.log(i)
                    tentativi=tentativi + 1;
                        if(tentativi == numero - 16){
                            alert('complimenti hai vinto')
                        }
                }
            }
            
        )
    }
}
