## Find department and average salary.
select d.department_name, AVG(s.base_salary) as AVG_Salary from employees e 
JOIN salaries s , departments d ON s.employee_id=e.employee_id AND d.department_id=e.department_id Group By d.department_name

## find the department with the highest AVG salary
SELECT department_name
FROM (
    SELECT 
        d.department_name,
        AVG(s.base_salary) AS avg_salary
    FROM employees e
    JOIN salaries s 
        ON s.employee_id = e.employee_id
    JOIN departments d 
        ON d.department_id = e.department_id
    GROUP BY d.department_name
) AS x
WHERE avg_salary = (
    SELECT MAX(avg_salary)
    FROM (
        SELECT 
            d.department_name,
            AVG(s.base_salary) AS avg_salary
        FROM employees e
        JOIN salaries s 
            ON s.employee_id = e.employee_id
        JOIN departments d 
            ON d.department_id = e.department_id
        GROUP BY d.department_name
    ) AS y
);

or

WITH dept_avg AS (
    SELECT 
        d.department_name,
        AVG(s.base_salary) AS avg_salary
    FROM employees e
    JOIN salaries s ON s.employee_id = e.employee_id
    JOIN departments d ON d.department_id = e.department_id
    GROUP BY d.department_name
)
SELECT department_name, MAX(avg_salary) FROM dept_avg;

## List departments having more than 2 employees.
SELECT d.department_name,count(e.employee_id) from departments d
LEFT JOIN employees e ON d.department_id=e.department_id Group By e.department_id having count(e.employee_id)>2

## Find job role with total salary > ₹2 lakh.

With dep_total_sal as (SELECT d.department_name, SUM(s.base_salary+s.bonus) as Total_Salary from departments d 
JOIN employees e, salaries s ON d.department_id=e.department_id AND s.employee_id=e.employee_id 
Group By d.department_id)

SELECT department_name,Total_Salary from dep_total_sal where Total_Salary>200000

## Average salary of employees who in 2020.

select avg(s.base_salary) from employees e
Join salaries s On s.employee_id=e.employee_id WHERE e.hire_date BETWEEN '2020-01-01' AND '2020-12-31';

## All departments min and max salaries

select d.department_name, max(s.base_salary),min(s.base_salary) from employees e
Join salaries s, departments d On s.employee_id=e.employee_id AND d.department_id=e.department_id Group by d.department_id

## Find department with min and max salaries (GROUP + agg).
SELECT d.department_name, MIN(s.base_salary) AS min_salary
FROM employees e
JOIN salaries s ON s.employee_id = e.employee_id
JOIN departments d ON d.department_id = e.department_id
GROUP BY d.department_id, d.department_name
ORDER BY min_salary ASC
LIMIT 1;

SELECT d.department_name, MAX(s.base_salary) AS max_salary
FROM employees e
JOIN salaries s ON s.employee_id = e.employee_id
JOIN departments d ON d.department_id = e.department_id
GROUP BY d.department_id, d.department_name
ORDER BY max_salary desc
LIMIT 1;








