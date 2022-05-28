const chalk = require('chalk')
// const { Yargs } = require('yargs/build')
const yargs = require('yargs')
// const { Yargs } = require('yargs/build')
const notes = require('./notes')
// console.log(chalk.green("Nisha"))
// const command = (process.argv[2])
// console.log(process.argv)
// if(command === 'add'){
// console.log('Adding a note')
// }
// else if(command == 'remove'){
//     console.log('Remove a note')
// }
// console.log(yargs.argv)
//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',


        },
        body: {
            describe: 'Write your note',
            demandOption: true,
            type: 'string'

        }
    },
    // handler: function(argv){
    //     console.log('Title: ' + argv.title, 'Body: ' + argv.body)
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }


})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'To remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Remove your note',
            demandOption: true,
            type: 'string'
        },
    },
        handler: function (argv) {
            notes.removeNote(argv.title, argv.body)
            // console.log('Removing a note')
        },
    })

// create a list
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function(){
        notes.listNotes()
    }
        
    
        
     
        
    
})
yargs.command({
    command: 'read',
    describe: 'Read your notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})
console.log(yargs.argv)






