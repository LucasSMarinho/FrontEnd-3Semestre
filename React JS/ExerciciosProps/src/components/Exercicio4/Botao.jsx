import React from 'react';
import { useState } from 'react';

import './Botao.css';



const Botao = ({ texto, cor, funcao}) => 
{

const [botaoCor, setBotaoCor] = useState(0);

function changeColor() {
      if (botaoCor == 1) {
         document.getElementById("botao").style.backgroundColor = "blue";
        }
        else if (botaoCor == 2) {
         document.getElementById("botao").style.backgroundColor = "yellow";
        }
        else if (botaoCor == 3) {
         document.getElementById("botao").style.backgroundColor = "red";
         setBotaoCor(1);
        }
      };

    return (
        <button id="botao" className={cor} onClick={() => {setBotaoCor(botaoCor + 1); changeColor();}}>
            {texto}
        </button>
    );

}

export default Botao