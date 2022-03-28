import { useUsers } from '../hooks/useUsers';

export const Usuarios = () => {

    const { users, renderUser, loadUsers } = useUsers();

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

            <button className="btn btn-primary" onClick={loadUsers}>Siguiente</button>
        </>
    )
}
