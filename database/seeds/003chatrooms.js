exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("chatrooms")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("chatrooms").insert([
        {
          name: "Los Angeles, CA",
          radius: 10,
          user_id: 1,
          permanent: false,
          total_users: 2,
          description: "A chatroom for Los Angeles, California",
          chatroom_url: "sendbird_open_channel_52771_74cbb1034648504d88f2e1ff335cf2c86b3fd767",
          chatroom_type: "big city"
        },
        {
          name: "Westerly, RI",
          radius: 10,
          user_id: 2,
          permanent: true,
          total_users: 3,
          description: "A chatroom for Westerly, Rhode Island",
          chatroom_url: "sendbird_open_channel_52771_bb3423f848cba53c24d267146acc278808136b21",
          chatroom_type: "big city"
        },
        {
          name: "Atlanta, GA",
          radius: 10,
          user_id: 2,
          permanent: true,
          total_users: 4,
          description: "A chatroom for Atlanta, Georgia",
          chatroom_url: "sendbird_open_channel_52771_cf7404b157106ab6aabf9240fdbc5feacc0f537f",
          chatroom_type: "big city"
        },
        {
          name: "San Francisco, CA",
          radius: 21,
          user_id: 1,
          permanent: false,
          total_users: 4,
          description: "A chatroom for San Francisco, CA",
          chatroom_url: "sendbird_open_channel_52771_a06b52701b32c1da7a1286f6b5b8f0de3f4cf7d2",
          chatroom_type: "big city"
        },
        {
          name: "Detroit, MI",
          radius: 10,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatroom for Detroit, MI",
          chatroom_url: "sendbird_open_channel_52771_86113d4395145363821c384a131783042beae907",
          chatroom_type: "big city"
        },
        {
          name: "Toronto, ON",
          radius: 10,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatrooom about Toronto, ON",
          chatroom_url: "sendbird_open_channel_52771_86e7888ea74da04c2c221353b90ac8923cb1f98b",
          chatroom_type: "big city"
        },
        {
          name: "Denver, CO",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatroom for Denver, CO",
          chatroom_url: "sendbird_open_channel_52771_64345b8888088647b8e895bfbdd98be7cb3489df",
          chatroom_type: "big city"
        },
        {
          name: "Austin, TX",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatroom for Austin, TX",
          chatroom_url: "sendbird_open_channel_52771_fc33724c7336ef4f76b1fc7fbe5d0787fa9f5733",
          chatroom_type: "big city"
        },
        {
          name: "Dallas, TX",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatroom for Dallas, TX",
          chatroom_url: "sendbird_open_channel_52771_f9cfdd4c0f9767ebd40a8709a86e745093d06015",
          chatroom_type: "big city"
        },
        {
          name: "Fenway Park",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "Welcome to Fenway Park!",
          chatroom_url: "sendbird_open_channel_52771_afa5f77b4e4e4d5a471bb7c9666047bad5f97880",
          chatroom_type: "stadium"
        },
        {
          name: "Boston, MA",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatroom for Boston, MA",
          chatroom_url: "sendbird_open_channel_52771_84a44fb5f0fadf955c3eab7ef4510c704852aa8e",
          chatroom_type: "big city"
        },
        {
          name: "New York, NY",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatroom for NYC",
          chatroom_url: "sendbird_open_channel_52771_537d5b9296f52fe6dedfba8714dfa8679314560c",
          chatroom_type: "big city"
        },
        {
          name: "San Diego, CA",
          radius: 16,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "Let's just talk about everyday things and relax",
          chatroom_url: "sendbird_open_channel_52771_537d5b9296f52fe6dedfba8714dfa8679314560c",
          chatroom_type: "big city"
        }

      ]);
    });
};
