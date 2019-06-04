exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("messages").insert([
        {
          chatroom_id: 1,
          content: "Hey, What's up?",
          user_id: 1
        },
        { chatroom_id: 1, content: "I am going to school today.", user_id: 1 },
        { chatroom_id: 1, content: "How have you been?", user_id: 1 },
        { chatroom_id: 2, content: "Where have you been?", user_id: 2 },
        {
          chatroom_id: 2,
          content: "Where is the best place to eat?",
          user_id: 2
        },
        { chatroom_id: 3, content: "I need to go on a run!", user_id: 3 },
        { chatroom_id: 3, content: "How have you been?", user_id: 3 },
        { chatroom_id: 1, content: "You should go to the movies!", user_id: 1 },
        { chatroom_id: 2, content: "Come to the park!", user_id: 2 }
      ]);
    });
};
