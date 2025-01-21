

// Add the other data to the database 
export async function POST(request) {

    const { email, location, address, city } = req.body;

    pool.query(
        'INSERT INTO authors (email, location, address, city, profile) VALUES (?, ?, ?, ?, ?)',
        [email, location, address, city, profile],
        (error, results) => {
            if (error) {
                console.error('Database error:', error);
                return res.status(500).json({ error: 'Error inserting data', details: error });
            }
            return res.status(200).json({ message: 'Author added successfully', authorId: results.insertId });
        }
    );

}