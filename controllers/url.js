// Import nanoid to generate unique short IDs
const { nanoid } = require("nanoid");

// Import the URL model
const URL = require('../models/url');

// Controller function to generate a new shortened URL
async function handleGenerateNewShortURL(req, res) {
    
    const body = req.body;

    // Validate that a URL was provided in the request body
    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }

    // Generate a unique short ID of 8 characters
    const shortID = nanoid(8);

    // Save the new short URL entry into the database
    await URL.create({
        shortId: shortID,            // Short unique identifier
        redirectURL: body.url,       // Original long URL
        viewHistroy: []              // Initialize empty view history
    });

    // Respond with the generated short ID
    return res.json({ id: shortID });
}

// Export the function for use in routes
module.exports = {
    handleGenerateNewShortURL,
};
