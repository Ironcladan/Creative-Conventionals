const graphql = require('graphql');
const _=require('lodash');
const{GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
   GraphQLID,
   GraphQLInt,
   GraphQLList
 }=graphql;

//dummydata
var hospital11=[
  {name:'apex', address:'abxcccc', disease: 'viral jaram',dob:'01-01-01', aadhar:'12345'},
  {name:'fortnite', address:'dsffgrt', disease: 'high fever',dob:'11-11-11', aadhar:'1234'},
  {name:'pubg', address:'xcvbbds', disease: 'jaram',dob:'01-10-11', aadhar:'123456'},
  {name:'apex', address:'abxcccc', disease: 'ul jaram',dob:'01-01-01', aadhar:'123459'},
  {name:'fortnite', address:'dsffgrt', disease: 'high jaram',dob:'11-11-11', aadhar:'123490'},
  {name:'pubg', address:'xcvbbds', disease: 'cold jaram',dob:'01-10-11', aadhar:'123456'},
];

var hospital12=[
  {name:'apex', address:'abxcccc', disease: ' jaram',age:66,dob:'01-01-01', aadhar:'12345'},
  {name:'fortnite', address:'dsffgrt', disease: 'low fever',age:67,dob:'11-11-11', aadhar:'1234'},
  {name:'pubg', address:'xcvbbds', disease: 'viraljaram',age:65,dob:'01-10-11', aadhar:'123456'},

];

const Hospital1Type = new GraphQLObjectType({
  name:'hospital11',
  fields:() => ({
    aadhar:{type:GraphQLID},
    name:{type:GraphQLString},
    address:{type:GraphQLString},
    disease:{type:GraphQLString},
    dob:{type:GraphQLString},
    table2:{
        type:Hospital2Type,
        resolve(parent,args){
      return _.find(hospital11,{aadhar:parent.aadhar})
     }
     }
  })
});


const Hospital2Type = new GraphQLObjectType({
  name:'hospital12',
  fields:() => ({
    aadhar:{type:GraphQLID},
    name:{type:GraphQLString},
    address:{type:GraphQLString},
    disease:{type:GraphQLString},
    age: {type:GraphQLInt},
    dob:{type:GraphQLString},
    aadhar:{
      type:Hospital2Type,
       resolve(parent,args){
      return _.filter(hospital12,{aadhar:parent.aadhar});
   }
  }
 })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    table:{
      type:Hospital1Type,
      args:{aadhar:{type:GraphQLID}},
      resolve(parent,args){
        return _.find(hospital11,{aadhar:args.aadhar});
      }
    },
    table2:{
      type:Hospital2Type,
      args: {aadhar:{type:GraphQLID}},
      resolve(parent,args){
        return _.find(hospital12,{aadhar: args.aadhar});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query:RootQuery
});
