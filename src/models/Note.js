import { Schema, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {
    // cuando un nuevo dato se guarda, se cre la propiedad para saber fecha de creación y de actualización.
    timestamps: true
}
)

export default model('Note', schema)