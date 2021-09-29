
//This part is ES5 code

//Course Constructor
function Course (title,instructor,image){
    this.title=title;
    this.instructor=instructor;
    this.image=image;
}

//-----------------------------------------------------------------------------//

//UI Constructor
function UI(){

}

//UI prototypes
UI.prototype.addCourseToList = function(course){
    const list = document.getElementById('course-list');

    var html = `
        <tr>
            <td><img width ="100px" src = "img/${course.image}"/></td>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><a href="#" class= "btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `;

    list.innerHTML += html;
}

UI.prototype.clearControls= function(){
    const title = document.getElementById('title').value= "";
    const instructor = document.getElementById('instructor').value= "";
    const image = document.getElementById('image').value= "";
}

UI.prototype.deleteCourse = function(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.showAlert = function(message,className){
    var alert = `
    <div class = "alert alert-${className} fixed-top">
    ${message}
    </div>
    `
    const row = document.querySelector('.row');

    row.insertAdjacentHTML('beforeBegin',alert); //beforeBegin,afterBegin,beforeEnd,afterEnd

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}
//-------------------------------------------------------------------------------//


//Form Controls
document.getElementById('new-course').addEventListener('submit',function(e){

    const title = document.getElementById('title').value;
    const instructor = document.getElementById('instructor').value;
    const image = document.getElementById('image').value;

    //Create Course Object
    const course= new Course (title,instructor,image)

    //Create UI
    const ui = new UI();

    //Check for blank
    if(title=== '' || instructor === '' || image === '' ){
        ui.showAlert('Please complete the form', 'warning');
    }else{
        //add course to list
        ui.addCourseToList(course);

        //clear controls
        ui.clearControls()
        ui.showAlert('The course has beed added', 'success')
    }
    //stop the page from refreshing
    e.preventDefault();
});

//-------------------------------------------------------------------------------------//


//Delete List Items
document.getElementById('course-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteCourse(e.target);
    ui.showAlert('The course has beed deleted','danger')
    

});