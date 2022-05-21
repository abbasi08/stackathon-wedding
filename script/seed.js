"use strict";

const {
  db,
  models: { User }
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  // const users = await Promise.all([User.create({ username: "hannah", password: "123" }), User.create({ username: "leslie", password: "123" })]);

  // console.log(`seeded ${users.length} users`);
  // console.log(`seeded successfully`);
  // return {
  //   users: {
  //     hannah: users[0],
  //     leslie: users[1]
  //   }
  // };
  await Promise.all(
    Array(5)
      .fill()
      .map((user) => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        return User.create({
          username: `${firstName.toLowerCase()}_${lastName.toLowerCase()}`,
          password: "123",
          firstName,
          lastName,
          email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`
        });
      })
  );

  const hannah = await User.create({
    username: "hannah",
    password: "123",
    firstName: "Hannah",
    lastName: "A",
    email: "hannah_abbasi@yahoo.com"
  });
  const leslie = await User.create({
    username: "leslie",
    password: "123",
    firstName: "Leslie",
    lastName: "A",
    email: "dummy_email@gmail.com"
  });
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
