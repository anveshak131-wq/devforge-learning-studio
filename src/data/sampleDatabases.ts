export interface SampleDbPreset {
  id: string;
  name: string;
  description: string;
  tableCount: number;
  sampleQueries: { title: string; query: string }[];
  sql: string;
}

export const SAMPLE_DATABASES: Record<string, SampleDbPreset> = {
  ecommerce: {
    id: 'ecommerce',
    name: 'E-Commerce Store & Analytics',
    description: 'Real-world customer orders, products, reviews, and transaction metrics.',
    tableCount: 4,
    sampleQueries: [
      {
        title: 'Top 5 Highest Spending Customers',
        query: `SELECT u.name, u.country, SUM(o.total_amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id
ORDER BY total_spent DESC
LIMIT 5;`
      },
      {
        title: 'Revenue by Product Category',
        query: `SELECT p.category, 
       COUNT(DISTINCT oi.order_id) AS total_orders, 
       SUM(oi.quantity * oi.unit_price) AS category_revenue
FROM products p
JOIN order_items oi ON p.id = oi.product_id
GROUP BY p.category
ORDER BY category_revenue DESC;`
      },
      {
        title: 'Recent Completed Orders with Item Count',
        query: `SELECT o.id AS order_id, u.name AS customer, o.status, o.total_amount, COUNT(oi.id) AS items_count
FROM orders o
JOIN users u ON o.user_id = u.id
JOIN order_items oi ON o.id = oi.order_id
WHERE o.status = 'delivered'
GROUP BY o.id
ORDER BY o.order_date DESC;`
      }
    ],
    sql: `
-- E-Commerce Schema & Seed Data
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  country TEXT NOT NULL,
  created_at DATE NOT NULL
);

CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price REAL NOT NULL,
  stock INTEGER NOT NULL,
  rating REAL DEFAULT 4.5
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  order_date DATE NOT NULL,
  status TEXT NOT NULL, -- 'pending', 'shipped', 'delivered', 'cancelled'
  total_amount REAL NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price REAL NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Seed Users
INSERT INTO users (id, name, email, country, created_at) VALUES
(1, 'Alice Johnson', 'alice@example.com', 'United States', '2024-01-15'),
(2, 'Bob Martinez', 'bob@example.com', 'Canada', '2024-02-01'),
(3, 'Charlie Zhang', 'charlie@example.com', 'United Kingdom', '2024-02-18'),
(4, 'Diana Patel', 'diana@example.com', 'India', '2024-03-05'),
(5, 'Eduardo Silva', 'eduardo@example.com', 'Brazil', '2024-03-22'),
(6, 'Fiona Schmidt', 'fiona@example.com', 'Germany', '2024-04-10'),
(7, 'George Miller', 'george@example.com', 'Australia', '2024-04-14'),
(8, 'Hana Tanaka', 'hana@example.com', 'Japan', '2024-05-01');

-- Seed Products
INSERT INTO products (id, name, category, price, stock, rating) VALUES
(101, 'Mechanical Keyboard Pro', 'Electronics', 129.99, 45, 4.8),
(102, 'Wireless Noise-Canceling Headphones', 'Electronics', 249.50, 30, 4.7),
(103, 'Ergonomic Standing Desk Mat', 'Office', 49.99, 120, 4.4),
(104, '4K Ultra-Wide Monitor 34"', 'Electronics', 499.00, 15, 4.9),
(105, 'Organic Roasted Coffee Beans 1kg', 'Groceries', 24.00, 200, 4.6),
(106, 'Stainless Steel Water Bottle 1L', 'Fitness', 28.50, 85, 4.5),
(107, 'Smart LED Desk Lamp', 'Office', 59.90, 60, 4.3),
(108, 'Leather Notebook & Gel Pen Set', 'Office', 34.00, 95, 4.7);

-- Seed Orders
INSERT INTO orders (id, user_id, order_date, status, total_amount) VALUES
(1001, 1, '2024-05-10', 'delivered', 379.49),
(1002, 2, '2024-05-12', 'delivered', 129.99),
(1003, 3, '2024-05-15', 'delivered', 548.99),
(1004, 1, '2024-05-20', 'delivered', 52.50),
(1005, 4, '2024-05-22', 'shipped', 249.50),
(1006, 5, '2024-05-25', 'delivered', 83.90),
(1007, 6, '2024-05-28', 'pending', 499.00),
(1008, 7, '2024-06-01', 'delivered', 179.98),
(1009, 8, '2024-06-03', 'shipped', 129.99),
(1010, 2, '2024-06-05', 'delivered', 59.90);

-- Seed Order Items
INSERT INTO order_items (id, order_id, product_id, quantity, unit_price) VALUES
(1, 1001, 101, 1, 129.99),
(2, 1001, 102, 1, 249.50),
(3, 1002, 101, 1, 129.99),
(4, 1003, 104, 1, 499.00),
(5, 1003, 103, 1, 49.99),
(6, 1004, 105, 1, 24.00),
(7, 1004, 106, 1, 28.50),
(8, 1005, 102, 1, 249.50),
(9, 1006, 105, 1, 24.00),
(10, 1006, 107, 1, 59.90),
(11, 1007, 104, 1, 499.00),
(12, 1008, 101, 1, 129.99),
(13, 1008, 103, 1, 49.99),
(14, 1009, 101, 1, 129.99),
(15, 1010, 107, 1, 59.90);
`
  },

  music: {
    id: 'music',
    name: 'Music Streaming Platform',
    description: 'Artists, albums, tracks, play counts, and genres.',
    tableCount: 3,
    sampleQueries: [
      {
        title: 'Top 5 Most Played Tracks',
        query: `SELECT t.title, a.name AS artist, al.title AS album, t.plays
FROM tracks t
JOIN albums al ON t.album_id = al.id
JOIN artists a ON al.artist_id = a.id
ORDER BY t.plays DESC
LIMIT 5;`
      },
      {
        title: 'Total Plays per Genre',
        query: `SELECT a.genre, COUNT(t.id) AS track_count, SUM(t.plays) AS total_genre_plays
FROM artists a
JOIN albums al ON a.id = al.artist_id
JOIN tracks t ON al.id = t.album_id
GROUP BY a.genre
ORDER BY total_genre_plays DESC;`
      }
    ],
    sql: `
DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  genre TEXT NOT NULL,
  country TEXT NOT NULL
);

CREATE TABLE albums (
  id INTEGER PRIMARY KEY,
  artist_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  release_year INTEGER NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artists(id)
);

CREATE TABLE tracks (
  id INTEGER PRIMARY KEY,
  album_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  duration_sec INTEGER NOT NULL,
  plays INTEGER DEFAULT 0,
  FOREIGN KEY (album_id) REFERENCES albums(id)
);

INSERT INTO artists (id, name, genre, country) VALUES
(1, 'Daft Punk', 'Electronic', 'France'),
(2, 'Miles Davis', 'Jazz', 'United States'),
(3, 'Radiohead', 'Alternative Rock', 'United Kingdom'),
(4, 'Billie Eilish', 'Pop', 'United States');

INSERT INTO albums (id, artist_id, title, release_year) VALUES
(1, 1, 'Random Access Memories', 2013),
(2, 1, 'Discovery', 2001),
(3, 2, 'Kind of Blue', 1959),
(4, 3, 'OK Computer', 1997),
(5, 4, 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 2019);

INSERT INTO tracks (id, album_id, title, duration_sec, plays) VALUES
(101, 1, 'Get Lucky', 248, 1420500),
(102, 1, 'Instant Crush', 337, 890000),
(103, 2, 'One More Time', 320, 2150000),
(104, 2, 'Harder, Better, Faster, Stronger', 224, 1980000),
(105, 3, 'So What', 562, 750000),
(106, 3, 'Blue in Green', 337, 610000),
(107, 4, 'Paranoid Android', 387, 1250000),
(108, 4, 'Karma Police', 261, 1680000),
(109, 5, 'bad guy', 194, 2890000);
`
  }
};
