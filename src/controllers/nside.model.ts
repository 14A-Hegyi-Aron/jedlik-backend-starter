import { Schema, model } from "mongoose";
// https://mongoosejs.com/docs/typescript.html
// https://mongoosejs.com/docs/validation.html
// https://transform.tools/json-to-mongoose

const nsideSchema = new Schema(
    {
        _id: Number,
        kategoria_id: {
            type: Number,
            required: true,
        },
        cim: {
            type: String,
            required: true,
            unique: true,
            maxLength: 100,
        },
        evjarat: {
            type: String,
            maxLength: 10,
        },
        km_allas: Number,
        szin: String,
        uzemanyag: {
            type: String,
            enum: ["Benzin", "Dízel", "Elektromos", "Hibrid", "LPG", "CNG", "Hidrogén"],
            message: "{VALUE} is not supported",
        },
        hengerurtartalom: Number,
        teljesitmeny: Number,
        serulesmentes: Boolean,
        leiras: String,
        hirdetes_datum: String,
        vetelar: {
            type: Number,
            required: true,
        },
        kepek: [String],
    },
    // Mongoose Virtuals: https://mongoosejs.com/docs/tutorials/virtuals.html
    // Virtuals are not included in string version of the model instances by default.
    // To include them, set the virtuals option to true on schema’s toObject and toJSON options.
    { versionKey: false, id: false, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

// Mongoose also supports populating virtuals.
// Help: https://mongoosejs.com/docs/tutorials/virtuals.html#populate
// You can give the "virtualPop" any name you want:
nsideSchema.virtual("virtualPop", {
    ref: "oneside",
    localField: "kategoria_id",
    foreignField: "_id", //ref_Field
    justOne: true,
});

// Use virtual for populate in nSide controller:
// const data = await this.nsideM.find().populate("populateFieldNside", "-_id field1 field2 -field3 ...");

const nsideModel = model("nside", nsideSchema, "hirdetesek");

export default nsideModel;
