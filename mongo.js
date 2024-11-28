const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('Agrega el password como argumento');
    process.exit(1)
}
const password= process.argv[2]

const url =
`mongodb+srv://notas_rest:${password}@cluster0.paxl2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema =  new mongoose.Schema({
    content: String,
    important: Boolean
})
const Note = mongoose.model('Note',noteSchema)

const note = new Note({
    content: 'JS is very easy',
    important: false
})

note.save().then(result => {
    console.log('note saved in MongoDB');
    mongoose.connection.close()
})