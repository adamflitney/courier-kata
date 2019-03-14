const courier = require('./courier');

describe('calculateOrderShippingCost', () => {
    const order = [
        {
            height: 10,
            width: 5,
            depth: 10
        },
        {
            height: 20,
            width: 50,
            depth: 15
        },
        {
            height: 100,
            width: 100,
            depth: 100
        }
    ];
    const smallParcel = {
        height: 9,
        width: 8,
        depth: 9
    };
    const mediumParcel = {
        height: 49,
        width: 49,
        depth: 9
    };
    const largeParcel = {
        height: 1,
        width: 99,
        depth: 99
    };
    const xlParcel = {
        height: 100,
        width: 99,
        depth: 50
    };
    const normalPrice = courier.calculateOrderShippingCost(order).reduce((acc, cur) => acc + cur);
    it('should accept an array of parcel objects', () => {
        expect(() => {courier.calculateOrderShippingCost(order)}).not.toThrow();
    });

    it('should return an equal size array of costs', () => {
        expect(courier.calculateOrderShippingCost(order)).toHaveLength(3);
    });

    it('should return a cost of $3 for a small parcel (all dimensions < 10cm)', () => {
        expect(courier.calculateOrderShippingCost([smallParcel])).toEqual([3]);
    });

    it('should return a cost of $8 for a medium parcel (all dimensions < 50cm)', () => {
        expect(courier.calculateOrderShippingCost([mediumParcel])).toEqual([8]);
    });

    it('should return a cost of $15 for a large parcel (all dimensions < 100cm)', () => {
        expect(courier.calculateOrderShippingCost([largeParcel])).toEqual([15]);
    });

    it('should return a cost of $25 for an XL parcel (any dimension >= 100cm)', () => {
        expect(courier.calculateOrderShippingCost([xlParcel])).toEqual([25]);
    });

    it('should double the cost of an order if speedy shipping specified', () => {
        const speedyPrice = courier.calculateOrderShippingCost(order, true).reduce((acc, cur) => acc + cur);
        expect(speedyPrice).toEqual(normalPrice * 2);
    });

    it('should list speedy shipping as a seperate output item, with its associated cost', () => {
        expect(courier.calculateOrderShippingCost(order, true)).toHaveLength(4);
        expect(courier.calculateOrderShippingCost(order, true)[3]).toEqual(normalPrice);
    });

    it('should not impact price of individual parcels when speedy shipping specified', () => {
        const normalPrices = courier.calculateOrderShippingCost(order);
        const speedyPrices = courier.calculateOrderShippingCost(order, true);
        expect(speedyPrices[0]).toEqual(normalPrices[0]);
        expect(speedyPrices[1]).toEqual(normalPrices[1]);
        expect(speedyPrices[2]).toEqual(normalPrices[2]);
    });

    it('should charge $2/kg for small parcels heavier than 1kg', () => {
        const heavySmallParcel = {
            height: 9,
            width: 9,
            depth: 9,
            weight: 3
        };
        expect(courier.calculateOrderShippingCost([heavySmallParcel])).toEqual([7]);
    });
    it('should charge $2/kg for medium parcels heavier than 3kg', () => {
        const heavyMediumParcel = {
            height: 49,
            width: 49,
            depth: 49,
            weight: 5
        };
        expect(courier.calculateOrderShippingCost([heavyMediumParcel])).toEqual([12]);
    });

});