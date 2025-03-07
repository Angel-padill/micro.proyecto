import { Schema,model} from "mongoose";
import {IQuestion} from "../GlobalTypes"



const QuestionSchema = new Schema<IQuestion>({
    title: {
        type: String,
        required:true
    },
    typo: {
        type: String,
        enum: ["radio", "checkbox", "select", "text"],
        required: true
    
    },
    isMandatory:{
        type:Boolean,
        required:true
    },

    questionaireId:{
        type: Schema.Types.ObjectId,
        ref:"questionaires",
        required:true
    }
       
});

export const QuestionModel = model("questions", QuestionSchema);