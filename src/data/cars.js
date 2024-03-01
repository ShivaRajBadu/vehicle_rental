export const carsCollection = [
  {
    id: 1,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/car_1.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: true,
  },
  {
    id: 2,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/car_1.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
  {
    id: 3,
    carName: "Koenigsegg",
    carType: "sport",
    carImage: "/images/car_1.png",
    carDetail: {
      fuelCapacity: "90L",
      personCapacity: "4",
      isAutomatic: false,
    },
    rentPrice: 200,
    crossPrice: 210,
    isFavorite: false,
  },
];

export const carById = (id) => carsCollection.find((car) => car.id === id);
