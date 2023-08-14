import { error } from "console";

export function divide(num1:number, num2:number){
    if(num2 === 0){
        throw error('infinity')
    }
    else{
        return num1 / num2;
    }
}