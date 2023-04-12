'use strict';

const ul = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];
const sortedEmployees = employees
  .sort(
    (a, b) => (
      +b.dataset.salary.replace(/[$,]/g, '')
      - +a.dataset.salary.replace(/[$,]/g, '')
    )
  );

ul.append(...sortedEmployees);

function getEmployees(list) {
  const employeesList = list.forEach(el => {
    return {
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    };
  });

  return employeesList;
}

getEmployees(employees);
