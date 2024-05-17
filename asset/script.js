// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Employee data
//Wrote afunction to get user input to create and return an array of employee objects
const collectEmployees = function() {

const employees = [];

let letsContinue = true;
// Checks to see that all the boxes are filled with input. 
while (letsContinue) {
  let firstName = prompt("Enter employee's first name");
  let lastName = prompt("Enter employee's last name");
  let salary = prompt("Enter employee's salary");

  if (salary === null || salary === "" || isNaN(salary)) {
    salary = 0;
  }

  const employee = {
    firstName: firstName,
    lastName: lastName,
    // This returns salary as a number and not a string.
    salary: parseInt(salary)
  }
  // This stores the nem employee data in the employees variable that is set to an empty array 
  employees.push(employee);

  letsContinue = confirm("Do you want to add another employee?");

}
  // returns the information stored in the employees variable
  return employees;
}

 //Wrote a function which Calculates and display the average salary
const displayAverageSalary = function(employeesArray) {
  
  let totalSalary = 0;
  let numEmployees = employeesArray.length;

  for (let i = 0; i < numEmployees; i++) {
  totalSalary += employeesArray[i].salary;
  }
  // The two $$ signs: one is for template literal and the other is just a dollar sign on the average salary amount.
  const averageSalary = totalSalary/numEmployees;
  console.log( `The average employee salary between our ${numEmployees} employee(s) is $${averageSalary.toFixed(2)}`);
}


// Wrote a function which Selects and displays a random employee
const getRandomEmployee = function(employeesArray) {
  // The Math.floor(math.radom()) method is used to select a random number and round it to a whole number
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)]

  console.log(`Congratulations! ${randomEmployee["firstName"]} ${randomEmployee["lastName"]} is our daily winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
