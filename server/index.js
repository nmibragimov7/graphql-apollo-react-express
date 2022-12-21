const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');

const schema = require('./schema/schema');

const users = [
    {
        id: "1",
        username: 'test',
        password: 'test',
        fistName: 'test',
        lastName: 'testov',
        middleName: 'testovich',
    }
];
const posts = [];

const root = {
    // signIn: ({input}) => {
    //     const user = users.find(user => user.username === input.username);
    //     if(!user) return {
    //         error: true,
    //         message: 'Неверный логин или пароль'
    //     }
    //     if(user.password !== input.password) return {
    //         error: true,
    //         message: 'Неверный логин или пароль'
    //     }
    //     return {
    //         access: 'String',
    //         expireAccess: new Date().toLocaleString(),
    //         refresh: 'String',
    //         expireRefresh: new Date().toLocaleString()
    //     }
    // },
    getUsers: () => users,
    getUser: ({id}) => {
        console.log(id)
        return users.find(user => user.id === id)
    },
    createUser: ({input}) => {
        const user = {
            id: new Date().getTime().toString(),
            ...input
        }
        users.push(user);
        return user;
    },
    getPosts: () => posts,
    getPost: ({id}) => posts.find(post => post.id === id)
}

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root
}))

app.listen(5000, () => console.log('server started on port 5000'));
