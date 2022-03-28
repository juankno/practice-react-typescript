import { useState, useRef, useEffect } from 'react';
import { User, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';

export const useUsers = () => {

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
        } else {
            paginaRef.current--;
        }
    }

    const nextPage = () => {
        paginaRef.current++;
        loadUsers();
    }

    const previousPage = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            loadUsers();
        }
    }

    return {
        users,
        renderUser,
        nextPage,
        previousPage,
    }
}
