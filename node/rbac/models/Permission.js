const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
    {
        key: { type: String, required: true, unique: true }, // USER:PROFILE:CREATE
        description: String,
        isActive: { type: Boolean, default: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Permission", permissionSchema);
