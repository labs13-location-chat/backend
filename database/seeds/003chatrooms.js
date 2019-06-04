exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("chatrooms")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("chatrooms").insert([
        {
          name: "Food Ideas",
          radius: 4,
          user_id: 1,
          permanent: false,
          total_users: 2
        },
        {
          name: "Stadium",
          radius: 30,
          user_id: 2,
          permanent: true,
          total_users: 3
        },
        {
          name: "Theatre",
          radius: 20,
          user_id: 2,
          permanent: true,
          total_users: 4
        },
        {
          name: "Animal Show",
          radius: 21,
          user_id: 1,
          permanent: false,
          total_users: 4
        },
        {
          name: "Concert",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3
        }
      ]);
    });
};
