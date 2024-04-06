const mongoose = require('mongoose')
const blogPost = require('./models/blogPosts')
const { error } = require('console')
const { title } = require('process')

//mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser:true})
const data = {
   title:'my name is pirince kisele liyo this is the title for my post',
      boby: 'this is my first time trying to creeate a web site with the posting fonctionality using node js and mongoDB and this is just a simple test that i am posting right now maye later then i will do bettre then this time'

}
// this is how to create a data in mongo database
// blogPost.create(data).then(() => {
//   console.log('connected Successfully')
// })
// .catch((err) => {
//   console.error(err);
// })

