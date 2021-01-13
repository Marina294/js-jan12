function question() {
let input = prompt('What would you like to do?');
//optional to add dummy data inside todos

const todos = ['Collect Chicken Eggs','Clean Litter Box','2','3','4'];

//start with a while loop that checks for quit input
while(input !== 'q' && input !== null) {

    // continue
    if (input === '' || input !== 'list' || input !== 'new' || input !== 'delete') {
        console.log('wrong command');
        input = prompt('What would you like to do?');
    } 

    // list
    if (input === 'list') {
        console.log(todos);
        input = prompt('What would you like to do?');
    }

    //new
    if (input === 'new') {
        const  newTodo = prompt('Ok, what is the new todo?'); 
        todos.push(input);
        console.log(`added "${newTodo}" to list` );
        input = prompt('What would you like to do?');
    } 

    // //delete
    if (input === 'delete') {
        const deleteNumber = prompt('Ok, enter an index to delete.'); 
        const deleteTodos = todos.splice(deleteNumber, 1);
        console.log(`deleted ${deleteTodos[0]}`);
        input = prompt('What would you like to do?');
    }   
    
}

console.log('OK QUIT THE APP');

}

question()


// -------------------------------------------------------------
// oroginal code
// -------------------------------------------------------------

// let input = prompt('What would you like to do?');

// //optional to add dummy data inside todos
// const todos = ['Collect Chicken Eggs','Clean Litter Box'];

// //start with a while loop that checks for quit input
// while(){
//     //if else conditions
// }
