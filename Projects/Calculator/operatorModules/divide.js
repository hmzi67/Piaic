import { error } from "console";
export function divide(num1, num2) {
    if (num2 === 0) {
        throw error('infinity');
    }
    else {
        return num1 / num2;
    }
}
