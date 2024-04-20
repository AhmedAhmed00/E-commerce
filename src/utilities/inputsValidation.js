

export const phoneValid = {
    required: "Required input", pattern: {
        value: /^(01|02|03|010|011|012|015)[0-9]{8}$/
        ,
        message: "Must be egyptian phone number"
    }
}

export const nameValid = {
    required: "This input is required",
    min: 3,
    max: 12,
    pattern: {
        value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        message: "Must be three chars at least and must be valid name"
    },
}


export const emailValid = {
    required: "Required input", pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid Email"
    }
}


export const passValid = {
    required: "Required Input", pattern: {
        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
        message: "start with capital letter, at least one number and symbol"
    }
}



