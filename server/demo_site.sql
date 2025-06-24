-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS demo_site;

-- Use the newly created database
USE demo_site;

-- Create a sample table
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample data
INSERT INTO items (name, description) VALUES
('Item One', 'This is the first sample item.'),
('Item Two', 'This is the second sample item.'),
('Item Three', 'A third item for testing.');