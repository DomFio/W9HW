const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        twatPost: {
            type: String,
            required: true,
        }
    },
    {timestamps: true}
)

module.exports = mongoose.model("post", postSchema)