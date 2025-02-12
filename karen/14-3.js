// 14.3 Make a simple Shakespeare phrase search

const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

const phrases = [
"All our yesterdays ",
"All that glitters is not gold ",
"All's well that ends well ",
"As good luck would have it ",
"As merry as the day is long ",
"Bated breath ",
"Bag and baggage ",
"Bear a charmed life ",
"Be-all and the end-all ",
"Beggar all description ",
"Better foot before ",
"The better part of valor is discretion ",
"In a better world than this ",
"Neither a borrower nor a lender be ",
"Brave new world ",
"Break the ice ",
"Breathed his last ",
"Brevity is the soul of wit ",
"Refuse to budge an inch ",
"Catch a cold ",
"Cold comfort ",
"Conscience does make cowards of us all ",
"Come what come may ",
"Comparisons are odorous ",
"Crack of doom ",
"Dead as a doornail ",
"A dish fit for the gods ",
"Cry havoc and let slip the dogs of war ",
"Dog will have his day ",
"Devil incarnate ",
"Eaten me out of house and home ",
"Elbow room ",
"Farewell to all my greatness ",
"Faint hearted ",
"Fancy-free ",
"Fight till the last gasp ",
"Flaming youth ",
"Forever and a day ",
"For goodness' sake ",
"Foregone conclusion ",
"Full circle ",
"The game is afoot ",
"The game is up ",
"Give the devil his due ",
"Good riddance ",
"Jealousy is the green-eyed monster ",
"It was Greek to me ",
"Heart of gold ",
"Her infinite variety ",
"'Tis high time ",
"Hoist with his own petard ",
"Household words ",
"A horse, a horse!  My kingdom for a horse! ",
"Ill wind which blows no man to good ",
"Improbable fiction ",
"In a pickle ",
"In my heart of hearts ",
"In my mind's eye ",
"Infinite space ",
"Infirm of purpose ",
"In my book of memory ",
"It is but so-so",
"It smells to heaven ",
"Itching palm ",
"Kill with kindness ",
"Killing frost ",
"Knit brow ",
"Knock knock!  Who's there? ",
"Laid on with a trowel ",
"Laughing stock ",
"Laugh yourself into stitches ",
"Lean and hungry look ",
"Lie low ",
"Live long day ",
"Love is blind ",
"Men's evil manners live in brass; their virtues we write in water ",
"Melted into thin air ",
"Though this be madness, yet there is method in it ",
"Make a virtue of necessity ",
"The Makings of",
"Milk of human kindness ",
"Ministering angel ",
"Misery acquaints a man with strange bedfellows ",
"More honored in the breach than in the observance ",
"More in sorrow than in anger ",
"More sinned against than sinning ",
"Much Ado About Nothing ",
"Murder most foul ",
"Naked truth ",
"Neither rhyme nor reason ",
"Not slept one wink ",
"Nothing in his life became him like the leaving it ",
"Obvious as a nose on a man's face ",
"Once more into the breach ",
"One fell swoop ",
"One that loved not wisely but too well ",
"Time is out of joint ",
"Out of the jaws of death ",
"Own flesh and blood ",
"Star-crossed lovers ",
"Parting is such sweet sorrow ",
"What's past is prologue ",
"[What] a piece of work [is man] ",
"Pitched battle ",
"A plague on both your houses ",
"Play fast and loose ",
"Pomp and circumstance ",
"A poor thing, but mine own ",
"Pound of flesh ",
"Primrose path ",
"Quality of mercy is not strained ",
"Salad days ",
"Sea change ",
"Seen better days ",
"Send packing ",
"How sharper than the serpent's tooth it is to have a thankless child ",
"Shall I compare thee to a summer's day ",
"Make short shrift ",
"Sick at heart ",
"Snail paced ",
"Something in the wind ",
"Something wicked this way comes ",
"A sorry sight ",
"Sound and fury ",
"Spotless reputation ",
"Stony hearted ",
"Such stuff as dreams are made on ",
"Smooth runs the water where the brook is deep ",
"The short and the long of it ",
"Sweet are the uses of adversity ",
"Sweets to the sweet ",
"Swift as a shadow ",
"Tedious as a twice-told tale ",
"Set my teeth on edge ",
"Tell truth and shame the devil ",
"Thereby hangs a tale ",
"There's no such thing ",
"There's the rub ",
"This mortal coil ",
"To gild refined gold, to paint the lily ",
"To thine own self be true ",
"Too much of a good thing ",
"Tower of strength ",
"Towering passion ",
"Trippingly on the tongue ",
"Truth will out ",
"Violent delights have violent ends ",
"Wear my heart upon my sleeve ",
"What the dickens ",
"What's done is done ",
"What's in a name?  A rose by any other name would smell as sweet. ",
"What fools these mortals be ",
"Wild-goose chase ",
"Wish is father to that thought ",
"Witching time of night ",
"Working-day world ",
"The world's my oyster ",
"Yeoman's service "
];

function filterArrayBySearchTerm(array, searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return array.filter((element) => element.toLowerCase().includes(lowerCaseSearchTerm));
  }

app.get("/shakespeareSearch/:searchTerm", async (req, res) => {
    const searchTerm = req.params.searchTerm;
    const filteredResult = await filterArrayBySearchTerm(phrases, searchTerm);
    res.send(filteredResult);
});