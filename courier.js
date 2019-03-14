
const calculateOrderShippingCost = (order, speedy = false) => {
    let resultArray = [];

    order.forEach(parcel => {
        if(parcel.width >= 100 || parcel.height >= 100 || parcel.depth >= 100) {
            resultArray.push(25);
            return;
        }
        if (parcel.width < 100 && parcel.height < 100 && parcel.depth < 100) {
            if (parcel.width < 50 && parcel.height < 50 && parcel.depth < 50) {
                if (parcel.width < 10 && parcel.height < 10 && parcel.depth < 10) {
                    resultArray.push(3);
                    return;
                }
                resultArray.push(8);
                return;
            }
            resultArray.push(15);
            return;
        }
        resultArray.push(0);
    });
    if(speedy) {
        const subTotalCost = resultArray.reduce((acc, cur) => acc + cur);
        resultArray.push(subTotalCost);
    }
    return resultArray;
}

module.exports = {
    calculateOrderShippingCost
}