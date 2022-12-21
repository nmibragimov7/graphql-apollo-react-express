import React from 'react';
import {Routes, Route} from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import CreateUser from "./CreateUser/CreateUser";
import User from "./User";

const Index = () => {
    return (
        <Routes>
           <Route path={'/'} element={<Users/>}/>
           <Route path={'/posts'} element={<Posts/>}/>
           <Route path={'/users/create'} element={<CreateUser/>}/>
           <Route path={'/users/:id'} element={<User/>}/>
        </Routes>
    );
};

export default Index;
