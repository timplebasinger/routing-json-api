import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users));
    }, [])


    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-md-6">
                    <ul className="list-group">
                        {users.map(user => (
                            <li key={`user-item-${user.id}`} className="list-group-item d-flex justify-content-between align-items-center">
                                {user.username}
                                <Link to={`/users/${user.id}`} className="btn btn-primary">Read Profile</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}



export default Users;