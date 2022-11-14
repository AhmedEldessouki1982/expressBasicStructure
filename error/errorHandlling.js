//error handling function
export default function ({errors}) {
    let errorObj = {};
    for (let property in errors) {
        errorObj[property] = errors[property].properties.message;
    }
    return errorObj;
}