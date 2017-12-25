BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  time_added TIMESTAMP DEFAULT now()
);

INSERT INTO users (username, email, password) VALUES
  ('test_user', 'test@test.com', 'test');


COMMIT;
