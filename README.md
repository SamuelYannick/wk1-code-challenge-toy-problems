# Toy Problems Wk1 Code Challenge

## Intro

This repository contains three JavaScript files each performing specific tasks:

1. **Grade Calculator**: Determines a student's grade based on their marks.
2. **Speed Monitoring**: Calculates demerit points or license suspension based on vehicle speed.
3. **Net Salary Calculation**: Computes the net salary based on basic salary, benefits, and deductions (PAYE, NHIF, and NSSF).

Each file/script is independent of the other.

---

## Details

### 1. Grade Calculation (`gradeCalculator`)

This scrip calculates a student's grade based on marks entered by the user. Grades are determined according to the following criteria:

- **A**: Marks above 79
- **B**: Marks between 60 and 79
- **C**: Marks between 50 and 59
- **D**: Marks between 40 and 49
- **E**: Marks below 40

#### How it works

- Upon running, the script prompts the user to input marks between 0 and 100.
- If the input is invalid, the script requests valid input until provided.
- The grade is displayed in an alert box.

---

### 2. Speed Monitoring (`speedChecker.js`)

This script evaluates a vehicle's speed and determines whether a warning, demerit points, or license suspension applies. It operates under the following rules:

- **Speed limit**: 70 km/h
- For every **5 km/h** above the speed limit, the driver earns **1 demerit point**.
- If the driver accrues **12 or more points**, their license is suspended.

#### Its working

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

#### The How

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
Gross Salary: KES 92000.00
PAYE (Tax): KES 20535.35
NHIF Deduction: KES 1600.00
NSSF Deduction: KES 2160.00
Net Salary: KES 67704.65
```

---

## The End

## By

Samuel Ochieng.
