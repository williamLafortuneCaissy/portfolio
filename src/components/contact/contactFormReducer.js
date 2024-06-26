export const formInitialState = {
    status: '',
    isLoading: false,
    data: {
        name: '',
        email: '',
        message: ''
    }
};

export const formActions = {
    change: 'change',
    clear: 'clear',
    submitRequest: 'submitRequest',
    submitSuccess: 'submitSuccess',
    submitFailure: 'submitFailure'
}

export const formReducer = (form, action) => {
    switch (action.type) {
        case formActions.change:
            console.log('change');
            return {
                ...form,
                data: {
                    ...form.data,
                    [action.name]: action.value
                }
            };
        case formActions.clear:
            console.log('clear');
            return {
                ...form,
                data: formInitialState.data
            };
        case formActions.submitRequest:
            console.log('submitRequest');
            return { ...form, isLoading: true };
        case formActions.submitSuccess:
            console.log('submitSuccess');
            return { ...form, isLoading: false, status: "Form Submitted Successfully" };
        case formActions.submitFailure:
            console.log('submitFailure');
            return { ...form, isLoading: false, status: action.status };
        default:
            throw Error('Unknown action: ' + action.type);
    }
}