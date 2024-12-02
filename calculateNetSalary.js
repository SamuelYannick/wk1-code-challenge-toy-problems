// Tax rates
const taxBrackets = [
    { upperLimit: 24000, rate: 0.1 },
    { upperLimit: 32333, rate: 0.25 },
    { upperLimit: Infinity, rate: 0.3 }
  ];

//NHIF rates
const nhifRates = [
  { upperLimit: 5999, deduction: 150 },
  { upperLimit: 7999, deduction: 300 },
  { upperLimit: 11999, deduction: 400 },
  { upperLimit: 14999, deduction: 500 },
  { upperLimit: 19999, deduction: 600 },
  { upperLimit: 24999, deduction: 750 },
  { upperLimit: 29999, deduction: 850 },
  { upperLimit: 34999, deduction: 900 },
  { upperLimit: 39999, deduction: 950 },
  { upperLimit: 44999, deduction: 1000 },
  { upperLimit: 49999, deduction: 1100 },
  { upperLimit: 59999, deduction: 1200 },
  { upperLimit: 69999, deduction: 1300 },
  { upperLimit: 79999, deduction: 1400 },
  { upperLimit: 89999, deduction: 1500 },
  { upperLimit: 99999, deduction: 1600 },
  { upperLimit: Infinity, deduction: 1700 }
  ];
  
const nssfRate = 0.06; // 6% of gross salary 
  
function calculateTax(income) {
  let tax = 0;
  let remainingIncome = income;
  
  for (const bracket of taxBrackets) {
    if (remainingIncome <= 0) break;
    const taxableAmount = Math.min(bracket.upperLimit, remainingIncome);
    tax += taxableAmount * bracket.rate;
    remainingIncome -= taxableAmount;
  }
  return tax;
}
  
function calculateNHIF(grossSalary) {
  for (const rate of nhifRates) {
    if (grossSalary <= rate.upperLimit) {
      return rate.deduction;
    }
  }
  return 0; // Default in case rates are misconfigured
  }
  
function calculateNetSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits;
  // NSSF deduction (capped)
  const nssfDeduction = Math.min(grossSalary * nssfRate, 2160);
  // PAYE calculation
  const taxableIncome = grossSalary - nssfDeduction;
  const payee = calculateTax(taxableIncome);
  // NHIF deduction
  const nhifDeduction = calculateNHIF(grossSalary);
  // Net Salary
  const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
  
  return {
    grossSalary, payee, nhifDeduction, nssfDeduction, netSalary
  };
}
  
const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter your benefits: "));
  
const results = calculateNetSalary(basicSalary, benefits);
  
console.log("Gross Salary: KES", results.grossSalary.toFixed(2));
console.log("PAYE (Tax): KES", results.payee.toFixed(2));
console.log("NHIF Deduction: KES", results.nhifDeduction.toFixed(2));
console.log("NSSF Deduction: KES", results.nssfDeduction.toFixed(2));
console.log("Net Salary: KES", results.netSalary.toFixed(2));
  