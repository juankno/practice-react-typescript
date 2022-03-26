import { useCounter } from '../hooks/useCounter';

export const ContadorHook = () => {

    const { valor, incrementar } = useCounter(10);

    return (
        <>
            <h3>ContadorHook <small> {valor} </small></h3>

            <button onClick={() => incrementar(1)} className="btn btn-primary mx-2">+1</button>
            <button onClick={() => incrementar(-1)} className="btn btn-primary">-1</button>
        </>
    )
}
