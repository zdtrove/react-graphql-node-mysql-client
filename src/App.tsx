import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { useState } from 'react'
import './App.css'

function App() {

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const client = new ApolloClient({
        uri: "http://localhost:3001/graphql",
        cache: new InMemoryCache(),
    })

    return (
        <ApolloProvider client={client}>
            <div className="createUser">
                <input type="text" placeholder="name" onChange={e => { setName(e.target.value) }} />
                <input type="text" placeholder="username" onChange={e => { setUserName(e.target.value) }} />
                <input type="text" placeholder="password" onChange={e => { setPassword(e.target.value) }} />
                <button>Create User</button>
            </div>
        </ApolloProvider>
    );
}

export default App;
