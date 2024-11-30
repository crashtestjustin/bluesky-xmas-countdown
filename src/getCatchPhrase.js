const farFromChristmasCatchphrases = [
  "Plenty of time to perfect your eggnog recipe!",
  "Still time to pick out the perfect Christmas tree!",
  "The countdown begins! Have you started your wish list?",
  "Deck the halls (but maybe not just yet)!",
  "Time to start brainstorming gift ideas!",
  "Don't forget to stock up on wrapping paper early!🎁",
  "Think about your holiday travel plans!🛫",
  "Get ready to hang those stockings with care!🧦",
  "Have you started your Christmas movie marathon yet?📽️🎄",
  "It’s never too early to shop for ugly Christmas sweaters!",
  "It’s the perfect time to start planning your Christmas playlist!🎶",
  "Christmas is creeping closer—let the countdown begin!",
  "Are you dreaming of a white Christmas yet?❄️⛄️",
  "Still time to figure out who’s been naughty😈 or nice👼!",
  "Don’t let Christmas sneak up on you—start prepping now!",
  "Get ready for holiday cheer, one day at a time!",
  "It’s not too early to plan your matching holiday pajamas!",
  "Start practicing your caroling skills!",
  "Have you made your list for Santa? 🎅",
  "Get your advent calendars ready—it’s almost countdown time!",
];

const closerToChristmasCatchphrases = [
  "I hope you've got all your Christmas presents wrapped!🎁",
  "Time to untangle those Christmas lights!🎄",
  "Is your tree up yet? 🎄",
  "Get ready to bake those holiday cookies!🍪🍪",
  "Don’t forget to send your Christmas cards!",
  "The malls are getting busy; finish your shopping soon!😮‍💨🛒",
  "Are your stockings hung by the chimney with care?",
  "Time to finalize your Christmas dinner menu!",
  "Only a few more sleeps until Santa arrives! 🎅",
  "Turn on those holiday tunes and feel the cheer!",
  "The sleigh bells are ringing—can you hear them? 🔔",
  "Are you ready to roast some chestnuts on an open fire?",
  "Santa’s checking his list twice—hope you’re on the nice side!",
  "Time to string up the lights and spread the cheer!",
  "It’s beginning to look a lot like Christmas everywhere you go!",
  "Who’s ready for hot cocoa and cozy nights by the fire?",
  "Don’t forget to put out the milk and cookies for Santa! 🍪🥛",
  "Better hurry—the elves are running out of stock at the workshop!",
  "The reindeer are gearing up for their big night!🦌",
  "Only a few more jingles until Christmas morning!😳",
];

const universalCatchphrases = [
  "May your days be merry and bright!😁",
  "Let the Christmas magic fill the air!",
  "The countdown to holiday joy continues!🔄",
  "Tis the season to sparkle and shine!",
  "Every day is one step closer to holiday cheer!",
  "Snow or no snow, the holiday spirit is coming!",
  "Keep the holiday vibes strong—it’s just around the corner!",
  "Stay frosty and festive! ❄️",
  "It’s the most wonderful time of the year... almost!",
  "Feel the magic of the season building up day by day!",
];

const christmasDayCatchphrases = [
  "Merry Christmas! The big day is finally here! 🎄🎅",
  "It’s Christmas morning—time to unwrap the magic! 🎁✨",
  "Santa has come and gone—hope he left something special! 🎅🎄",
  "Wishing you a day full of joy, love, and holiday cheer! ❤️🎁",
  "Christmas is here—let the feasting and festivities begin! 🍗🥧",
  "Happy Holidays to you and yours on this magical day! 🎄✨",
  "Spread the joy, share the love—it’s Christmas Day! ❤️🎁",
  "Here’s to a day of cozy moments, laughter, and holiday magic! ❄️🎄",
  "May your Christmas be merry, bright, and full of surprises! 🎅🎁",
  "It’s the most wonderful day of the year—Merry Christmas to all! 🎄✨",
  "Deck the halls and fill the stockings—it’s Christmas morning! 🎁🎄",
  "Wishing you all the warmth and wonder this holiday can bring! ❤️❄️",
  "Santa’s work is done—time for you to enjoy the day! 🎅🎄",
  "Christmas is here—let’s make it unforgettable! 🎁✨",
  "Hope your heart and home are filled with love this Christmas Day! ❤️🎄",
  "Let the bells ring and the carols sing—Merry Christmas to all! 🔔🎶",
  "It’s the perfect day for hot cocoa and holiday cheer! ☕❄️",
  "Time to savor every magical moment of Christmas Day! 🎄🎁",
  "Gather round, spread the joy—Christmas is here! 🎅🎉",
  "The wait is over—have a holly, jolly Christmas! 🎄🎁",
];

export const getCatchPhrase = (daysUntilXmas) => {
  let allCatchphrases = [...universalCatchphrases];

  if (daysUntilXmas === 0) {
    allCatchphrases = [...christmasDayCatchphrases];
  } else if (daysUntilXmas > 60) {
    allCatchphrases.push(...farFromChristmasCatchphrases);
  } else {
    allCatchphrases.push(...closerToChristmasCatchphrases);
  }

  // Pick a random phrase
  const randomCatchphrase =
    allCatchphrases[Math.floor(Math.random() * allCatchphrases.length)];

  return randomCatchphrase;
};
