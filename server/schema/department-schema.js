
const { GraphQLObjectType, GraphQLString,
    GraphQLID, GraphQLList } = require('graphql');
// const { EmployeeType, employees } = require('./employee-schema');
const _ = require('lodash');
const departments = [{ id: 1, name: 'IT Support' }, { id: 2, name: 'Finance' }]
const DepartmentType = new GraphQLObjectType({
    name: 'Department',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        // employees: {
        //     type: new GraphQLList(EmployeeType),
        //     resolve(parent, args) {
        //         return _.filter(employees, { departmentId: parent.id });
        //     }
        // }
    })
});

module.exports = { departments, DepartmentType }