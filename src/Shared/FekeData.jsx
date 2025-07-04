import { faker } from '@faker-js/faker';

function createRandomCarList() {
    return {
        name: faker.vehicle.vehicle(),
        fuelType: faker.vehicle.fuel(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        image: 'https://content.carlelo.com/uploads/blog_img/1710568288.webp', // Placeholder for the car image
        miles: '10000',
        gearType: 'Automatic',
        price: faker.finance.amount({ min: 40000, max: 4000000 })
    };
}

const carList = faker.helpers.multiple(createRandomCarList, {
    count: 8,
});

// Export carList directly
export default carList;
