
const { program } = require('commander');

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list': 
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        
        case 'get': 
            const findedContact = await contacts.getContactById(id);
            return console.log(findedContact);
        
        case 'remove': 
            const removedContact = await contacts.removeContact(id);
            return console.log(removedContact);
        
        case 'add':
            const newContact = await contacts.addContact({name, email, phone})
            return console.log("newContact", newContact);
        
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
} 

program.option("--action, <type>")
    .option("--id, <type>")
    .option("--name, <type>")
    .option("--email, <type>")
    .option("--phone, <type>");

program.parse();

const options = program.opts();

invokeAction(options);
