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
          total_users: 2,
          description: ""
        },
        {
          name: "Stadium",
          radius: 30,
          user_id: 2,
          permanent: true,
          total_users: 3,
          description: ""
        },
        {
          name: "Theatre",
          radius: 20,
          user_id: 2,
          permanent: true,
          total_users: 4,
          description: ""
        },
        {
          name: "Animal Show",
          radius: 21,
          user_id: 1,
          permanent: false,
          total_users: 4,
          description: ""
        },
        {
          name: "Concert",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },
        {
          name: "Showing",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },
        {
          name: "Book Event",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },
        {
          name: "Danger Room",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },
        {
          name: "Watch Party",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },
        {
          name: "Neighboorhood Watch",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },
        {
          name: "Game Night",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },
        {
          name: "Block Party",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },
        {
          name: "Chill Room",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: ""
        },

      ]);
    });
};
