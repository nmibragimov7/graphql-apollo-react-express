import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {useParams} from "react-router";

import {GET_USER} from "../actions/query/user";

const User = () => {
    const params = useParams();
    const {data, loading, error, refetch} = useQuery(GET_USER, {
        variables: {
            id: params.id
        }
    });
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(!loading) {
            data && data.getUser && setUser(data.getUser);
        }
    }, [data, loading]);
    useEffect(() => {
        refetch();
    }, [refetch]);

    return (
        <div
            className="p-4 border border-solid border-orange cursor-pointer hover:bg-light-blue"
        >
            {loading &&
                <h3>Loading...</h3>
            }
            {error && <div className="text-red text-center">Произошла ошибка</div>}
            {!loading && user &&
                <>
                    <p>{user.id}. {user.username}</p>
                    <p>{user.lastName} {user.fistName} {user.middleName}</p>
                </>
            }
        </div>
    );
};

export default User;
