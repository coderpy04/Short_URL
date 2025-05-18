// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Define a schema for storing shortened URLs
const urlSchema = new mongoose.Schema({

    // Unique identifier for the shortened URL (e.g., "abc123")
    shortId: {
        type: String,       // The shortened string ID
        required: true,     // Must be provided
        unique: true        // Ensures no duplicate shortIds exist
    },

    // The original URL that the shortId redirects to
    redirectURL: {
        type: String,       // The actual long URL
        required: true      // Must be provided
    },

    // Array to track the view history of the short URL
    viewHistroy: [{
        timestamp: {
            type: Number    // Stores the time of access (usually Date.now())
        }
    }]

}, 
// Schema options: automatically adds createdAt and updatedAt timestamps
{ timestamps: true });

// Create the model from the schema. 'url' will be the MongoDB collection name (lowercased & pluralized)
const URL = mongoose.model('url', urlSchema);

// Export the model so it can be used in other parts of the application
module.exports = URL;
