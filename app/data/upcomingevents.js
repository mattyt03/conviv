export const initialUpcomingEvents = [
    {
        id: 2,
        title: 'Convergent Friendsgiving',
        date: 'Nov 25th 7:00-7:30pm',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
        location: 'GDC 2.216',
        price: 0,
        host: 'Texas Convergent',
        image: require('../assets/ConvergentFriendsgiving.jpeg'),
    },
    {
        id: 3,
        title: "Arya's Birthday Bash",
        description: "Put a smile on Arya's face",
        location: 'GDC 6.302',
        date: 'Dec 5th 6:30pm',
        price: 0,
        host: 'Jeffin Varghese',
        image: require('../assets/AryaBirthdayBash.jpeg'),
    },
    {
        id: 4,
        title: "Matt's Movie Night",
        date: 'Dec 1st 6:30pm',
        description: "Watch 'Home Alone' with Matt and Co.",
        location: 'Jester Movie Theater',
        price: 5,
        host: 'Matthew Tolea',
        image: require('../assets/HomeAloneMovieNight.jpeg'),
    },
    {
        id: 5,
        title: 'World Cup Watch Party',
        date: 'Dec 3rd 1pm',
        description: 'Argentina vs Mexico',
        location: 'South Lawn',
        price: 0,
        host: 'UT Soccer Club',
        image: require('../assets/WorldCupWatchParty.webp'),
    },
    {
        id: 6,
        title: "Varun's Rager",
        description: 'A monster rager hosted by Varun',
        location: 'Inspire Rooftop',
        date: 'Nov 28th 9pm',
        price: 15,
        host: 'Varun Kalappa',
        image: require('../assets/VarunRager.jpeg'),
    },
    {
        id: 7,
        title: 'Theta Chi Rager',
        description: 'A night you will forget',
        location: '2400 Neuces St',
        date: 'Dec 5th 10pm',
        price: 20,
        host: 'Theta Chi Fraternity',
        image: require('../assets/ThetaChiRager.jpeg'),
    },
]

export const finalUpcomingEvents = initialUpcomingEvents.concat({
    id: 1,
    title: 'Yung Jay Concert',
    description: 'Performance by upcoming artist Yung Jay!',
    location: 'Moody Center',
    date: 'Dec 7th 8:30pm',
    price: 100,
    image: require('../assets/YungJayConcert.jpeg')
}).sort(function(first, second) {
    return first['id'] - second['id'];
  })