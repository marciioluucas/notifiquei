module.exports = (message, ...httpStatus) => {
    let status = 500;
    if (httpStatus.length === 1 && httpStatus[0] >= 100 && httpStatus[0] <= 599) status = httpStatus[0];
    return {
        message,
        status: status[0]
    }
}