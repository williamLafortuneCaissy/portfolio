export const formInitialState = {
    status: '',
    isLoading: false,
    isValid: true,
    data: {
        name: {
            value: '',
            errorMessage: ''
        },
        email: '',
        message: ''
    }
};

export const formActions = {
    updateInput: 'updateInput',
    clearInputs: 'clearInput',
    formIsLoading: 'formIsLoading',
    submitSuccess: 'submitSuccess',
    submitFailure: 'submitFailure'
}

// const validateForm = (form) => {
//     const nameIsValid = validateName(form.data.name);
//     const emailIsValid = validateEmail(form.data.email);
//     const messageIsValid = validateMessage(form.data.message);

//     return nameIsValid && emailIsValid && messageIsValid
// }

// function validateEmail(email) {
//     const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
//     return regex.test(email);
// }

export const formReducer = (state, action) => {
    switch (action.type) {
        case formActions.updateInput:
            console.log(formActions.updateInput, action);
            return {
                ...state,
                status: '',
                isValid: true,
                data: {
                    ...state.data,
                    [action.input]: {
                        value: action.value,
                        errorMessage: action.errorMessage
                    },

                }
            };
        case formActions.clearInputs:
            console.log(formActions.clearInputs);
            return {
                ...state,
                data: formInitialState.data
            };
        case formActions.formIsLoading:
            console.log(formActions.formIsLoading);
            return { ...state, isLoading: true };
        case formActions.submitSuccess:
            console.log(formActions.submitSuccess);
            return { ...state, isLoading: false, status: "Form Submitted Successfully" };
        case formActions.submitFailure:
            console.log(formActions.submitFailure);
            return { ...state, isLoading: false, status: action.status };
        default:
            throw Error('Unknown action: ' + action.type);
    }
}