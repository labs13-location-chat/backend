exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("location")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("location").insert([
        { longitude: -74.005974, latitude: 40.712776, chatroom_id: 1 },
        { longitude: -72.005974, latitude: 39.712776, chatroom_id: 2 },
        { longitude: -75.005974, latitude: 41.712776, chatroom_id: 3 },
        { longitude: -73.005974, latitude: 38.712776, chatroom_id: 4 },
        { longitude: -72.005974, latitude: 42.712776, chatroom_id: 5 }
      ]);
    });
};
