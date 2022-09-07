import { Schema, model } from "mongoose";
import { AutoIncrementID } from "@typegoose/auto-increment";
// https://mongoosejs.com/docs/typescript.html
// https://mongoosejs.com/docs/validation.html

// ref: "onside" -> 1 oldali modell neve, nem kell átírni!

const nsideSchema = new Schema(
    {
        _id: Number,
        kategoria: {
            ref: "oneside",
            type: Number,
            required: true,
        },
        leiras: {
            type: String,
            required: true,
            unique: true,
        },
        hirdetesDatuma: {
            type: String,
            required: true,
        },
        tehermentes: {
            type: Boolean,
            required: true,
        },
        ar: {
            type: Number,
            required: true,
        },
        kepUrl: {
            type: String,
        },
    },
    // Virtuals are not included in string version of the model instances by default.
    // To include them, set the virtuals option to true on schema’s toObject and toJSON options.
    { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

// Mongoose also supports populating virtuals.
// The ref option, which tells Mongoose which model to populate documents from.
// The localField and foreignField options. Mongoose will populate documents from the model in ref whose foreignField matches this document's localField.
// justOne says that it'll populate a single connected object, set it to false if you need to get an array
// You can give the "populateField" any name you want:
// nsideSchema.virtual("populateField", {
//     ref: "oneside",
//     localField: "kategoria",
//     foreignField: "_id",
//     justOne: true,
// });
// Use virtual for populate in controller:
// const data = await this.nsideM.find().populate("populateField", "-_id field1 field2 -field3 ...");

nsideSchema.plugin(AutoIncrementID, {});

const nsideModel = model("nside", nsideSchema, "ingatlanok");

export default nsideModel;
