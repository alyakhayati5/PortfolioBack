const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormationSchema = new Schema({
    titre: {
        type: String,
        required: [true, "Name field is required"],
    },
    ecole: {
        type: String,
        required: [true, "Name field is required"],
    },
    lieu: {
        type: String,
    },
    dateDebut: {
        type: Date,
        //required: [true, "Name field is required"],
    },
    dateFin: {
        type: Date,
        // required: [true, "Name field is required"],
    },
    available: {
        type: Boolean,
        default: false,
    },
});
const Formation = mongoose.model("formation", FormationSchema);
module.exports = Formation;