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
        { longitude: -72.005974, latitude: 42.712776, chatroom_id: 5 },
        { longitude: -122.509202, latitude: 37.766220, chatroom_id: 5 },
        { longitude: -122.434444, latitude: 37.783724, chatroom_id: 6 },
        { longitude: -122.424402, latitude: 37.773819, chatroom_id: 7 },
        { longitude: -122.47413, latitude: 37.808308, chatroom_id: 8 },
        { longitude: -118.371279, latitude: 33.934531, chatroom_id: 9 },
        { longitude: -118.342268, latitude: 33.819090, chatroom_id: 10 },
        { longitude: -118.186743, latitude: 33.770587, chatroom_id: 11 },
        { longitude: -117.925817, latitude: 33.831069, chatroom_id: 12 },
        { longitude: -117.854406, latitude: 33.7406160, chatroom_id: 13 },
      ]);
    });
};
