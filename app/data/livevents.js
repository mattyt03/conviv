export const liveEvents = [
    {
        id: 1,
        title: "Arya's Birthday Bash",
        description: "Let's put a smile on Arya's face! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        location: 'GDC 6.302',
        date: 'Ends 12:00am',
        price: 0,
        host: 'Jeffin Varghese',
        profileImage: require('../assets/Jeffin.png'),
        turnout: 25,
        image: require('../assets/AryaBirthdayBash.jpeg'),
    },
    {
        id: 3,
        title: "Varun's Rager",
        description: 'A monster rager hosted by Varun',
        location: 'Inspire Rooftop',
        date: 'Ends 2:00am',
        price: 15,
        host: 'Varun Kalappa',
        profileImage: require('../assets/Varun.png'),
        turnout: 14,
        image: require('../assets/Party2.jpeg'),
    },
    {
        id: 2,
        title: "Jay's Holiday Kickback",
        date: 'Ends 10:30pm',
        description: "Sing christmas carrols, decorate cookies, and snuggle by the fire with Jay!",
        location: 'Torre Apt 1234',
        price: 5,
        host: 'Jayanth Jonnadula',
        profileImage: require('../assets/Jay.jpeg'),
        turnout: 20,
        image: require('../assets/HolidayParty2.jpeg'),
    },
    {
        id: 4,
        title: 'Theta Chi Rager',
        description: 'A night you will forget',
        location: '706 Dean Keaton St',
        date: 'Ends 1:00am',
        price: 20,
        host: 'Theta Chi Fraternity',
        profileImage: require('../assets/ThetaChi.jpeg'),
        turnout: 123,
        image: require('../assets/ThetaChiRager.jpeg'),
    },
    {
        id: 5,
        title: "Alex's Rooftop Party",
        description: 'Celebrate the end of the semester with Alex and co.',
        location: 'Waterloo Rooftop',
        date: 'Ends 11:00pm',
        price: 100,
        host: 'Alex Fiacco',
        profileImage: require('../assets/Alex.png'),
        turnout: 68,
        image: require('../assets/Party4.jpeg')
    },
].sort(function(first, second) {
    return first['id'] - second['id'];
  })