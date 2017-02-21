export default function (state = [], action) {
    switch (action.type) {
        case 'TENNIS_SCHOOL_UPLOAD':
            return action.payload;
    }
    return state;
}