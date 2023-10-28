import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: true,
        lowercase: true,
        trim: true, // removes whitespace
    },
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        match: [/^[a-zA-Z0-9]+$/, 'Please enter a valid username'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    image: {
        type: String,
    }
});

const User = models.User || model('User', userSchema);

export default User;