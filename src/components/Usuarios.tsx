import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqRes';

export const Usuarios = () => {

    const [users, setUsers] = useState<User[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
        loadUsers();
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

    const loadUsers = async () => {
        const res = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current,
            }
        })

        if (res.data.data.length > 0) {
            setUsers(res.data.data);
            paginaRef.current++;
        } else {
            alert('Not found more data');
        }
    }


    return (
        <>
            <h3>Usuarios</h3>
            <table className="table table-striped table-sm">
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

            <button className="btn btn-primary"  onClick={loadUsers}>Siguiente</button>
        </>
    )
}
