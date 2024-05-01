const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Require bcrypt for hashing passwords

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Renamed from passwordHash to password
  registrationDate: { type: Date, default: Date.now },
  lastLogin: Date,
  // Add other user-related fields as needed
});

// Pre-save hook to hash password before saving a new user
userSchema.pre('save', function(next) {
  const user = this; 

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // Generate a salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // Hash the password using the new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      // Override the plaintext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

// Method to compare passwords
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
