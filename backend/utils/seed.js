import mongoose from 'mongoose';
import {User} from '../models/userSchema.js';

const mongoURI = 'mongodb+srv://gayathri22bce9940:GKI6jzyJHvzbkiAZ@cluster0.dzk90io.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function seedAdminUser() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const adminUser = await User.findOne({ role: 'Admin' });

    if (!adminUser) {
      const newUser = new User({
        firstName: 'Gayathri',
        lastName: 'Deepala',
        email: 'admin@admin.com',
        password: 'admin123',
        role: 'Admin',
      });

      await newUser.save();
      console.log('Admin user created successfully!');
    } else {
      console.log('Admin user already exists.');
    }

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding admin user:', error);
  }
}

seedAdminUser();
