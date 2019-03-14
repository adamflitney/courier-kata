
const extraWeightCostPerKG = 2;

const calculateOrderShippingCost = (order, speedy = false) => {
    let resultArray = [];

    order.forEach(parcel => {
        const smallCost = 3;
        const mediumCost = 8;
        const largeCost = 15;
        const xlCost = 25;
        const smallWeightLimit = 1;
        const mediumWeightLimit = 3;
        const largeWeightLimit = 6;
        const xlWeightLimit = 10;
        
        if (parcel.width >= 100 || parcel.height >= 100 || parcel.depth >= 100) {
            
            resultArray.push(xlCost + weightCost(xlWeightLimit, parcel.weight));
            return;
        }
        if (parcel.width < 100 && parcel.height < 100 && parcel.depth < 100) {
            if (parcel.width < 50 && parcel.height < 50 && parcel.depth < 50) {
                if (parcel.width < 10 && parcel.height < 10 && parcel.depth < 10) {
                    resultArray.push(smallCost + weightCost(smallWeightLimit, parcel.weight));
                    return;
                }
                resultArray.push(mediumCost + weightCost(mediumWeightLimit, parcel.weight));
                return;
            }
            resultArray.push(largeCost + weightCost(largeWeightLimit, parcel.weight));
            return;
        }
        resultArray.push(0);
    });
    if (speedy) {
        const subTotalCost = resultArray.reduce((acc, cur) => acc + cur);
        resultArray.push(subTotalCost);
    }
    return resultArray;
}

const weightCost = (weightLimit, weight) => {
    let extra = 0;
    extra = weight - weightLimit > 0 ? (weight - weightLimit) * extraWeightCostPerKG : 0;
    return extra;
}

module.exports = {
    calculateOrderShippingCost
}