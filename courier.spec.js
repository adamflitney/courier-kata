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
    const mediumParcel = {
        height: 49,
        width: 49,
        depth: 9
    }
    const largeParcel = {
        height: 1,
        width: 99,
        depth: 99
    }
    const xlParcel = {
        height: 100,
        width: 99,
        depth: 50
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

    it('should return a cost of $8 for a medium parcel (all dimensions < 50cm)', () => {
        expect(courier.calculateOrderShippingCost([mediumParcel])).toEqual([8]);
    })

    it('should return a cost of $15 for a large parcel (all dimensions < 100cm)', () => {
        expect(courier.calculateOrderShippingCost([largeParcel])).toEqual([15]);
    })

    it('should return a cost of $25 for an XL parcel (any dimension >= 100cm)', () => {
        expect(courier.calculateOrderShippingCost([xlParcel])).toEqual([25]);
    })

});