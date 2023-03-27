
//alert("Add code to main.js to assemble the parts to make the Employee app")
import EmployeeDataAccess from './data-access/employee-data-access.js';
import EmployeeList from './ui/employee-list.js';
import EmployeeForm from './ui/employee-form.js';

const da = new EmployeeDataAccess();
const allEmployees = da.getAllEmployees();

const divList = document.getElementById("employee-list");
const list = new EmployeeList(divList, allEmployees);

const divForm = document.getElementById("employee-form");
const form = new EmployeeForm(divForm);

list.addEventListener("employee-selected", (id)=>{
    // alert(id);
    const selectedEmployee = da.getEmployeeById(id);
    form.employee = selectedEmployee;
});

list.addEventListener("delete-employee", (id)=>{
    const selectedEmployee = da.getEmployeeById(id);
    if(confirm("Are you sure you want to delete " + selectedEmployee.firstName + " " + selectedEmployee.lastName)){
        da.deleteEmployee(id);
        list.employees = da.getAllEmployees();
        form.clear();
    }
    
});

form.addEventListener("employee-saved", (employee) => {
    if(employee.id > 0){
        da.updateEmployee(employee);
    }
    else{
        da.insertEmployee(employee);
    }
    list.employees = da.getAllEmployees();
}); 