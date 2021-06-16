export const similarFilter = (arr, val) => {
    if(arr.includes(val)) {
        return arr.filter((item) => item !== val)
    } 
    return [...arr, val];
}