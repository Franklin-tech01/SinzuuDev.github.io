function giveInfo(params) {
  alert(" oops can't display contents ATM!!");
  // break;
}

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const btn = document.getElementById("btn1");
btn.addEventListener("click", prevent);

function prevent(e) {
  e.preventDefault();
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navLinks.classList.remove("active")
  }));


  /*
  
  
SHONEN:
Claymore
One Piece
Bleach
Shaman King
JoJo Bizzare's Adventure
JJK
CSM
Black Clover
Your Lie In April
Dandadan(manga)
Death Note
YuYu Hakusho
Haikyu
Dr Stone
Mob Psycho
Fire Force
Hell's Paradise
The Promised Neverland(manga)
Attack On Titan
FMAB
Vanitas No Carte
Pandora Hearts(manga)
D Gray Man
Soul Eater
Assassination Classroom
My Hero Academia
Fairy Tail
Naruto
Spy x Family(wasn't that great but still better than Mid Slayer🤡)
Slam Dunk
Blue Lock
Blue Exorcist
Sakamoto Days(manga)
Noragami
Hajime No Ippo
Hunter x Hunter
Mashle(manga)
Gintama
Inuyasha
Beastar
A Silent Voice
To Your Eternity
Rurouni Kenshin
Moriarty The Patriot
Samurai Champloo
Seven Deadly Sins
Fruit Basket
Magi
Summer time Rendering
Tomodachi game
Like · React · More · 9 hours ago
Ameerul Hakeem
McClane Wick

SEINEN:
Dororo
Dorohedoro(manga)
The Tatami Galaxy
Mononoke
Parasyte
Monster
Berserk(manga)
Vagabond(manga)
Vinland Saga
Perfect Blue
Cowboy Bebop
Paranoia Agent
Serial Experiment Lain
Mushishi
Ergo Proxy
Blue Gender
Devil's Line
Baccano!
Hell Girl
Summer Ghost
Paprika
Terror In Resonance
Another
Steins Gate
Neon Genesis Evangelion
Tokyo Ghoul(manga)
Made In Abyss
Blood C
Golden Kamuy
Erased
Fate series
Bungou Stray Dogs
Land Of The Lustrous(Manga)
Akira
One Punch Man
Hellsing
Ajin
Akame Ga Kill
Angel Of Death
Gantz
psycho pass
Kingdom
Death Parade

Im sure there's more but I can't remember all of the one I watched/read right now.All of them are 100 percent better than Demon Slayer.

Now if you still gonna argue then please explain to me in details about what 

  */