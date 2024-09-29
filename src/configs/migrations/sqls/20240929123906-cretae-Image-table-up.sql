/* Replace with your SQL commands */
CREATE TABLE Image (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255),
    comment VARCHAR(255) DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);
