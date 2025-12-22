## Get all employees with salary greater than 100k.
select employee_id from salaries where base_salary+bonus>100000

## To get the 5th highest salary
SELECT *
FROM salarytab
ORDER BY salary DESC
LIMIT 1 OFFSET 4;

## Retrieve distinct department names.
select department_id, count(department_id) as number_of_employees from employees group by department_id

## Get top 5 highest paid employees.
select * from salaries order by base_salary desc limit 5

## Find employees hired in the year 2020.
select * from employees 
WHERE hire_date BETWEEN '2020-01-01' AND '2020-12-31';

## List employees with their department names.
select concat(e.first_name,' ',e.last_name) as Full_Name, d.department_name from employees e JOIN departments d
ON d.department_id=e.department_id

## List employees who don't belong to any department (LEFT JOIN).
SELECT 
    e.employee_id,
    CONCAT(e.first_name, ' ', e.last_name) AS full_name
FROM employees e
LEFT JOIN departments d 
    ON e.department_id = d.department_id
WHERE d.department_id IS NULL;

## (JOIN three tables).
SELECT 
    CONCAT(e.first_name, ' ', e.last_name) AS full_name,d.department_name , o.office_location
FROM employees e
JOIN departments d , offices o
    ON e.department_id = d.department_id AND o.office_id=d.office_id

## Count employees per department and dept name (JOIN + GROUP BY).
select d.department_name, count(e.department_id) from employees e JOIN departments d ON d.department_id=e.department_id Group By e.department_id

## Find employees who work in departments located in “New York”.
SELECT 
    COUNT(employee_id)
FROM employees e
JOIN departments d , offices o
    ON e.department_id = d.department_id AND o.office_id=d.office_id WHERE o.office_location="New York"

## Employees NOT assigned to any project
SELECT 
    e.employee_id,
    CONCAT(e.first_name, ' ', e.last_name) AS full_name
FROM employees e
LEFT JOIN employee_projects ep 
    ON e.employee_id = ep.employee_id
WHERE ep.project_id IS NULL;

## Departments that have NO employees
SELECT 
    d.department_id,
    d.department_name
FROM departments d
LEFT JOIN employees e 
    ON d.department_id = e.department_id
WHERE e.employee_id IS NULL;

## Employees with their department OR “No Dept” if missing or has no dept ->> COALESCE
SELECT
    CONCAT(e.first_name, ' ', e.last_name) AS full_name,
    COALESCE(d.department_name, 'No Dept') AS department_name
FROM employees e
LEFT JOIN departments d
    ON e.department_id = d.department_id;


