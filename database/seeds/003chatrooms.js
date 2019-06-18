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
          chatroom_url: "sendbird_open_channel_52771_74cbb1034648504d88f2e1ff335cf2c86b3fd767"
        },
        {
          name: "Westerly, RI",
          radius: 10,
          user_id: 2,
          permanent: true,
          total_users: 3,
          description: "A chatroom for Westerly, Rhode Island",
          chatroom_url: "sendbird_open_channel_52771_bb3423f848cba53c24d267146acc278808136b21"
        },
        {
          name: "Atlanta, GA",
          radius: 10,
          user_id: 2,
          permanent: true,
          total_users: 4,
          description: "A chatroom for Atlanta, Georgia",
          chatroom_url: "sendbird_open_channel_52771_cf7404b157106ab6aabf9240fdbc5feacc0f537f"
        },
        {
          name: "San Francisco, CA",
          radius: 21,
          user_id: 1,
          permanent: false,
          total_users: 4,
          description: "A chatroom for San Francisco, CA",
          chatroom_url: "sendbird_open_channel_52771_a06b52701b32c1da7a1286f6b5b8f0de3f4cf7d2"
        },
        {
          name: "Detroit, MI",
          radius: 10,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatroom for Detroit, MI",
          chatroom_url: "sendbird_open_channel_52771_86113d4395145363821c384a131783042beae907"
        },
        {
          name: "Toronto, ON",
          radius: 10,
          user_id: 3,
          permanent: false,
          total_users: 3,
          description: "A chatrooom about Toronto, ON",
          chatroom_url: "sendbird_open_channel_52771_86e7888ea74da04c2c221353b90ac8923cb1f98b"
        }
        // {
        //   name: "Book Event",
        //   radius: 16,
        //   user_id: 3,
        //   permanent: false,
        //   total_users: 3,
        //   description: "Let's discuss that new bestselling novel by that author"
        // },
        // {
        //   name: "Danger Room",
        //   radius: 16,
        //   user_id: 3,
        //   permanent: false,
        //   total_users: 3,
        //   description: "LF group to solve this puzzle!"
        // },
        // {
        //   name: "Watch Party",
        //   radius: 16,
        //   user_id: 3,
        //   permanent: false,
        //   total_users: 3,
        //   description: "Anyone want to watch the new season of that show?"
        // },
        // {
        //   name: "Neighboorhood Watch",
        //   radius: 16,
        //   user_id: 3,
        //   permanent: false,
        //   total_users: 3,
        //   description: "Let's be on the lookout for our community"
        // },
        // {
        //   name: "Game Night",
        //   radius: 16,
        //   user_id: 3,
        //   permanent: false,
        //   total_users: 3,
        //   description: "Role playing and D&D"
        // },
        // {
        //   name: "Block Party",
        //   radius: 16,
        //   user_id: 3,
        //   permanent: false,
        //   total_users: 3,
        //   description: "We're throwing a MASSIVE summer party next week"
        // },
        // {
        //   name: "Chill Room",
        //   radius: 16,
        //   user_id: 3,
        //   permanent: false,
        //   total_users: 3,
        //   description: "Let's just talk about everyday things and relax"
        // },

      ]);
    });
};
