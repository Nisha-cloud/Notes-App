const chalk = require('chalk')
const fs = require('fs')
const { add } = require('nodemon/lib/rules')
const { title } = require('process')

const getNotes = function () {
    return 'Your notes'
}
const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    
     
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        // console.log(notes)
        saveNotes(notes)
        console.log('New note added')
    }
    else {
        console.log('Note title taken')

    }
}
const removeNote = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    
    if (notes.title === title) {
        notes.pop({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("Note Removed"))
    }
    else{
        console.log(chalk.red("No match found"))
    }
}





        const saveNotes = function (notes) {
            const dataJson = JSON.stringify(notes)
            fs.writeFileSync('notes.json', dataJson)
        }

        const loadNotes = function () {
            try {
                const dataBuffer = fs.readFileSync('notes.json')
                const dataJson = dataBuffer.toString()
                return JSON.parse(dataJson)
            }
            catch (e) {
                return []
            }
        }
        const listNotes = () => {
            const notes = loadNotes()
            console.log(chalk.inverse('Your Notes'))
            notes.forEach((note) => {
                console.log(note.title)
                
            });


        }
        const readNotes = () => {
            const notes = loadNotes()
            const note = notes.find((note) => note.title === title)
            if(note){
            
                console.log(chalk.red(note.title))
                console.log(chalk.yellow(note.body))
            }
        
        else{
            console.log(chalk.red('No note found'))
        }
        }
            // const notes = loadNotes()
            //  const v= notes[loadNotes()]
            // console.log(chalk.black("Your Notes"))
            // v.forEach(v => {
                // console.log(note)
                
                
            
            
            
            

            
                
            
                
            

            
            
            
            
        

        module.exports = {
            getNotes: getNotes,
            addNote: addNote,
            removeNote: removeNote,
            listNotes: listNotes,
            readNotes: readNotes
        }