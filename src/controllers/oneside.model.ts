// https://mongoosejs.com/docs/validation.html#built-in-validators

import { Schema, model } from "mongoose";
import { AutoIncrementID } from "@typegoose/auto-increment";

const onesideSchema = new Schema(
    {
        _id: Number,
        nev: {
            type: String,
            required: true,
            unique: true,
        },
    },
    // Virtuals are not included in string version of the model instances by default.
    // To include them, set the virtuals option to true on schema’s toObject and toJSON options.
    { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

onesideSchema.plugin(AutoIncrementID, {});

const onesideModel = model("oneside", onesideSchema, "kategoriak");

export default onesideModel;
