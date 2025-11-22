

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};


function Faculty(name, department) {
    Person.call(this, name);      // inherit Person properties
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);  
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log("Department:", this.department);
};


function Professor(name, department, subject) {
    Faculty.call(this, name, department);   // inherit Faculty + Person
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log("Subject:", this.subject);
};


let prof1 = new Professor("Shashank", "Computer Science", "AI & ML");

prof1.showName();          
prof1.showDepartment();    
prof1.showSubject();       
