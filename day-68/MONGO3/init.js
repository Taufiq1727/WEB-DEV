const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => console.log("Connected to MongoDB"))

  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/watsapp");
}

let chats = [
  {
    from: "Alice",
    to: "Bob",
    message: "Hello Bob! How are you?",
    created_at: new Date(),
  },
  {
    from: "Bob",
    to: "Charlie",
    message: "Hey Charlie, are we meeting today?",
    created_at: new Date(),
  },
  {
    from: "Charlie",
    to: "David",
    message: "Don't forget to submit the assignment.",
    created_at: new Date(),
  },
  {
    from: "David",
    to: "Emma",
    message: "Can you send me the project files?",
    created_at: new Date(),
  },
  {
    from: "Emma",
    to: "Frank",
    message: "The meeting has been postponed to tomorrow.",
    created_at: new Date(),
  },
  {
    from: "Frank",
    to: "Grace",
    message: "Happy Birthday! Have a great day!",
    created_at: new Date(),
  },
  {
    from: "Grace",
    to: "Henry",
    message: "Let's catch up over coffee this weekend.",
    created_at: new Date(),
  },
  {
    from: "Henry",
    to: "Isabella",
    message: "I have shared the notes with you.",
    created_at: new Date(),
  },
  {
    from: "Isabella",
    to: "Jack",
    message: "Can you help me with the MongoDB query?",
    created_at: new Date(),
  },
  {
    from: "Jack",
    to: "Alice",
    message: "Sure! I'll explain it after class.",
    created_at: new Date(),
  },
];

Chat.insertMany(chats);
      