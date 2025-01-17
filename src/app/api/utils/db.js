
import mysql from 'mysql2';

let pool;

if (!pool) {
  pool = mysql.createPool({
    host: '141.193.213.11',         // Replace with your database host
    user: 'devco1',              // Replace with your database username
    password: 'IXsLnazL9HUXzb08En0q',      // Replace with your database password
    database: 'wp_devco1', // Replace with your database name
    waitForConnections: true,  // Allows the pool to wait for a connection if all are in use
    connectionLimit: 10,       // Max number of connections in the pool
    queueLimit: 0              // No limit on the queue size
  });
}

console.log(pool);

export default pool;
