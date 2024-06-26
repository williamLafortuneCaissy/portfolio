export const formInitialState = {
    name: '',
    email: '',
    message: ''
};

export const formActions = {
    change: 'change',
    clear: 'clear',
}

export const formReducer = (form, action) => {
    switch (action.type) {
        case formActions.change:
            console.log('change');
            return { ...form, [action.name]: action.value };
        case formActions.clear:
            console.log('clear');
            return formInitialState;
        default:
            throw Error('Unknown action: ' + action.type);
    }
}