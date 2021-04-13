
const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const departments = [{ id: 1, name: 'IT Support' }, { id: 2, name: 'Finance' }]
const DepartmentType = new GraphQLObjectType({
    name: 'Department',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    })
});

module.exports = { departments, DepartmentType }