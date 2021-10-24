/*eslint-env browser*/

window.addEventListener("load", function () {

    window.document.getElementById("registration_form").reset();

    for(var i=0;i<employeeArray.length;i++) {
        addEmployee(employeeArray[i][0],employeeArray[i][1],employeeArray[i][2]);
    }
    window.document.getElementById("employee_count").innerHTML = "Showing " + employeeArray.length + " Employees";
    window.document.getElementById("addButton").addEventListener("click",function(e) {
        e.preventDefault();
        addEmp();
    });
});


var employeeArray = new Array();
    employeeArray.push(["Alpha","CEO",111]);
    employeeArray.push(["Beta","CTO",222]);
    employeeArray.push(["Gamma","CFO",333]);
    employeeArray.push(["Donna","COO",444]);
    employeeArray.push(["Basil","SDE",555]);


function addEmployee(name, title, extension) {
    var empTable = window.document.getElementById("employeeDetails");
    var row = empTable.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = name;
    cell = row.insertCell(-1);
    cell.innerHTML = title;
    cell = row.insertCell(-1);
    cell.innerHTML = extension;
    cell = row.insertCell(-1);
    var delButton = document.createElement("BUTTON");
    delButton.innerHTML = "Delete";
    delButton.setAttribute("class","del");
    delButton.setAttribute("onclick", "deleteEmp(this);");
    cell.appendChild(delButton);
}

function deleteEmp(button) {
    var row = button.parentNode.parentNode;
    var table = window.document.getElementById("employeeDetails");
    table.deleteRow(row.rowIndex);
    employeeArray.splice(row.rowIndex,1);
    window.document.getElementById("employee_count").innerHTML = "Showing " + employeeArray.length + " Employees";
}

function addEmp() {
    var tableCells = window.document.getElementsByTagName("td");
    var name, title, extension, required, is_empty=false;
    required = "<span>This is a Required Field! </span>";
    name = window.document.getElementById("name").value;
    title = window.document.getElementById("title").value;
    extension = window.document.getElementById("extension").value;

    if(name === "") {
        tableCells[2].innerHTML = required;
        is_empty=true;
    }

    if(title === "") {
        tableCells[5].innerHTML = required;
        is_empty=true;
    }

    if(extension === "") {
        tableCells[8].innerHTML = required;
        is_empty=true;
    }

    if(!is_empty){
        tableCells[2].innerHTML = "";
        tableCells[5].innerHTML = "";
        tableCells[8].innerHTML = "";
        employeeArray.push([name,title,extension]);
        addEmployee(name, title, extension);
        window.document.getElementById("employee_count").innerHTML = "Showing " + employeeArray.length + " Employees";
        window.document.getElementById("registration_form").reset();
    }

};