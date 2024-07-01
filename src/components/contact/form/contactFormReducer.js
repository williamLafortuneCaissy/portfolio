export const formInitialState = {
    status: {
        type: '',
        message: '',
    },
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

export const statusTypes = {
    success: 'success',
    error: 'error',
}

export const formActions = {
    updateFormValidation: 'UPDATE_FORM_VALIDATION',
    updateInputValue: 'UPDATE_INPUT_VALUE',
    updateInputErrorMessage: 'UPDATE_INPUT_ERROR_MESSAGE',
    submitRequest: 'SUBMIT_REQUEST',
    submitSuccess: 'SUBMIT_SUCCESS',
    submitFailure: 'SUBMIT_FAILURE'
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case formActions.updateFormValidation:
            return { ...state, isValid: action.isValid };
        case formActions.updateInputValue:
            return {
                ...state,
                status: {
                    type: '',
                    message: '',
                },
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
        case formActions.submitRequest:
            return { ...state, isLoading: true };
        case formActions.submitSuccess:
            return { 
                ...state, 
                isLoading: false, 
                status: action.status,
                data: formInitialState.data
            };
        case formActions.submitFailure:
            return { ...state, isLoading: false, status: action.status };
        default:
            throw Error('Unknown action: ' + action.type);
    }
}