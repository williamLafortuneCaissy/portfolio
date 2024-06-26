export const formInitialState = {
    status: '',
    isLoading: false,
    isValid: true,
    data: {
        name: {
            value: '',
            errorMessage: ''
        },
        email: {
            value: '',
            errorMessage: ''
        },
        message: {
            value: '',
            errorMessage: ''
        }
    }
};

export const formActions = {
    updateInputValue: 'updateInputValue',
    updateInputErrorMessage: 'updateInputErrorMessage',
    formIsLoading: 'formIsLoading',
    submitSuccess: 'submitSuccess',
    submitFailure: 'submitFailure'
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case formActions.updateInputValue:
            console.log(formActions.updateInputValue, action);
            return {
                ...state,
                status: '',
                isValid: true,
                data: {
                    ...state.data,
                    [action.input]: {
                        value: action.value,
                        errorMessage: '',
                    },
                }
            };
        case formActions.updateInputErrorMessage:
            console.log(formActions.updateInputErrorMessage);
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.input]: {
                        value: state.data[action.input].value,
                        errorMessage: action.errorMessage
                    },
                }
            };
        case formActions.formIsLoading:
            console.log(formActions.formIsLoading);
            return { ...state, isLoading: true };
        case formActions.submitSuccess:
            console.log(formActions.submitSuccess);
            return { 
                ...state, 
                isLoading: false, 
                status: "Form Submitted Successfully",
                data: formInitialState.data
            };
        case formActions.submitFailure:
            console.log(formActions.submitFailure);
            return { ...state, isLoading: false, status: action.status };
        default:
            throw Error('Unknown action: ' + action.type);
    }
}