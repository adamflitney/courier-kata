
const calculateOrderShippingCost = (order) => {
    let resultArray = [];

    order.forEach(parcel => {
        resultArray.push(0);
    });

    return resultArray;
}

module.exports = {
    calculateOrderShippingCost
}