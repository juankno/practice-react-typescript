import { useEffect, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        reqResApi.get<ReqResListado>('/users')
            .then(res => setUsers(res.data.data))
            .catch(console.log)
    }, [])


    const renderUser = ({ id, first_name, last_name, avatar, email }: User) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img className='img-thumbnail rounded-circle w-25' src={avatar} alt={first_name} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        );
    }


    return (
        <>
            <h3>Usuarios</h3>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(renderUser)}
                </tbody>
            </table>

            <button className="btn btn-primary">Siguiente</button>
        </>
    )
}
