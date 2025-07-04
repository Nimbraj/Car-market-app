const CarMaker = [
  {
    id: 1,
    name: "AUDI",
  },
  {
    id: 2,
    name: "BMW",
  },
  {
    id: 3,
    name: "FORD",
  },
  {
    id: 4,
    name: "TATA",
  },
  {
    id: 5,
    name: "MAHINDRA",
  },
];

const pricing = [
  {
    id: 1,
    amount: 200000,
  },
  {
    id: 2,
    amount: 800000,
  },
  {
    id: 3,
    amount: 1000000,
  },
  {
    id: 4,
    amount: 1500000,
  },
  {
    id: 5,
    amount: 2000000,
  },
];

const Category = [
  {
    id: 1,
    name: "SUV",
    icon: <img src="/sedan.png" alt="SUV Icon" />,
  },
  {
    id: 2,
    name: "Sedan",
    icon: <img src="sedan.png"/>,
  },
  {
    id: 3,
    name: "Hatchback",
    icon: <img src="/Hatchback.png" alt="Hatchback Icon" />,
  },
  {
    id: 4,
    name: "Electric",
    icon: <img src="/Electric.png" alt="Electric Icon" />,
  },
  {
    id: 5,
    name: "Convertible",
    icon: <img src="/Convertible.png" alt="Convertible Icon" />,
  },
  {
    id: 6,
    name: "Hybrid",
    icon: <img src="/Hybrid.png" alt="Hybrid Icon" />,
  },
  {
    id: 7,
    name: "Coupe",
    icon: <img src="/Coupe.png" alt="Coupe Icon" />,
  },
  {
    id: 8,
    name: "Van",
    icon: <img src="/Van.png" alt="Van Icon" />,
  },
  {
    id: 9,
    name: "Truck",
    icon: <img src="/Truck.png" alt="Truck Icon" />,
  },
];

// Exporting CarMaker and Category as part of default export
export default { CarMaker, Category };

// Exporting pricing as a named export
export { pricing };
