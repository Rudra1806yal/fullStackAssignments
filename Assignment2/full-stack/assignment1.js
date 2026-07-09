//Create a CRUD (Create, Read, Update, Delete) application using an array that stores student 
// names. Implement all CRUD operations on the array.

let students = []

//making of create function

function createStudent(name){
    students.push(name);
    console.log(`${name} added successfully.`)
}

//making of read function
function readStudent(){
    console.log("Students list: " + students.join(" , "));
}

//making of update function
function updateStudent(index, newName){
    if(index >= 0 && index < students.length){
        console.log(`Updated ${students[index]} to ${newName}`);
        students[index] = newName
    }else{
        console.log("Invalid index!")
    }
}

//making of delete function
function deleteStudent(index){
    if(index >= 0 && index < students.length){
        console.log(`Deleted ${students[index]}`);
        students.splice(index, 1)
    }else{
        console.log("Invalid index!")
    }
}
// //Main program

//1.Create operation
createStudent("Ashok")
createStudent("Riya")
createStudent("John")
createStudent("Riya")

//2.Read operation
readStudent()

//3.Update operation
updateStudent(1,"Priya")
readStudent()

//4.Delete operaion
deleteStudent(3)
readStudent()

