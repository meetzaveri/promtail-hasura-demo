db = db.getSiblingDB("demo");

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: {
          bsonType: "string",
        },
        age: {
          bsonType: "int",
          minimum: 18,
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+$",
        },
        user_meta: {
          bsonType: "object",
          properties: {
            user_role: {
              bsonType: "string",
            },
            email_verified: {
              bsonType: "bool",
            },
          },
        },
      },
    },
  },
});

db.users.insertMany([
  {
    name: "John",
    age: 44,
    email: "john@example.com",
    user_meta: {
      user_role: "user",
      email_verified: true,
    },
  },
  {
    name: "Jane",
    age: 24,
    email: "jane@example.com",
    user_meta: {
      user_role: "user",
      email_verified: true,
    },
  },
  {
    name: "Emma",
    age: 36,
    email: "emma@example.com",
    user_meta: {
      user_role: "manager",
      email_verified: true,
    },
  },
  {
    name: "Liam",
    age: 64,
    email: "liam@example.com",
    user_meta: {
      user_role: "manager",
      email_verified: true,
    },
  },
]);
