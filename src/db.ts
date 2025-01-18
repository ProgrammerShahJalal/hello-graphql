const products = [
  {
    id: "2289dca-d882-43e5-9e25-d1dfeb93fd12",
    name: "Basketball",
    image: "basketball-image.jpg",
    description: "An official size basketball for indoor and outdoor play.",
    price: 29.99,
    quantity: 30,
    onStock: true,
    categoryId: "4f716e15-96c2-445d-8bf8-79f58e3d061b",
  },
  {
    id: "2289dca-d882-63e5-9e25-d1dfeb93fd12",
    name: "FootBall",
    image: "football-image.jpg",
    description: "An official size basketball for indoor and outdoor play.",
    price: 69.99,
    quantity: 70,
    onStock: true,
    categoryId: "4f716e15-96c2-445d-8bf8-79f58e3d061b",
  },
  {
    id: "jkl345-mno678-9012op",
    name: "Running Shoes",
    image: "running-shoes.jpg",
    description: "Comfortable and durable running shoes.",
    price: 74.99,
    quantity: 40,
    onStock: true,
    categoryId: "4f716e15-96c2-445d-tbf8-79f58e3d061b",
  },
  {
    id: "pqr567-stu890-3456vw",
    name: "Cycling Helmet",
    image: "cycling-helmet.jpg",
    description: "Lightweight helmet with adjustable straps for cycling.",
    price: 39.99,
    quantity: 35,
    onStock: true,
    categoryId: "4f716e15-96c2-445d-8bf8-79f58e3d061h",
  },
  {
    id: "xyz890-abc123-5678de",
    name: "Swimming Goggles",
    image: "swimming-goggles.jpg",
    description: "Anti-fog goggles for clear vision underwater.",
    price: 14.99,
    quantity: 60,
    onStock: true,
    categoryId: "6f716e15-96c2-445d-8bf8-79f58e3d061b",
  },
  {
    id: "uvw345-ghi678-9012xy",
    name: "Table Tennis Set",
    image: "table-tennis-set.jpg",
    description: "Includes two paddles and three balls for quick matches.",
    price: 29.99,
    quantity: 10,
    onStock: true,
    categoryId: "4f716e15-96c2-445d-8b5g-79f58e3d061b",
  },
  {
    id: "mno567-pqr890-2345ab",
    name: "Fitness Tracker",
    image: "fitness-tracker.jpg",
    description: "Monitor your daily activity and fitness progress.",
    price: 49.99,
    quantity: 28,
    onStock: true,
    categoryId: "4f7e6e15-96c2-445d-8bf8-79f58e3d061b",
  },
];

const categories = [
  {
    id: "4f7e6e15-96c2-445d-8bf8-79f58e3d061b",
    name: "Fitness",
  },
  {
    id: "4f716e15-96c2-445d-8b5g-79f58e3d061b",
    name: "Tennis",
  },
  {
    id: "6f716e15-96c2-445d-8bf8-79f58e3d061b",
    name: "Swimming",
  },
  {
    id: "4f716e15-96c2-445d-8bf8-79f58e3d061h",
    name: "Helmet",
  },
  {
    id: "4f716e15-96c2-445d-tbf8-79f58e3d061b",
    name: "Shoes",
  },
  {
    id: "4f716e15-96c2-445d-8bf8-79f58e3d061b",
    name: "ball",
  },
];

const reviews = [
  {
    id: "r123",
    productId: "2289dca-d882-43e5-9e25-d1dfeb93fd12",
    userName: "John Doe",
    rating: 5,
    comment: "Great quality and very durable!",
  },
  {
    id: "r456",
    productId: "2289dca-d882-43e5-9e25-d1dfeb93fd12",
    userName: "Jane Smith",
    rating: 4,
    comment: "Good basketball, but slightly overpriced.",
  },
  {
    id: "r789",
    productId: "2289dca-d882-63e5-9e25-d1dfeb93fd12",
    userName: "Alice Johnson",
    rating: 5,
    comment: "Perfect for playing with friends!",
  },
  {
    id: "r012",
    productId: "pqr567-stu890-3456vw",
    userName: "Michael Brown",
    rating: 4,
    comment: "Fits well and feels secure.",
  },
  {
    id: "r345",
    productId: "uvw345-ghi678-9012xy",
    userName: "Emma Davis",
    rating: 5,
    comment: "High-quality set, perfect for casual games!",
  },
  {
    id: "r678",
    productId: "mno567-pqr890-2345ab",
    userName: "Chris Wilson",
    rating: 3,
    comment: "Basic functionality, could use more features.",
  },
];

export const db = {
  products,
  categories,
  reviews,
};
