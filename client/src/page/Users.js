import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useQuery} from "@apollo/client";
import {useNavigate} from "react-router";

import {GET_USERS} from "../actions/query/user";

const Users = () => {
    const navigate = useNavigate();
    const {data, loading, error, refetch} = useQuery(GET_USERS);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if(!loading) {
            data && data.getUsers && setUsers(data.getUsers);
        }
    }, [data, loading]);
    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div className="py-8">
            <NavLink
                className="inline-block bg-primary-blue hover:bg-primary-blue/90 disabled:bg-primary-blue/90 shadow text-white px-8 py-4 mb-10"
                to={'/users/create'}>Добавить пользователя:</NavLink>
            {loading &&
                <h3>Loading...</h3>
            }
            {error && <div className="text-red text-center">Произошла ошибка</div>}
            {!loading &&
            <div className="flex flex-col gap-4">
                {
                    users.map(user => (
                        <div
                            key={user.id}
                            className="p-4 border border-solid border-orange cursor-pointer hover:bg-light-blue"
                            onClick={() => navigate('/users/' + user.id)}
                        >
                            {user.id}. {user.username}
                        </div>
                    ))
                }
            </div>
            }
        </div>
    );
};

export default Users;
