import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Songcover from "../images/rap-god.png";
import profilePic from "../images/cat.jpg";
import soundcloud from "../images/Sound-icon.png";
import apple from "../images/Apple.png";
import spotify from "../images/Spotify.png";

export default function SongPage({ setOnboardingComplete }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLyricsExpanded, setIsLyricsExpanded] = useState(false); // State for lyrics visibility
  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          setUserData(data);
          if (data.profileImage) {
            setImageUrl(data.profileImage);
          }
        } else {
          console.log("No user data found.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [uid]);

  // Lyrics to display
  const lyrics = `Look, I was gonna go easy on you not to hurt your feelings
But I'm only going to get this one chance (six minutes-, six minutes-)
Something's wrong, I can feel it (six minutes, Slim Shady, you're on!)
Just a feeling I've got, like something's about to happen, but I don't know what
If that means what I think it means, we're in trouble, big trouble
And if he is as bananas as you say, I'm not taking any chances
You are just what the doc ordered
I'm beginnin' to feel like a Rap God, Rap God
All my people from the front to the back nod, back nod
Now, who thinks their arms are long enough to slap box, slap box?
They said I rap like a robot, so call me Rap-bot
But for me to rap like a computer, it must be in my genes
I got a laptop in my back pocket
My pen'll go off when I half-cock it
Got a fat knot from that rap profit
Made a livin' and a killin' off it
Ever since Bill Clinton was still in office
With Monica Lewinsky feelin' on his nutsack
I'm an MC still as honest
But as rude and as indecent as all hell
Syllables, skill-a-holic (kill 'em all with)
This flippity dippity-hippity hip-hop
You don't really wanna get into a pissin' match
With this rappity brat, packin' a MAC in the back of the Ac'
Backpack rap crap, yap-yap, yackety-yack
And at the exact same time, I attempt these lyrical acrobat stunts while I'm practicin' that
I'll still be able to break a motherfuckin' table
Over the back of a couple of faggots and crack it in half
Only realized it was ironic, I was signed to Aftermath after the fact
How could I not blow? All I do is drop F-bombs
Feel my wrath of attack
Rappers are havin' a rough time period, here's a maxi pad
It's actually disastrously bad for the wack
While I'm masterfully constructing this masterpièce
'Cause I'm beginnin' to feel like a Rap God, Rap God
All my people from the front to the back nod, back nod
Now, who thinks their arms are long enough to slap box, slap box?
Let me show you maintainin' this shit ain't that hard, that hard
Everybody want the key and the secret to rap immortality like Ι have got
Well, to be truthful the blueprint's
Simply rage and youthful exuberance
Everybody loves to root for a nuisance
Hit the Earth like an asteroid
Did nothing but shoot for the Moon since (pew!)
MCs get taken to school with this music
'Cause I use it as a vehicle to "Bus the rhyme"
Now I lead a new school full of students
Me? I'm a product of Rakim
Lakim Shabazz, 2Pac, N.W.A, Cube, hey Doc, Ren
Yella, Eazy, thank you, they got Slim
Inspired enough to one day grow up, blow up and be in a position
To meet Run-D.M.C., induct them
Into the motherfuckin' Rock and Roll Hall of Fame
Even though I'll walk in the church and burst in a ball of flames
Only Hall of Fame I'll be inducted in is the alcohol of fame
On the wall of shame
You fags think it's all a game, 'til I walk a flock of flames
Off a plank and, tell me what in the fuck are you thinkin'?
Little gay-lookin' boy
So gay, I can barely say it with a straight face, lookin' boy (ha-ha!)
You're witnessin' a mass-occur
Like you're watching a church gathering take place, lookin' boy
"Oy vey, that boy's gay!" That's all they say, lookin' boy
You get a thumbs up, pat on the back
And a "Way to go" from your label every day, lookin' boy
Hey, lookin' boy! What you say, lookin' boy?
I get a "Hell, yeah" from Dre, lookin' boy
I'ma work for everything I have, never asked nobody for shit
Get outta my face, lookin' boy!
Basically, boy, you're never gonna be capable
Of keepin' up with the same pace, lookin' boy, 'cause-
I'm beginnin' to feel like a Rap God, Rap God
All my people from the front to the back nod, back nod
The way I'm racin' around the track, call me NASCAR, NASCAR
Dale Earnhardt of the trailer park, the White Trash God
Kneel before General Zod
This planet's Krypton-, no, Asgard, Asgard
So you'll be Thor and I'll be Odin
You rodent, I'm omnipotent
Let off, then I'm reloadin'
Immediately with these bombs I'm totin'
And I should not be woken
I'm the walkin' dead, but I'm just a talkin' head, a zombie floatin'
But I got your mom deep-throatin'
I'm out my Ramen Noodle
We have nothin' in common, poodle
I'm a Doberman, pinch yourself in the arm and pay homage, pupil
It's me, my honesty's brutal
But it's honestly futile if I don't utilize what I do though
For good at least once in a while
So I wanna make sure somewhere in this chicken scratch I scribble and doodle enough rhymes
To maybe try to help get some people through tough times
But I gotta keep a few punchlines
Just in case 'cause even you unsigned
Rappers are hungry lookin' at me like it's lunchtime
I know there was a time where once I
Was king of the underground
But I still rap like I'm on my Pharoahe Monch grind
So I crunch rhymes, but sometimes when you combine
Appeal with the skin color of mine
You get too big and here they come tryin'
To censor you like that one line
I said on "I'm Back" from The Mathers LP 1 when I
Tried to say I'll take seven kids from Columbine
Put 'em all in a line, add an AK-47, a revolver and a .9
See if I get away with it now that I ain't as big as I was, but I'm
Morphin' into an immortal, comin' through the portal
You're stuck in a time warp from 2004 though
And I don't know what the fuck that you rhyme for
You're pointless as Rapunzel with fuckin' cornrows
You write normal? Fuck being normal!
And I just bought a new raygun from the future
Just to come and shoot ya, like when Fabolous made Ray J mad
'Cause Fab said he looked like a fag at Mayweather's pad
Singin' to a man while he played piano
Man, oh man, that was a 24-7 special on the cable channel
So Ray J went straight to the radio station
The very next day, "Hey Fab, I'ma kill you!"
Lyrics comin' at you at supersonic speed (J.J. Fad)
Uh, summa-lumma, dooma-lumma, you assumin' I'm a human
What I gotta do to get it through to you I'm superhuman?
Innovative and I'm made of rubber so that anything
You say is ricochetin' off of me, and it'll glue to you and
I'm devastating, more than ever demonstrating
How to give a motherfuckin' audience a feeling like it's levitating
Never fading, and I know the haters are forever waiting
For the day that they can say I fell off, they'll be celebrating
'Cause I know the way to get 'em motivated
I make elevating music, you make elevator music
"Oh, he's too mainstream"
Well, that's what they do when they get jealous, they confuse it
"It's not hip-hop, it's pop, " 'cause I found a hella way to fuse it
With rock, shock rap with Doc
Throw on "Lose Yourself" and make 'em lose it
I don't know how to make songs like that
I don't know what words to use
Let me know when it occurs to you
While I'm rippin' any one of these verses that versus you
It's curtains, I'm inadvertently hurtin' you
How many verses I gotta murder to
Prove that if you were half as nice, your songs you could sacrifice virgins too?
Ugh, school flunky, pill junkie
But look at the accolades these skills brung me
Full of myself, but still hungry
I bully myself 'cause I make me do what I put my mind to
And I'm a million leagues above you
Ill when I speak in tongues, but it's still tongue-in-cheek, fuck you
I'm drunk, so, Satan, take the fucking wheel
I'ma sleep in the front seat
Bumpin' Heavy D and the Boyz, still "Chunky but Funky"
But in my head, there's something I can feel tugging and struggling
Angels fight with devils and here's what they want from me
They're askin' me to eliminate some of the women hate
But if you take into consideration the bitter hatred
I have, then you may be a little patient
And more sympathetic to the situation
And understand the discrimination
But fuck it, life's handin' you lemons? Make lemonade then!
But if I can't batter the women
How the fuck am I supposed to bake them a cake then?
Don't mistake him for Satan; it's a fatal mistake
If you think I need to be overseas and take a vacation
To trip a broad, and make her fall on her face and
Don't be a retard, be a king? Think not
Why be a king when you can be a god?`;

  // Toggle function for expanding/collapsing lyrics
  const toggleLyrics = () => {
    setIsLyricsExpanded(!isLyricsExpanded);
  };

  const soundCloudUrl =
    "https://soundcloud.com/dosill/rap-god-eminem?in=c7ux/sets/ux";

  const appleMusicUrl =
    "https://music.apple.com/us/album/rap-god/1440862963?i=1440863086";

  const spotifyUrl = "https://open.spotify.com/track/6or1bKJiZ06IlK0vFvY75k";

  return (
    <div className="song-container-new">
      <div className="song-header-section-new">
        <img src={Songcover} alt="Rap god" className="song-cover-new" />
        <div className="song-details-new">
          <h1 className="song-title-new">Rap God</h1>
          <p className="song-meta-new">2003</p>
          <p className="song-artist-new">Artist - Eminem</p>
          <p className="song-rating-new">Avg Rating: 3:45</p>
          <div className="music-icons-new">
            <a href={soundCloudUrl} target="_blank" rel="noopener noreferrer">
              <img src={soundcloud} alt="soundcloud" className="icon-new" />
            </a>
            <a href={appleMusicUrl} target="_blank" rel="noopener noreferrer">
              <img src={apple} alt="apple" className="icon-new" />
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
              <img src={spotify} alt="spotify" className="icon-new" />
            </a>
          </div>
        </div>
      </div>
      <div className="lyrics-section-new">
        <h2 className="lyrics-title-new">Lyrics</h2>
        <div className="lyrics-box-new">
          <p className="lyrics-text-new">
            {isLyricsExpanded ? lyrics : lyrics.slice(0, 100) + "..."}{" "}
            {/* Show preview or full lyrics */}
          </p>
          <button onClick={toggleLyrics} className="see-all-lyrics-new">
            {isLyricsExpanded ? "Show Less" : "See All Lyrics"}
          </button>
        </div>
      </div>
      <h2 className="reviews-title-new">Reviews</h2>
      <p className="sort-by-new">Sort by: Date</p>

      <div className="reviews-section-new">
        <div className="review-controls-new"></div>

        <div className="review-list-new">
          <div className="review-box-new">
            <div className="review-header-new">
              <img
                src={profilePic}
                alt="Profile"
                className="reviewer-pic-new"
              />
              <div className="name-rating-container">
                <div className="review-rating-display-new">
                  <p className="reviewer-name-new">
                    {userData ? userData.username : "Anonymous"}
                  </p>
                  <p className="review-rating-new">Rating: 3.5/10</p>
                </div>
              </div>
            </div>
            <div className="review-content-new">
              <h4>Overskrift</h4>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="review-actions-new">
              <div className="heart-reply-new">
                <button className="heart-button-new">❤️</button>
                <span className="reply-thread-new">See thread</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
