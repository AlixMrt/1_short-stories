import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "Bruce and the Spider",
    userId: "James Baldwin",
    date: "1905",
    userName: "Edmund Philibert",
    favorite: false,
    img: "baldwin.webp",
    content: `There was once a king of Scotland whose name was Robert Bruce. He had need to be both brave and wise, for the times in which he lived were wild and rude. The King of England was at war with him, and had led a great army into Scotland to drive him out of the land.
    Battle after battle had been fought. Six times had Bruce led his brave little army against his foes; and six times had his men been beaten, and driven into flight. At last his army was scattered, and he was forced to hide himself in the woods and in lonely places among the mountains.
    One rainy day, Bruce lay on the ground under a rude shed, listening to the patter of the drops on the roof above him. He was tired and sick at heart, and ready to give up all hope. It seemed to him that there was no use for him to try to do anything more.
    As he lay thinking, he saw a spider over his head, making ready to weave her web. He watched her as she toiled slowly and with great care. Six times she tried to throw her frail thread from one beam to another, and six times it fell short.
    "Poor thing!" said Bruce: "you, too, know what it is to fail."
    But the spider did not lose hope with the sixth failure. With still more care, she made ready to try for the seventh time. Bruce almost forgot his own troubles as he watched her swing herself out upon the slender line. Would she fail again? No! The thread was carried safely to the beam, and fastened there.
    "I, too, will try a seventh time!" cried Bruce.
    He arose and called his men together. He told them of his plans, and sent them out with messages of cheer to his disheartened people. Soon there was an army of brave Scotch-men around him. Another battle was fought, and the King of England was glad to go back into his own country.
    I have heard it said, that, after that day, no one by the name of Bruce would ever hurt a spider. The lesson which the little creature had taught the king was never forgotten.`,
  },
  {
    id: nanoid(),
    title: "The Disciple",
    userId: "Oscar Wilde",
    date: "1894",
    userName: "Auguste Barbier",
    favorite: false,
    img: "wilde.png",
    content: `When Narcissus died the pool of his pleasure changed from a cup of sweet waters into a cup of salt tears, and the Oreads came weeping through the woodland that they might sing to the pool and give it comfort.
    And when they saw that the pool had changed from a cup of sweet waters into a cup of salt tears, they loosened the green tresses of their hair and cried to the pool and said, "We do not wonder that you should mourn in this manner for Narcissus, so beautiful was he."
    "But was Narcissus beautiful?" said the pool.
    "Who should know that better than you?" answered the Oreads. "Us did he ever pass by, but you he sought for, and would lie on your banks and look down at you, and in the mirror of your waters he would mirror his own beauty."
    And the pool answered, "But I loved Narcissus because, as he lay on my banks and looked down at me, in the mirror of his eyes I saw ever my own beauty mirrored."`,
  },
  {
    id: nanoid(),
    title: "A Haunted House",
    userId: "Virginia Woolf",
    date: "1921",
    favorite: true,
    userName: "Marcel Lescure",
    img: "woolf.webp",
    content: `Whatever hour you woke there was a door shutting. From room to room they went, hand in hand, lifting
    here, opening there, making sure—a ghostly couple. “Here we left it,” she said. And he added, “Oh, but here too!”
    “It’s upstairs,” she murmured. “And in the garden,” he whispered.“Quietly,” they said, “or we shall wake them.”
    But it wasn’t that you woke us. Oh, no. “They’re looking for it they’re drawing the curtain,” one might say, and so read on a page
    or two. “Now they’ve found it,” one would be certain, stopping the pencil on the margin. And then, tired of reading, one might rise
    and see for oneself, the house all empty, the doors standing open, only the wood pigeons bubbling with content and the hum of the
    threshing machine sounding from the farm. “What did I come in here for? What did I want to find?” My hands were empty. “Perhaps
    it’s upstairs then?” The apples were in the loft. And so down again, the garden still as ever, only the book had slipped into the grass.
    But they had found it in the drawing room. Not that one could ever see them. The windowpanes reflected apples, reflected roses;
    all the leaves were green in the glass. If they moved in the drawing room, the apple only turned its yellow side. Yet, the moment after, if
    the door was opened, spread about the floor, hung upon the walls, pendant from the ceiling—what? My hands were empty. The
    shadow of a thrush crossed the carpet; from the deepest wells of silence the wood pigeon drew its bubble of sound. “Safe, safe, safe” the
    pulse of the house beat softly. “The treasure buried; the room...” the pulse stopped short. Oh, was that the buried treasure? A moment
    later the light had faded. Out in the garden then? But the trees spun darkness for a wandering beam of sun. So fine, so rare, coolly sunk
    beneath the surface the beam I sought always burned behind the glass. Death was the glass; death was between us, coming to the
    woman first, hundreds of years ago, leaving the house, sealing all the windows; the rooms were darkened. He left it, left her, went North,
    went East, saw the stars turned in the Southern sky; sought the house, found it dropped beneath the Downs. “Safe, safe, safe,” the
    pulse of the house beat gladly. “The Treasure yours.” The wind roars up the avenue. Trees stoop and bend this way and
    that. Moonbeams splash and spill wildly in the rain. But the beam of the lamp falls straight from the window. The candle burns stiff and still. Wandering through the house, opening the windows,
    whispering not to wake us, the ghostly couple seek their joy. “Here we slept,” she says. And he adds, “Kisses without number.”
    “Waking in the morning—” “Silver between the trees—” “Upstairs—” “In the garden—” “When summer came—” “In winter
    snowtime—” The doors go shutting far in the distance, gently knocking like the pulse of a heart.
    Nearer they come, cease at the doorway. The wind falls, the rain slides silver down the glass. Our eyes darken, we hear no steps beside us; we see no lady spread her ghostly cloak. His hands shield
    the lantern. “Look,” he breathes. “Sound asleep. Love upon their lips.”
    Stooping, holding their silver lamp above us, long they look and deeply. Long they pause. The wind drives straightly; the flame
    stoops slightly. Wild beams of moonlight cross both floor and wall, and, meeting, stain the faces bent; the faces pondering; the faces
    that search the sleepers and seek their hidden joy. “Safe, safe, safe,” the heart of the house beats proudly. “Long
    years—” he sighs. “Again you found me.” “Here,” she murmurs, “sleeping; in the garden reading; laughing, rolling apples in the loft.
    Here we left our treasure—” Stooping, their light lifts the lids upon my eyes. “Safe! safe! safe!” the pulse of the house beats wildly. Waking, I cry “Oh, is this your buried treasure? The light in the heart.” `,
  },
  {
    id: nanoid(),
    title: "Doctor Chevalier's Lie",
    userId: "Kate Chopin",
    date: "1891",
    userName: "Marcel Lescure",
    favorite: false,
    img: "chopin.webp",
    content: `The quick report of a pistol rang through the quiet autumn night. It was no unusual sound in the unsavory quarter where Dr. Chevalier had his office. Screams commonly went with it. This time there had been none.
    Midnight had already rung in the old cathedral tower.
    The doctor closed the book over which he had lingered so late, and awaited the summons that was almost sure to come.
    As he entered the house to which he had been called he could not but note the ghastly sameness of detail that accompanied these oft-recurring events. The same scurrying; the same groups of tawdry, frightened women bending over banisters--hysterical, some of them; morbidly curious, others; and not a few shedding womanly tears; with a dead girl stretched somewhere, as this one was.
    And yet it was not the same. Certainly she was dead: there was the hole in the temple where she had sent the bullet through. Yet it was different. Other such faces had been unfamiliar to him, except so far as they bore the common stamp of death. This one was not.
    Like a flash he saw it again amid other surroundings. The time was little more than a year ago. The place, a homely cabin down in Arkansas, in which he and a friend had found shelter and hospitality during a hunting expedition.
    There were others beside. A little sister or two; a father and mother--coarse, and bent with toil, but proud as archangels of their handsome girl, who was too clever to stay in an Arkansas cabin, and who was going away to seek her fortune in the big city.
    "The girl is dead," said Doctor Chevalier. "I knew her well, and charge myself with her remains and decent burial."
    The following day he wrote a letter. One, doubtless, to carry sorrow, but no shame to the cabin down there in the forest.
    It told that the girl had sickened and died. A lock of hair was sent and other trifles with it. Tender last words were even invented.
    Of course it was noised about that Doctor Chevalier had cared for the remains of a woman of doubtful repute.
    Shoulders were shrugged. Society thought of cutting him. Society did not, for some reason or other, so the affair blew over.`,
  },
  {
    id: nanoid(),
    title: "The New Food",
    userId: "Stephen Leacock",
    date: "1910",
    userName: "Sarah Johansson ",
    favorite: true,
    img: "leacock.webp",
    content: `I see from the current columns of the daily press that "Professor Plumb, of the University of Chicago, has just invented a highly concentrated form of food. All the essential nutritive elements are put together in the form of pellets, each of which contains from one to two hundred times as much nourishment as an ounce of an ordinary article of diet. These pellets, diluted with water, will form all that is necessary to support life. The professor looks forward confidently to revolutionizing the present food system."
Now this kind of thing may be all very well in its way, but it is going to have its drawbacks as well. In the bright future anticipated by Professor Plumb, we can easily imagine such incidents as the following:
The smiling family were gathered round the hospitable board. The table was plenteously laid with a soup-plate in front of each beaming child, a bucket of hot water before the radiant mother, and at the head of the board the Christmas dinner of the happy home, warmly covered by a thimble and resting on a poker chip. The expectant whispers of the little ones were hushed as the father, rising from his chair, lifted the thimble and disclosed a small pill of concentrated nourishment on the chip before him. Christmas turkey, cranberry sauce, plum pudding, mince pie--it was all there, all jammed into that little pill and only waiting to expand. Then the father with deep reverence, and a devout eye alternating between the pill and heaven, lifted his voice in a benediction.
At this moment there was an agonized cry from the mother.
"Oh, Henry, quick! Baby has snatched the pill!" It was too true. Dear little Gustavus Adolphus, the golden-haired baby boy, had grabbed the whole Christmas dinner off the poker chip and bolted it. Three hundred and fifty pounds of concentrated nourishment passed down the oesophagus of the unthinking child.
"Clap him on the back!" cried the distracted mother. "Give him water!"
The idea was fatal. The water striking the pill caused it to expand. There was a dull rumbling sound and then, with an awful bang, Gustavus Adolphus exploded into fragments!
And when they gathered the little corpse together, the baby lips were parted in a lingering smile that could only be worn by a child who had eaten thirteen Christmas dinners.`,
  },
  {
    id: nanoid(),
    title: "A Strange Story",
    userId: "O. Henry",
    date: "1908",
    userName: "Michel Baptista",
    favorite: true,
    img: "henri.webp",
    content: `In the northern part of Austin there once dwelt an honest family by the name of Smothers. The family consisted of John Smothers, his wife, himself, their little daughter, five years of age, and her parents, making six people toward the population of the city when counted for a special write-up, but only three by actual count.
    One night after supper the little girl was seized with a severe colic, and John Smothers hurried down town to get some medicine.
    He never came back. 
    The little girl recovered and in time grew up to womanhood.
    The mother grieved very much over her husband's disappearance, and it was nearly three months before she married again, and moved to San Antonio.
    The little girl also married in time, and after a few years had rolled around, she also had a little girl five years of age.
    She still lived in the same house where they dwelt when her father had left and never returned.
    One night by a remarkable coincidence her little girl was taken with cramp colic on the anniversary of the disappearance of John Smothers, who would now have been her grandfather if he had been alive and had a steady job.
    "I will go downtown and get some medicine for her," said John Smith (for it was none other than he whom she had married).
    "No, no, dear John," cried his wife. "You, too, might disappear forever, and then forget to come back."
    So John Smith did not go, and together they sat by the bedside of little Pansy (for that was Pansy's name).
    After a little Pansy seemed to grow worse, and John Smith again attempted to go for medicine, but his wife would not let him.
    Suddenly the door opened, and an old man, stooped and bent, with long white hair, entered the room.
    "Hello, here is grandpa," said Pansy. She had recognized him before any of the others.
    The old man drew a bottle of medicine from his pocket and gave Pansy a spoonful.
    She got well immediately.
    "I was a little late," said John Smothers, "as I waited for a street car."`,
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, userId, date, userName, favorite, content, image) {
        return {
          payload: {
            id: nanoid(),
            title,
            userId,
            date,
            favorite,
            userName,
            content,
            image,
          },
        };
      },
    },
  },
});

export const selectAllStories = (state) => state.posts;

export const selectStoryById = (state, postId) =>
  state.posts.find((post) => post.id === postId);

// export const selectFavoriteStories = (state, postId) =>
//   state.posts.filter((post) => post.favorite === true);

export const selectFavoriteStories = createSelector(
  [selectAllStories], // Input selector
  (posts) => posts.filter((post) => post.favorite === true) // Output selector
);

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
