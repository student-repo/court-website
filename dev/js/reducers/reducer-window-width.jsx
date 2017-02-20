export default function (state = window.innerWidth, action) {
    switch (action.type) {
        case 'RESIZE_WINDOW':
            return action.payload;
    }
    return state;
}