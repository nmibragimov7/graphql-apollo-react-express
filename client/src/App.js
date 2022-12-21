import React from 'react';
import {NavLink} from "react-router-dom";

import Pages from './page';

const App = () => {
    return (
        <div className="container mx-auto">
            <div className="flex gap-4 py-4 px-8 bg-light-blue mb-10">
                <NavLink to={'/'} className="text-primary-blue font-bold">Пользователи</NavLink>
                <NavLink to={'/posts'} className="text-primary-blue font-bold">Посты</NavLink>
            </div>
            <Pages/>
        </div>
    );
};

export default App;
