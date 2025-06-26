-- Create the database if it doesn't exist (this should now run successfully)
CREATE DATABASE IF NOT EXISTS demo_site;

-- Use the newly created database (important: select this database!)
USE demo_site;

-- Drop the 'items' table if it exists from previous guide to avoid conflicts
DROP TABLE IF EXISTS items;

-- Create the 'products' table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL, -- Price with 2 decimal places
    imageUrl VARCHAR(255),       -- URL for the product image
    stock INT DEFAULT 0,         -- Available stock
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample products
INSERT INTO products (name, description, price, imageUrl, stock) VALUES
('Stylish Watch, Premium Quality', 'A classic vintage watch, perfect for you.', 49.99, '/images/watch.jpg', 10),
('Comfortable Running Shoes', 'Handcrafted running shoes good for marathons.', 89.99, '/images/shoes.jpg', 50),
('Simple Black Shirt', 'Simple yet elegant, Plain but Comfy!', 39.99, '/images/shirt.jpg', 25),
('Classic Black Jeans', 'Stay cool and classy while wearing this classic black jeans.', 49.99, '/images/jeans.jpg', 15);

-- Use your existing database
USE demo_site;

-- Create the 'users' table for account management
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE, -- Username must be unique
    email VARCHAR(100) NOT NULL UNIQUE,   -- Email must be unique
    password VARCHAR(255) NOT NULL,       -- To store hashed passwords
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert a dummy user for testing (DELETE THIS FOR PRODUCTION)
-- IMPORTANT: In a real application, passwords should be hashed BEFORE inserting.
-- For demonstration, we'll use a placeholder.
INSERT INTO users (username, email, password) VALUES
('sample user', 'user@example.com', 'dummy_hashed_password_placeholder');
