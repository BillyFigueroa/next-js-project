const userMock = {
  user: {
    gender: "female",
    name: {
      title: "Miss",
      first: "Melanie",
      last: "Dean"
    },
    location: {
      street: {
        number: 4210,
        name: "Hillcrest Rd"
      },
      city: "Fort Wayne",
      state: "South Dakota",
      country: "United States",
      postcode: 36386,
      coordinates: {
        latitude: "-20.0357",
        longitude: "21.2095"
      },
      timezone: {
        offset: "+10:00",
        description: "Eastern Australia, Guam, Vladivostok"
      }
    },
    email: "melanie.dean@example.com",
    login: {
      uuid: "a30f655d-48e3-4eee-a115-18b58496a529",
      username: "goldenbird601",
      password: "answer",
      salt: "I6l543je",
      md5: "8a81759fc5847bb8252f913789221939",
      sha1: "ac9196d787b1e736a77c9044e5e274c3135e2a4e",
      sha256: "5976db5bf742d1eb6ecd873d5aa03c2e540ad829ae8605bcc34165c10c9535d4"
    },
    dob: {
      date: new Date(),
      age: 36
    },
    registered: {
      date: new Date(),
      age: 15
    },
    phone: "(454) 731-5498",
    cell: "(992) 778-4364",
    id: {
      name: "SSN",
      value: "245-92-3675"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/51.jpg"
    },
    nat: "US"
  },
};

export default userMock;