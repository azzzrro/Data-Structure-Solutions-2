let array=[]

let undoArray=[]
let redoArray=[]


function push(value){
    undo.push(value)
    array.push(value)
}



function undo(){
    if(undo.length>0){
        redo.push(array.pop())
        
    }
}

function redo(){
    if(redo.length>0){
        array.push(redo.pop())

    }
}

push(7)
push(8)
push(9)


// redoArray()

console.log(array);