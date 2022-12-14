const {Schema, model  } = require('mongoose');

// Schema to create User model
const userSchema = new Schema({
    username:{
      type: String,
      unique: 'true',
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      ]
    },
  
  });


userSchema.virtual("friend").get(function () {
  return this.friends.length;
})

const User = model('User', userSchema);

module.exports = User;
