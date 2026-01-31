import React, { useState } from 'react'

const gameLibrary = [
  {
    title: 'N64 (Nintendo 64 – Nintendo Classics)',
    requirement: 'Expansion Pack required',
    badge: 'N64',
    gameCount: 34,
    featured: true,
    games: [
      '1080° Snowboarding',
      'Banjo-Kazooie',
      'Banjo-Tooie',
      'Blast Corps',
      'Dr. Mario 64',
      'Excitebike 64',
      'Extreme G',
      'F-Zero X',
      'GoldenEye 007',
      'Harvest Moon 64',
      "Iggy's Reckin' Balls",
      'Jet Force Gemini',
      'Killer Instinct Gold',
      'Kirby 64: The Crystal Shards',
      'Mario Golf',
      'Mario Kart 64',
      'Mario Party',
      'Mario Party 2',
      'Mario Party 3',
      'Mario Tennis',
      'Paper Mario',
      'Pilotwings 64',
      'Pokémon Puzzle League',
      'Pokémon Snap',
      'Pokémon Stadium',
      'Pokémon Stadium 2',
      'Ridge Racer 64',
      'Sin and Punishment',
      'Star Fox 64',
      'Super Mario 64',
      'The Legend of Zelda: Majora\'s Mask',
      'The Legend of Zelda: Ocarina of Time',
      'Wave Race 64',
      'WinBack: Covert Operations',
      "Yoshi's Story"
    ]
  },
  {
    title: 'N64 Mature (Nintendo 64 – Nintendo Classics: MATURE 17+)',
    requirement: 'Expansion Pack required; Separate app for M-rated content',
    badge: 'M-RATED',
    gameCount: 5,
    featured: true,
    games: [
      'Forsaken 64',
      'Perfect Dark',
      'Shadow Man',
      'Turok: Dinosaur Hunter',
      'Turok 2: Seeds of Evil'
    ]
  },
  {
    title: 'GameCube (Nintendo GameCube – Nintendo Classics)',
    requirement: 'Expansion Pack required; Switch 2 exclusive',
    badge: 'GAMECUBE',
    gameCount: 8,
    featured: true,
    games: [
      'Chibi-Robo!',
      'F-Zero GX',
      'Fire Emblem: Path of Radiance',
      "Luigi's Mansion",
      'Soulcalibur II',
      'Super Mario Strikers',
      'The Legend of Zelda: The Wind Waker',
      'Wario World'
    ]
  },
  {
    title: 'NES (Nintendo Entertainment System – Nintendo Switch Online)',
    requirement: 'Base subscription included',
    badge: 'NES',
    gameCount: 80,
    games: [
      'Adventures of Lolo',
      'Balloon Fight',
      'Baseball',
      'Battletoads',
      'Blaster Master',
      'City Connection',
      'Clu Clu Land',
      'Cobra Triangle',
      'Crystallis',
      'Daiva Story 6 Imperial of Nirsartia',
      'Devil World',
      'Dig Dug II',
      'Donkey Kong',
      'Donkey Kong 3',
      'Donkey Kong Jr.',
      'Donkey Kong Jr. Math',
      'Double Dragon',
      'Double Dragon II: The Revenge',
      'Downtown Nekketsu March Super-Awesome Field Day!',
      'Dr. Mario',
      'EarthBound Beginnings',
      'Eliminator Boat Duel',
      'Fire \'n Ice',
      'Ghosts \'n Goblins',
      'Golf',
      'Gradius',
      'Ice Climber',
      'Ice Hockey',
      'Joy Mech Fight',
      'Kid Icarus',
      'Kirby\'s Adventure',
      'Kung Fu Heroes',
      'Mach Rider',
      'Mario Bros.',
      'Metroid',
      'Mighty Bomb Jack',
      'Mappy-Land',
      'Mystery Tower',
      'NES Open Tournament Golf',
      'Nightshade',
      'Ninja Gaiden',
      'Ninja Gaiden II: The Dark Sword of Chaos',
      'Ninja JaJaMaru-kun',
      'Pinball',
      'Pro Wrestling',
      'Punch-Out!!',
      'R.C. Pro-Am',
      'River City Ransom',
      'Rygar',
      'S.C.A.T.: Special Cybernetic Attack Team',
      'Snake Rattle \'N\' Roll',
      'Soccer',
      'Solar Jetman',
      'Solomon\'s Key',
      'Star Soldier',
      'StarTropics',
      'Super Dodge Ball',
      'Super Mario Bros.',
      'Super Mario Bros. 2',
      'Super Mario Bros. 3',
      'Super Mario Bros.: The Lost Levels',
      'Tecmo Bowl',
      'Tennis',
      'Tetris',
      'The Immortal',
      'The Legend of Zelda',
      'The Mysterious Murasame Castle',
      'TwinBee',
      'Urban Champion',
      'Vice: Project Doom',
      'Volleyball',
      'Vs. Excitebike',
      'Wario\'s Woods',
      'Wrecking Crew',
      'Xevious',
      'Yoshi',
      'Zelda II: The Adventure of Link'
    ]
  },
  {
    title: 'SNES (Super Nintendo Entertainment System – Nintendo Switch Online)',
    requirement: 'Base subscription included',
    badge: 'SNES',
    gameCount: 70,
    games: [
      'Amazing Hebereke',
      'Brawl Brothers',
      'Breath of Fire',
      'Breath of Fire II',
      'Bubsy in: Claws Encounters of the Furred Kind',
      'Big Run',
      'Bombuzal',
      'Claymates',
      'Cosmo Gang the Puzzle',
      'Demon\'s Crest',
      'Doomsday Warrior',
      'Donkey Kong Country',
      'Donkey Kong Country 2: Diddy Kong\'s Quest',
      'Donkey Kong Country 3: Dixie Kong\'s Double Trouble!',
      'EarthBound',
      'Earthworm Jim 2',
      'Fatal Fury 2',
      'Fatal Fury Special',
      'Fighter\'s History',
      'Kirby Super Star',
      'Kirby\'s Avalanche',
      'Kirby\'s Dream Course',
      'Kirby\'s Dream Land 3',
      'Kirby\'s Star Stacker',
      'Magical Drop II',
      'Mario & Wario',
      'Mario Paint',
      'Mario\'s Super Picross',
      'Nobunaga\'s Ambition',
      'Nobunaga\'s Ambition: Lord of Darkness',
      'Operation Logic Bomb',
      'Panel de Pon',
      'Peace Keepers, The',
      'Pop\'n TwinBee',
      'Prehistorik Man',
      'Psycho Dream',
      'Romance of the Three Kingdoms IV: Wall of Fire',
      'Side Pocket',
      'Smash Tennis',
      'Spanky\'s Quest',
      'Star Fox',
      'Star Fox 2',
      'Super Earth Defense Force',
      'Super Ghouls \'n Ghosts',
      'Super Mario All-Stars',
      'Super Mario Kart',
      'Super Mario World',
      'Super Mario World 2: Yoshi\'s Island',
      'Super Metroid',
      'Super Puyo Puyo 2',
      'Super R-Type',
      'Super Punch-Out!!',
      'Super Tennis',
      'Sute Hakkun',
      'The Ignition Factor',
      'The Legend of Zelda: A Link to the Past',
      'Tuff E Nuff',
      'Uncharted Waters: New Horizons',
      'Wild Guns',
      'Wrecking Crew \'98'
    ]
  },
  {
    title: 'Game Boy (Game Boy / Game Boy Color – Nintendo Switch Online)',
    requirement: 'Base subscription included',
    badge: 'GAMEBOY',
    gameCount: 30,
    games: [
      'Alleyway',
      'Baseball',
      'Bionic Commando',
      'BurgerTime Deluxe',
      'Castlevania Legends',
      'Donkey Kong',
      'Donkey Kong Land',
      'Donkey Kong Land 2',
      'Dr. Mario',
      'Game & Watch Gallery 3',
      'Gargoyle\'s Quest',
      'Gradius: The Interstellar Assault',
      'Kirby\'s Dream Land',
      'Kirby\'s Dream Land 2',
      'Kirby Tilt \'N\' Tumble',
      'Kid Icarus: Of Myths and Monsters',
      'Mario Golf',
      'Mario Picross',
      'Mario Tennis',
      'Mega Man: Dr. Wily\'s Revenge',
      'Mega Man II',
      'Mega Man III',
      'Mega Man IV',
      'Mega Man V',
      'Metroid II: Return of Samus',
      'Pokémon Trading Card Game',
      'Quest for Camelot',
      'Super Mario Land',
      'Super Mario Land 2: 6 Golden Coins',
      'Survival Kids',
      'Tetris',
      'Tetris DX',
      'The Legend of Zelda: Link\'s Awakening DX',
      'The Legend of Zelda: Oracle of Ages',
      'The Legend of Zelda: Oracle of Seasons',
      'The Sword of Hope',
      'Wario Land 3'
    ]
  },
  {
    title: 'Game Boy Advance (Game Boy Advance – Nintendo Switch Online)',
    requirement: 'Expansion Pack required',
    badge: 'GBA',
    gameCount: 25,
    games: [
      'Densetsu no Starfy',
      'Densetsu no Starfy 2',
      'Densetsu no Starfy 3',
      'Fire Emblem',
      'Fire Emblem: The Sacred Stones',
      'F-Zero Climax',
      'F-Zero: GP Legend',
      'F-Zero Maximum Velocity',
      'Golden Sun',
      'Golden Sun: The Lost Age',
      'Klonoa: Empire of Dreams',
      'Kuru Kuru Kururin',
      'Mario & Luigi: Superstar Saga',
      'Mario Kart: Super Circuit',
      'Metroid Fusion',
      'Metroid: Zero Mission',
      'Mr. Driller 2',
      'Pokémon Mystery Dungeon: Red Rescue Team',
      'Super Mario Advance',
      'Super Mario Advance 4: Super Mario Bros. 3',
      'Super Mario World: Super Mario Advance 2',
      'The Legend of Zelda: The Minish Cap',
      'The Legend of Zelda: A Link to the Past Four Swords',
      'Wario Land 4',
      'WarioWare, Inc.: Mega Microgames',
      'Yoshi\'s Island: Super Mario Advance 3'
    ]
  },
  {
    title: 'Sega Genesis (SEGA Genesis – Nintendo Switch Online)',
    requirement: 'Expansion Pack required',
    badge: 'GENESIS',
    gameCount: 45,
    games: [
      'Alien Soldier',
      'Alien Storm',
      'Alisia Dragoon',
      'Altered Beast',
      'Beyond Oasis',
      'Castlevania: Bloodlines',
      'Columns',
      'Comix Zone',
      'Contra: Hard Corps',
      'Crusader of Centy',
      'Dr. Robotnik\'s Mean Bean Machine',
      'Dynamite Headdy',
      'Earthworm Jim',
      'Ecco the Dolphin',
      'ESWAT: City Under Siege',
      'Flicky',
      'Ghouls \'n Ghosts',
      'Golden Axe',
      'Golden Axe II',
      'Gunstar Heroes',
      'Kid Chameleon',
      'Landstalker',
      'Light Crusader',
      'Mercs',
      'MUSHA',
      'Phantasy Star IV',
      'Pulseman',
      'Ristar',
      'Shining Force',
      'Shining Force II',
      'Shinobi III: Return of the Ninja Master',
      'Sonic Spinball',
      'Sonic the Hedgehog 2',
      'Space Harrier II',
      'Streets of Rage',
      'Streets of Rage 2',
      'Strider',
      'Super Fantasy Zone',
      'Super Thunder Blade',
      'Sword of Vermillion',
      'Target Earth',
      'Thunder Force II',
      'ToeJam & Earl',
      'ToeJam & Earl in Panic on Funkotron',
      'Vectorman',
      'Virtua Fighter 2',
      'Zero Wing'
    ]
  }
]

export default function NSOGameLibrary() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <>
      <h2>🎮 Nintendo Switch Online Game Library</h2>
      <p style={{ color: '#666', marginBottom: '24px', fontSize: '14px' }}>
        Explore the complete library of classic games available through Nintendo Switch Online. Base subscription includes NES, SNES, and Game Boy titles. Expansion Pack adds N64, GameCube, Game Boy Advance, and Sega Genesis games. Libraries grow regularly with new titles.
      </p>
      <div className="accordion-container">
        {gameLibrary.map((category, idx) => (
          <div key={idx} className={`accordion-card ${category.featured ? 'featured' : ''}`}>
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(idx)}
              aria-expanded={expandedIndex === idx}
            >
              <div className="accordion-title-section">
                <h3>{category.title}</h3>
                <span className="game-count">{category.gameCount} games</span>
              </div>
              <span className={`accordion-toggle ${expandedIndex === idx ? 'open' : ''}`}>
                ▼
              </span>
            </button>
            <div className="accordion-requirement">
              {category.requirement}
            </div>
            {expandedIndex === idx && (
              <div className="accordion-content">
                <div className="games-grid">
                  {category.games.map((game, gameIdx) => (
                    <div key={gameIdx} className="game-item">
                      {game}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
