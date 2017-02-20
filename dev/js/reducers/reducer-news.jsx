export default function (state = [], action) {
    switch (action.type) {
        case 'NEWS_UPLOAD':
            return action.payload;
    }
    return state;
}