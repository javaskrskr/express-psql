CREATE TABLE schools( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100), 
    address VARCHAR(100),
    created_at INTEGER DEFAULT EXTRACT(EPOCH FROM NOW())
);

INSERT INTO schools (name, address) VALUES ('John', 'Tokyo');