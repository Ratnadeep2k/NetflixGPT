const checkValidData=(email,password)=>{
    const isEmailValid =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid){
        return 'Invalid Email';
    }else if (!isPasswordValid) {
        return 'Invalid Password';
    }

    return null; //return null when the data is valid
}
export default checkValidData;