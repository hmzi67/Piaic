import { studentRegForm } from "./regModule/regForm.js";
import showBanner from "node-banner";
(async () => {
    await showBanner('Student Registration form', 'by Hamza Waheed Abbasi');
})();
console.log('Details of student is...', studentRegForm);
