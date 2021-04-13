const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const { EmployeeType, employees } = require('./employee-schema');
const { DepartmentType, departments } = require('./department-schema');
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employee: {
            type: EmployeeType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                // code to get data from DB
                return _.find(employees, { id: args.id })
            }
        },
        department: {
            type: DepartmentType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log(args, departments)
                return _.find(departments, {id: parseInt(args.id)})
            }
        }
    }
});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
})