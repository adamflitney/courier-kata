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
    it('should accept an array of parcel objects', () => {
        expect(courier.calculateOrderShippingCost(order)).not.toThrow();
    });

});