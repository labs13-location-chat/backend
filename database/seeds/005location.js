exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("location")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("location").insert([
        { longitude: -118.243683, latitude: 34.052235, chatroom_id: 1 },
        { longitude: -71.807301, latitude: 41.371804, chatroom_id: 2 },
        { longitude: -84.386330, latitude: 33.753746, chatroom_id: 3 },
        { longitude: -122.431297, latitude: 37.773972, chatroom_id: 4 },
        { longitude: -83.045753, latitude: 42.331429, chatroom_id: 5 },
        { longitude: -79.411079, latitude: 46.761539, chatroom_id: 6 }
        // { longitude: -122.424402, latitude: 37.773819, chatroom_id: 7 },
        // { longitude: -122.47413, latitude: 37.808308, chatroom_id: 8 },
        // { longitude: -118.371279, latitude: 33.934531, chatroom_id: 9 },
        // { longitude: -118.342268, latitude: 33.819090, chatroom_id: 10 },
        // { longitude: -118.186743, latitude: 33.770587, chatroom_id: 11 },
        // { longitude: -117.925817, latitude: 33.831069, chatroom_id: 12 },
        // { longitude: -117.854406, latitude: 33.7406160, chatroom_id: 13 },
      ]);
    });
};
