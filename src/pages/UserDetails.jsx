import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {

    const { userid } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(res => res.json())
            .then(user => setUser(user));
    }, []);

    return (
        <main className="container">
            <section className="row mt-3">
                <div className="col-12">
                    <h1 className="text-center">
                        {user?.username}
                    </h1>
                    <Link to="/users" className="btn btn-secondary" >Go back</Link>
                </div>
            </section>
        </main>
    );
}



export default UserDetails;