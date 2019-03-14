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
    }
    it('should accept an array of parcel objects', () => {
        expect(() => {courier.calculateOrderShippingCost(order)}).not.toThrow();
    });

    it('should return an equal size array of costs', () => {
        expect(courier.calculateOrderShippingCost(order)).toHaveLength(3);
    });

    it('should return a cost of $3 for a small parcel (all dimensions < 10cm)', () => {
        expect(courier.calculateOrderShippingCost([smallParcel])).toEqual([3]);
    })

});