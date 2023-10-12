export const validateForm = (email, password)=>{
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(password);

    if(!isValidEmail) return "Email is not Valid";
    if(!isValidPassword) return "Password is not Valid";


    return null;
}