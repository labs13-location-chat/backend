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
          description: "Let's all talk about food!"
        },
        {
          name: "Stadium",
          radius: 30,
          user_id: 2,
          permanent: true,
          total_users: 3,
          description: "Come in if you're going to the game!"
        },
        {
          name: "Theatre",
          radius: 20,
          user_id: 2,
          permanent: true,
          total_users: 4,
          description: "Let's watch the latest movies released"
        },
        {
          name: "Animal Show",
          radius: 21,
          user_id: 1,
          permanent: false,
          total_users: 4,
          description: "Group for anyone goign to the Zoo today"
        },
        {
          name: "Concert",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "That band performing in town tonight"
        },
        {
          name: "Showing",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "Talk about the latest TV program that aired last night"
        },
        {
          name: "Book Event",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "Let's discuss that new bestselling novel by that author"
        },
        {
          name: "Danger Room",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "LF group to solve this puzzle!"
        },
        {
          name: "Watch Party",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "Anyone want to watch the new season of that show?"
        },
        {
          name: "Neighboorhood Watch",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "Let's be on the lookout for our community"
        },
        {
          name: "Game Night",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "Role playing and D&D"
        },
        {
          name: "Block Party",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "We're throwing a MASSIVE summer party next week"
        },
        {
          name: "Chill Room",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "Let's just talk about everyday things and relax"
        },

      ]);
    });
};
