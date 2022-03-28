import { useState } from 'react';

export const Formularios = () => {

    const [formulario, setFormulario] = useState({
        email: 'test@test.com',
        password: 'password'
    });

    const onchange = (value: string, field: string) => {
        setFormulario({
            ...formulario,
            [field]: value
        });
    }

    return (
        <>
            <h3>Formularios</h3>

            <input type="text"
                className="form-control"
                placeholder="E-mail"
                value={formulario.email}
                onChange={({ target }) => onchange(target.value, 'email')}
            />

            <input type="password"
                className="form-control mt-2"
                placeholder="Password"
                value={formulario.password}
                onChange={({ target }) => onchange(target.value, 'password')}

            />

            <code>
                <pre>
                    { JSON.stringify(formulario, null, 2) }
                </pre>
            </code>
        </>
    )
}

