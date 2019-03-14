
const calculateOrderShippingCost = (order) => {
    let resultArray = [];

    order.forEach(parcel => {
        if(parcel.width < 10 && parcel.height < 10 && parcel.depth < 10){
            resultArray.push(3);
            return;
        }
        resultArray.push(0);
    });

    return resultArray;
}

module.exports = {
    calculateOrderShippingCost
}