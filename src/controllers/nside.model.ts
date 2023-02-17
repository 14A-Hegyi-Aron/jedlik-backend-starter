import { Schema, model } from "mongoose";
// https://mongoosejs.com/docs/typescript.html
// https://mongoosejs.com/docs/validation.html

const nsideSchema = new Schema(
    {
        _id: Number, // default type of PK (with _id identifier): Schema.Types.ObjectId
        kategoria: {
            ref: "oneside", // "onside" -> 1 oldali modell neve, nem kell átírni!
            type: Number,
            required: true,
        },
        leiras: {
            type: String,
            required: true,
        },
        hirdetesDatuma: {
            type: Date,
            default: new Date(),
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
    // Mongoose Virtuals: https://mongoosejs.com/docs/tutorials/virtuals.html
    // Virtuals are not included in string version of the model instances by default.
    // To include them, set the virtuals option to true on schema’s toObject and toJSON options.
    // { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
    { versionKey: false },
);

// Mongoose also supports populating virtuals.
// Help: https://mongoosejs.com/docs/tutorials/virtuals.html#populate
// You can give the "populateField" any name you want:
// nsideSchema.virtual("populateField", {
//     ref: "oneside",
//     localField: "kategoria",
//     foreignField: "_id",
//     justOne: true,
// });
// Use virtual for populate in controller:
// const data = await this.nsideM.find().populate("populateField", "-_id field1 field2 -field3 ...");

const nsideModel = model("nside", nsideSchema, "ingatlanok");

export default nsideModel;
