const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const employees = [{
    id: 1,
    firstname: 'firstEmp',
    lastname: 'lastEmp',
    email: 'first@google.com'
},
{
    id: 2,
    firstname: 'firstEmp2',
    lastname: 'lastEmp2',
    email: 'first2@google.com'
},
{
    id: 3,
    firstname: 'firstEmp3',
    lastname: 'lastEmp3',
    email: 'first3@google.com'
},
];
const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        id: { type: GraphQLInt },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
    })
});

module.exports = { EmployeeType, employees };