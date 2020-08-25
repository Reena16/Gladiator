import{ Customer } from './customer'
export class Application{
    customer:Customer;
    
	gender:string;

	address:string;

	userPAN:string;

	aadharNumber:string;

	Nationality:string;

	 retirementAge:number;

	organisation:string;
	
	 income:number;
	
	loanAmount:number;

	 tenure:number;
	
	 downPayment:number;
	
	 maritialStatus:string;
	
	 noOfDependents:string;
	
	 depandentMonthlyExpenses;
	
	 personlExpenses;
	
	 existingLoan;
	
	 emiExistingLoan;
	
	 maxLoanAmount; //read only field based on above parameters and will be calculated on front end
	
	loanStatus:string;
	
	appointmentDate:string;
	
}