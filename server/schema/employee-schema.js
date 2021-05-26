const graphql = require('graphql');
const { DepartmentType, departments } = require('./department-schema');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const employees = [{
    id: 1,
    firstname: 'firstEmp',
    lastname: 'lastEmp',
    email: 'first@google.com',
    departmentId: 1
},
{
    id: 2,
    firstname: 'firstEmp2',
    lastname: 'lastEmp2',
    email: 'first2@google.com',
    departmentId: 2
},
{
    id: 3,
    firstname: 'firstEmp3',
    lastname: 'lastEmp3',
    email: 'first3@google.com',
    departmentId: 1
},
];
const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        id: { type: GraphQLInt },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        department: {
            type: DepartmentType,
            resolve(parent, args) {
                console.log(parent);
                return _.find(departments, {id: parent.departmentId})
            }
        }
    })
});

module.exports = { EmployeeType, employees };