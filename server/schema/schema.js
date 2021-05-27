const graphql = require('graphql');
const { GraphQLList } = require('graphql/type/definition');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLInt, GraphQLID } = graphql;
const { EmployeeType, employees, DepartmentType, departments } = require('./employee-schema');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
       
       
        department: {
            type: DepartmentType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log(args, departments)
                return _.find(departments, {id: parseInt(args.id)})
            }
        },
         employee: {
            type: EmployeeType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                // code to get data from DB
                return _.find(employees, { id: args.id })
            }
        },
        employees: {
            type: new graphql.GraphQLList(EmployeeType),
            resolve(parent, args) {
                return employees;
            }
        },
        departments: {
            type: new GraphQLList(DepartmentType),
            resolve(parent, args){
                return departments;
            }
        }
    })
});

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
})