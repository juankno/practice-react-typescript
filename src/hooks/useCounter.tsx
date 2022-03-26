import { useState } from 'react';

export const useCounter = (valorInicial: number) => {

    const [valor, setValor] = useState(valorInicial);

    const incrementar = (numero: number) => {
        setValor(valor + numero);
    }

    return { 
        valor,
        incrementar
    }
}
