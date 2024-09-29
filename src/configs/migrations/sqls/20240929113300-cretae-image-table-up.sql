/* Replace with your SQL commands */
CREATE TABLE imagesMetaData (
    id SERIAL PRIMARY KEY,
    url VARCHAR(255),
    comment TEXT,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

