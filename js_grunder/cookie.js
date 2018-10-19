/* http://www.chinese-fortune-cookie.com/fortune-cookie-quotes.html */

/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    const elementLoggen = document.querySelector('.loggen');
    console.log(elementLoggen);

    const elementWebbsidan = document.querySelector('.webbsidan');
    console.log(elementWebbsidan);

    const elementLista = document.querySelector('.lista');
    console.log(elementLista);

    const elementDiv = document.querySelector('div');
    console.log(elementDiv);

    /* Knapp 1: skriv ut en cookie i loggen */
    elementLoggen.addEventListener('click', infogaLog);

    function infogaLog() {
    
        console.log('There is a true and sincere friendship between you and your friends.');
    }
    /* Knapp 2: skriv ut cookie i webbsidan */
    elementWebbsidan.addEventListener('click', infogaText);

    function infogaText() {
        elementDiv.textContent = 'You will witness a special ceremony.'
    };

    /* Knapp 3: skriv ut nya cookies en-efter-en som en lista */
    elementLista.addEventListener('click', infogaTexter);
    var texter = 
    [
    'There is a true and sincere friendship between you and your friends.',

    'You find beauty in ordinary things, do not lose this ability.',

    'Ideas are like children; there are none so wonderful as your own.',

    'It takes more than good memory to have good memories.',

    'A thrilling time is in your immediate future.',
    
    'Your blessing is no more than being safe and sound for the whole lifetime.',

    'Plan for many pleasures ahead.',

    'The joyfulness of a man prolongeth his days.',

    'Your everlasting patience will be rewarded sooner or later.',

   ' Make two grins grow where there was only a grouch before.',

    'Something you lost will soon turn up.',

    'Your heart is pure, and your mind clear, and your soul devout.',

    'Excitement and intrigue follow you closely wherever you go!',

    'A pleasant surprise is in store for you.',

    'May life throw you a pleasant curve.',

    'As the purse is emptied the heart is filled.',

    'Be mischievous and you will not be lonesome.',

    'You have a deep appreciation of the arts and music.',
    
    'Your flair for the creative takes an important place in your life.',

    'Your artistic talents win the approval and applause of others.',

    'Pray for what you want, but work for the things you need.',

    'Your many hidden talents will become obvious to those around you.',

    'Dont forget, you are always on our minds.',

    'Your greatest fortune is the large number of friends you have.',

    'A firm friendship will prove the foundation on your success in life.',

    'Dont ask, dont say. Everything lies in silence.',

    'Look for new outlets for your own creative abilities.',

    'Be prepared to accept a wondrous opportunity in the days ahead!',

    'Fame, riches and romance are yours for the asking.',

    'Good luck is the result of good planning.',

    'Good things are being said about you.',

    'Smiling often can make you look and feel younger.',

    'Someone is speaking well of you.',

    'The time is right to make new friends.',

    'You will inherit some money or a small piece of land.',

    'Your life will be happy and peaceful.',
    
   'A friend is a present you give yourself.',

    'A member of your family will soon do something that will make you proud.',

    'A quiet evening with friends is the best tonic for a long day.',

    'A single kind word will keep one warm for years.',

    'Anger begins with folly, and ends with regret.',

    'Generosity and perfection are your everlasting goals.',

    'Happy news is on its way to you.',

    'He who laughs at himself never runs out of things to laugh at.',

    'If your desires are not extravagant they will be granted.',

    'Let there be magic in your smile and firmness in your handshake.',

    'If you want the rainbow, you must to put up with the rain. D. Parton',

    'Nature, time and patience are the three best physicians.',

    'Strong and bitter words indicate a weak cause.',

    'The beginning of wisdom is to desire it.',

    'Yu will have a very pleasant experience.',

    'You will inherit some money or a small piece of land.',

    'You will live a long, happy life.',

    'You will spend old age in comfort and material wealth.',

    'You will step on the soil of many countries.',

    'You will take a chance in something in the near future.',

    'You will witness a special ceremony.',

    'Your everlasting patience will be rewarded sooner or later.',

    'Your great attention to detail is both a blessing and a curse.',

    'Your heart is a place to draw true happiness.',

    'Your ability to juggle many tasks will take you far.',

    'A friend asks only for your time, not your money.',

    'You will be invited to an exciting event.',
    ];

    /* Slumpa fram cookies */

    function infogaTexter() {
        var slumpa = Math.ceil(Math.random() * 125 - 1);
        elementDiv.innerHTML += texter[slumpa] + '<br>';
    }
}