# README: JavaScript Utility Scripts

## Overview

This repository contains three JavaScript utility scripts designed for specific tasks:

1. **Grade Calculation**: Determines a student's grade based on their marks.
2. **Speed Monitoring**: Calculates demerit points or license suspension based on vehicle speed.
3. **Net Salary Calculation**: Computes the net salary based on basic salary, benefits, and deductions (PAYE, NHIF, and NSSF).

Each script is standalone and can be run independently.

---

## Script Details

### 1. Grade Calculation (`getStudentGrade`)

This script calculates a student's grade based on marks entered by the user. Grades are determined according to the following criteria:

- **A**: Marks above 79
- **B**: Marks between 60 and 79
- **C**: Marks between 50 and 59
- **D**: Marks between 40 and 49
- **E**: Marks below 40

#### Usage For Grade Calculation

- Upon running, the script prompts the user to input marks between 0 and 100.
- If the input is invalid, the script requests valid input until provided.
- The grade is displayed in an alert box.

---

### 2. Speed Monitoring (`checkSpeed`)

This script evaluates a vehicle's speed and determines whether a warning, demerit points, or license suspension applies. It operates under the following rules:

- **Speed limit**: 70 km/h
- For every **5 km/h** above the speed limit, the driver earns **1 demerit point**.
- If the driver accrues **12 or more points**, their license is suspended.

#### Usage For Speed Monitoring

- The script prompts the user to input the vehicle's speed.
- Based on the input:
  - Speeds below 70 km/h display "Ok."
  - Speeds above 70 km/h display the number of demerit points.
  - Speeds with more than 12 demerit points result in a "License suspended" message.

---

### 3. Net Salary Calculation (`calculateNetSalary`)

This script calculates an employee's **net salary** after applying taxes and deductions based on Kenyan tax regulations.

#### Components

1. **Tax Brackets (PAYE)**:
   - First KES 24,000: 10%
   - KES 24,001 to KES 32,333: 25%
   - Above KES 32,333: 30%

2. **NHIF Deduction**:
   - Based on gross salary, ranging from KES 150 to KES 1,700.

3. **NSSF Deduction**:
   - 6% of gross salary, capped at KES 2,160.

#### Usage For Net Salary Calculation

- The script prompts the user to enter:
  - **Basic salary**
  - **Benefits**
- Outputs:
  - Gross salary
  - PAYE (tax)
  - NHIF deduction
  - NSSF deduction
  - **Net salary**

#### Example Output

``` javascript
Gross Salary: KES 50,000.00
PAYE (Tax): KES 6,333.25
NHIF Deduction: KES 850.00
NSSF Deduction: KES 2,160.00
Net Salary: KES 40,656.75
```

---

## How to Run

1. Copy the desired script into a JavaScript runtime environment (e.g., browser console or Node.js).
2. Follow the instructions to provide input where prompted.
3. View results in the console or as alerts, depending on the script.

---

## Requirements

- Basic understanding of JavaScript.
- A runtime environment capable of running JavaScript (e.g., modern web browsers).

---

## Author

Samuel Ochieng  
Built as part of Full-Stack Web Development learning journey.
