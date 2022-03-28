import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'test@test.com',
        password: 'password'
    });

    return (
        <>
            <h3>Formularios</h3>

            <input type="text"
                className="form-control"
                placeholder="E-mail"
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            />

            <input type="password"
                className="form-control mt-2"
                placeholder="Password"
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}

            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}

