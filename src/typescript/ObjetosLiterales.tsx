
interface Ubicacion {
    ciudad: string,
    pais: string,
    direccion: string
}

interface Persona {
    nombre: string;
    edad: number;
    estado: boolean;
    ubicacion: Ubicacion;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Juan Zapata',
        edad: 23,
        estado: true,
        ubicacion: {
            ciudad: 'medellín',
            pais: 'Colombia',
            direccion: 'calle falsa 123'
        }
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <br />
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
