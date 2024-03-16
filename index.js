import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {typeDefs} from "./schema.js";
import db from './_db.js'


const resolvers={
    Query:{
        games(){
            return db.games
        },
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        }
    }
}

/*
games{
title
}
*/

//server setup
const server=new ApolloServer({
// types
    typeDefs,
    resolvers

// resolvers
});

const {url} =await startStandaloneServer(server,{
    listen:{port:4000}
})

console.log('Server already at port ',4000)