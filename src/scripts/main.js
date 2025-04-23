'use strict';

const list = document.querySelector('ul');
const listItems = [...list.children];

function sortList(items) {
  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.append(item));
}

function getEmployees(items) {
  return items.map((item) => {
    return {
      name: item.innerText,
      position: item.dataset.position,
      salary: item.dataset.salary,
      age: item.dataset.age,
    };
  });
}

function parseSalary(salaryStr) {
  const salary = parseFloat(salaryStr.replace(/[$,/s]/g, ''));

  return isNaN(salary) ? 0 : salary;
}

sortList(listItems);
getEmployees(listItems);
