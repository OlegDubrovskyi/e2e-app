 
/*
Page Objects help in better re-usablitity and maintenance of element locators
This file exports CalculatorPageObject class
**/
export class CalculatorPageObject {
    public idLocator: string = 'com.android.calculator2:id/';
    public digitLocator: string = 'com.android.calculator2:id/digit';
    public addOperator: string;
    public subtractOperator: string;
    public multiplyOperator: string;
    public divisionOperator: string;
    public equalOperator: string;
    public outputText: string ='com.android.calculator2.CalculatorEditText'
  
    constructor() {
        this.addOperator = this.androidIDSelector(this.calcOperatorSelector('plus'));
        this.subtractOperator = this.androidIDSelector(this.calcOperatorSelector('minus'));
        this.multiplyOperator = this.androidIDSelector(this.calcOperatorSelector('mul'));
        this.divisionOperator = this.androidIDSelector(this.calcOperatorSelector('div'));
        this.equalOperator = this.androidIDSelector(this.calcOperatorSelector('equal'));
        this.outputText = this.androidClassSelector(this.outputText);
    }

    androidIDSelector = (selector: any): string => {
        let str = `'android=new UiSelector().resourceId("${selector}")'`;
        str = str.substring(1, str.length-1);;
        return str;
    }

    androidClassSelector = (selector: any): string => {
        let str = `'android=new UiSelector().className("${selector}")'`;
        str = str.substring(1, str.length-1);;
        return str;
    }

    calcDigitSelector = (selector: string): string => {
        return this.androidIDSelector(this.digitLocator + selector);
    }
    calcOperatorSelector = (selector: string): string => {
        return this.idLocator + selector;
    }
  }