/**
 * @author: Bhumi Desai
 * @description: Custom validations are done here
 */
import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * It checks the control value of form is string or not.
 * This means that it accepts only string.
 */
export function validateCharacters(control: AbstractControl): ValidationErrors {
    if (!/^[^-\s][a-zA-Z ]+$/.test(control.value)) {
        return { invalidcharacters: true };
    }
    return null;
}

/**
 * It checks the control value of form is number or not.
 * This means that it accepts only number.
 */
export function validateOnlyNumber(control: AbstractControl): ValidationErrors {
    if (!/^\d+$/.test(control.value)) {
        return { invalidnumber: true };
    }
    return null;
}

/**
 * Validates email
 */
export function validateEmail(control: AbstractControl): ValidationErrors {
    if (!/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(control.value)) {
        return { invalidemail: true };
    }
    return null;
}

/**
 * Validates number and percent
 * It checks whether it is number or not.
 * Also allows one single percent symbol
 */
export function validateNumberAndPercent(control: AbstractControl): ValidationErrors {

    if ((!/^[0-9]*\%?$/.test(control.value)) && (!/^\d+$/.test(control.value))) {
        return { invalidnumbers: true };
    } else {
        if ((/^\d+$/.test(control.value) && (control.value > 100 || control.value < 35))) {
            return { invalidRange: true };
        }

        if ((control.value.indexOf('%') > 0)) {
            const trimEndPoint: number = control.value.indexOf('%');
            const dumNumber: string = control.value;
            const numString: string = dumNumber.substr(0, trimEndPoint);

            const myNumber: number = +numString;
            if (myNumber > 100) {
                return { invalidRange: true };
            }
        }
    }
    return null;
}

