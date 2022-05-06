export function transformDate(date) {

    let contentDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    return contentDate.toLocaleString("en-US", options);
}