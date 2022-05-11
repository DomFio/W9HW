const { GraphQLObjectType, GraphQLInputObjectType, 
	GraphQLID, GraphQLString, GraphQLList, GraphQLInt, 
	GraphQLBoolean, GraphQLFloat } = require('graphql');
const { User, Quiz, Question, Submission } = require('../models');

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: {type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        posts: {
            type: GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({ userID: parent.id})
            }
        }
    })
})

const PostType = new GraphQLObjectType({
    name: 'Post',
    description: 'Post type',
    fields: () => ({
        id: {type: GraphQLID},
        // userId: {type: GraphQLString},
        title: {type: GraphQLString},
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId)
            }
        }
    })
})

const PostInputType = new GraphQLInputObjectType({
    name: 'PostInput',
    description: 'Post input for users',
    fields: () => ({
        // userId: { type: GraphQLString},
        post: { type: GraphQLString}
    })
})

module.exports = {
    UserType,
    PostType,
    PostInputType
}