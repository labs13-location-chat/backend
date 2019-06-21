exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("location")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("location").insert([
        { name: 'Los Angeles, CA', longitude: -118.243683, latitude: 34.052235, chatroom_id: 1 },
        { name: 'Westerly, RI', longitude: -71.807301, latitude: 41.371804, chatroom_id: 2 },
        { name: 'Atlanta, GA', longitude: -84.386330, latitude: 33.753746, chatroom_id: 3 },
        { name: 'San Francisco, CA', longitude: -122.431297, latitude: 37.773972, chatroom_id: 4 },
        { name: 'Detroit, MI', longitude: -83.045753, latitude: 42.331429, chatroom_id: 5 },
        { name: 'Toronto, ON', longitude: -79.411079, latitude: 46.761539, chatroom_id: 6 },
        { name: 'Denver, CO', longitude: -104.991531, latitude: 39.742043, chatroom_id: 7 },
        { name: 'Austin, TX', longitude: -97.7430608, latitude: 30.267153, chatroom_id: 8 },
        { name: 'Dallas, TX', longitude: -97.040443, latitude: 32.897480, chatroom_id: 9 },
        { name: 'Fenway Park', longitude: -71.095764, latitude: 42.346268, chatroom_id: 10 },
        { name: 'Boston, MA', longitude: -71.057083, latitude: 42.361145, chatroom_id: 11 },
        { name: 'New York, NY', longitude: -73.935242, latitude: 40.730610, chatroom_id: 12 },
        { name: 'San Diego, CA', longitude: -117.161087, latitude: 32.715736, chatroom_id: 13 }
      ]);
    });
};
