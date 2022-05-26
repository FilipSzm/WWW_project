import { useState} from "react";
import './App.css'

import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

import book1 from './images/book_1.jpg'
import book2 from './images/book_2.jpg'
import book3 from './images/book_3.jpg'
import book4 from './images/book_4.jpg'
import book5 from './images/book_5.jpg'
import book6 from './images/book_6.jpg'
import book7 from './images/book_7.jpg'
import book8 from './images/book_8.jpg'
import book9 from './images/book_9.jpg'

export default function Rulebooks() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }


    return (
        <ParallaxProvider>
            <div className="accor_wrap">
                <div className="accordion">
                    <div className="item">
                        <div className="title" onClick={() => toggle(1)}>

                            <Parallax translateY={[-20, 20]} speed={-10}>

                                <img src={book1} className="acc_image" alt="no"/>

                            </Parallax>
                            <div className="acc_name">Player's Handbook</div>
                        </div>
                        <div className={selected === 1 ? 'acc_content show' : 'acc_content'}>
                            <h2>Everything a player needs to create heroic characters for the world’s greatest roleplaying game.</h2>
                            <h4>The Player’s Handbook is the essential reference for every Dungeons & Dragons roleplayer. It contains rules for character creation and advancement, backgrounds and skills, exploration and combat, equipment, spells, and much more. Use this book to create exciting characters from among the most iconic D&D races and classes.</h4>
                            <h4>Dungeons & Dragons immerses you in a world of adventure. Explore ancient ruins and deadly dungeons. Battle monsters while searching for legendary treasures. Gain experience and power as you trek across uncharted lands with your companions.</h4>
                            <h4>The world needs heroes. Will you answer the call?</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="title" onClick={() => toggle(2)}>

                            <Parallax translateY={[-20, 20]} speed={-10}>

                                <img src={book2} className="acc_image" alt="no"/>

                            </Parallax>
                            <div className="acc_name">Monster Manual</div>
                        </div>
                        <div className={selected === 2 ? 'acc_content show' : 'acc_content'}>
                            <h2>A menagerie of deadly monsters for the world’s greatest roleplaying game.</h2>
                            <h4>The Monster Manual presents a horde of classic Dungeons & Dragons creatures, including dragons, giants, mind flayers, and beholders—a monstrous feast for Dungeon Masters ready to challenge their players and populate their adventures.</h4>
                            <h4>The monsters contained herein are culled from the D&D game’s illustrious history, with easy-to-use game statistics and thrilling stories to feed your imagination.</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="title" onClick={() => toggle(3)}>

                            <Parallax translateY={[-20, 20]} speed={-10}>

                                <img src={book3} className="acc_image" alt="no"/>

                            </Parallax>
                            <div className="acc_name">Dungeon Master's Guide</div>
                        </div>
                        <div className={selected === 3 ? 'acc_content show' : 'acc_content'}>
                            <h2>Everything a Dungeon Master needs to weave legendary stories for the world’s greatest roleplaying game.</h2>
                            <h4>The Dungeon Master’s Guide provides the inspiration and the guidance you need to spark your imagination and create worlds of adventure for your players to explore and enjoy.</h4>
                            <h4>Inside you’ll find world-building tools, tips and tricks for creating memorable dungeons and adventures, optional game rules, hundreds of classic D&D magic items, and much more!</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="title" onClick={() => toggle(4)}>
                            <Parallax translateY={[-20, 20]} speed={-10}>
                                <img src={book4} className="acc_image" alt="no"/>
                            </Parallax>
                            <div className="acc_name">Volo's Guide to Monsters</div>
                        </div>
                        <div className={selected === 4 ? 'acc_content show' : 'acc_content'}>
                            <h2>Research has never been so dangerous…</h2>
                            <h4>Explore the breadth of D&D’s monsters in this immersive 224-page volume filled with beautiful illustrations and in-depth lore. Volo’s Guide to Monsters provides something exciting for players and Dungeon Masters everywhere!</h4>
                            <h4>The esteemed loremaster Volothamp Geddarm is back and he’s written a fantastical dissertation, covering some of the most iconic monsters in the Forgotten Realms. Unfortunately, the Sage of Shadowdale himself, Elminster, doesn’t believe Volo gets some of the important details quite right. Don’t miss out as Volo and Elminster square off (academically speaking of course) to illuminate the uninitiated on creatures both common and obscure. Uncover the machinations of the mysterious Kraken Society, what is the origin of the bizarre froghemoth, or how to avoid participating in the ghastly reproductive cycle of the grotesque vargouille.</h4>
                            <h4>Dungeon Masters and players will get some much-needed guidance as you plan your next venture, traipsing about some dusty old ruin in search of treasure, lore, and let’s not forget ... dangerous creatures whose horns, claws, fangs, heads, or even hides might comfortably adorn the walls of your trophy room. If you survive.</h4>
                            <ul>
                                <li><h4>Chapter 1: Monster Lore takes several iconic D&D monsters and provides additional information about their origins, their dispositions and behaviors, and their lairs—above and beyond what is written in the Monster Manual. Dive deep into the story behind D&D’s most popular and iconic monsters, including beholders, mind flayers, and the yuan-ti, as well as classics like orcs, gnolls, and kobolds.</h4></li>
                                <li><h4>Chapter 2: Character Races presents character races that are some of the more distinctive race options in the D&D multiverse, including the goblin, the orc, and the firbolg.</h4></li>
                                <li><h4>Chapter 3: Bestiary provides game statistics and lore for nearly one hundred monsters suitable for any D&D campaign. Gain access to rules and story for dozens of monsters new to fifth edition Dungeons & Dragons, such as the froghemoth, the neogi, and the vargouille.</h4></li>
                            </ul>
                        </div>
                    </div>

                    <div className="item">
                        <div className="title" onClick={() => toggle(5)}>
                            <Parallax translateY={[-20, 20]} speed={-10}>
                                <img src={book5} className="acc_image" alt="no"/>
                            </Parallax>
                            <div className="acc_name">Xanathar's Guide to Everything</div>
                        </div>
                        <div className={selected === 5 ? 'acc_content show' : 'acc_content'}>
                            <h2>Explore a wealth of new rules options for both players and Dungeon Masters in this supplement for the world’s greatest roleplaying game.</h2>
                            <h4>The beholder Xanathar—Waterdeep’s most infamous crime lord—is known to hoard information on friend and foe alike. The beholder catalogs lore about adventurers and ponders methods to thwart them. Its twisted mind imagines that it can eventually record everything!</h4>
                            <h4>Xanathar's Guide to Everything is the first major expansion for fifth edition Dungeons & Dragons, offering new rules and story options:</h4>
                            <ul>
                                <li><h4>Over twenty-five new subclasses for the character classes in the Player’s Handbook, including the Cavalier for the fighter, the Circle of Dreams for the druid, the Horizon Walker for the ranger, the Inquisitive for the rogue, and many more.</h4></li>
                                <li><h4>Dozens of new spells, a collection of racial feats, and a system to give your character a randomized backstory.</h4></li>
                                <li><h4>A variety of tools that provide Dungeon Masters fresh ways to use traps, magic items, downtime activities, and more—all designed to enhance a D&D campaign and push it in new directions.</h4></li>
                            </ul>
                            <h4>Amid all this expansion material, Xanathar offers bizarre observations about whatever its eyestalks happen to glimpse. Pray they don’t come to rest on you.</h4>
                            <h4>Beauty and guile are in the eyes of the beholder!</h4>
                            <h3>On the Cover</h3>
                            <h4>Xanathar gazes lovingly upon its pet fish. Indeed, this cover, painted by Jason Rainville, features a great many of Xanathar's treasures and secrets. Can you find them all?</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="title" onClick={() => toggle(6)}>
                            <Parallax translateY={[-20, 20]} speed={-10}>
                                <img src={book6} className="acc_image" alt="no"/>
                            </Parallax>
                            <div className="acc_name">Mordenkainen's Tome of Foes</div>
                        </div>
                        <div className={selected === 6 ? 'acc_content show' : 'acc_content'}>
                            <h2>Discover the truth about the great conflicts of the D&D multiverse in this supplement for the world's greatest roleplaying game.</h2>
                            <h4>This tome is built on the writings of the renowned wizard from the world of Greyhawk, gathered over a lifetime of research and scholarship. In his travels to other realms and other planes of existence, he has made many friends, and has risked his life an equal number of times, to amass the knowledge contained herein. In addition to Mordenkainen’s musings on the endless wars of the multiverse, the book contains game statistics for dozens of monsters: new demons and devils, several varieties of elves and duergar, and a vast array of other creatures from throughout the planes of existence.</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="title" onClick={() => toggle(7)}>
                            <Parallax translateY={[-20, 20]} speed={-10}>
                                <img src={book7} className="acc_image" alt="no"/>
                            </Parallax>
                            <div className="acc_name">Tasha's Cauldron of Everything</div>
                        </div>
                        <div className={selected === 7 ? 'acc_content show' : 'acc_content'}>
                            <h2>Tasha's Cauldron of Everything</h2>
                            <h4>A magical mixture of rules options for the world's greatest roleplaying game.</h4>
                            <h4>The wizard Tasha, whose great works include the spell Tasha’s hideous laughter, has gathered bits and bobs of precious lore during her illustrious career as an adventurer. Her enemies wouldn’t want these treasured secrets scattered across the multiverse, so in defiance, she has collected and codified these tidbits for the enrichment of all.</h4>
                            <ul>
                                <li><h4>EXPANDED SUBCLASSES. Try out subclass options for every Dungeons & Dragons class, including the artificer, which appears in the book.</h4></li>
                                <li><h4>MORE CHARACTER OPTIONS. Delve into a collection of new class features and new feats, and customize your character’s origin using straightforward rules for modifying a character’s racial traits.</h4></li>
                                <li><h4>INTRODUCING GROUP PATRONS. Whether you're part of the same criminal syndicate or working for an ancient dragon, each group patron option comes with its own perks and types of assignments.</h4></li>
                                <li><h4>SPELLS, ARTIFACTS & MAGIC TATTOOS. Discover more spells, as well as magic tattoos, artifacts, and other magic items for your campaign.</h4></li>
                                <li><h4>EXPANDED RULES OPTIONS. Try out rules for sidekicks, supernatural environments, natural hazards, and parleying with monsters, and gain guidance on running a session zero.</h4></li>
                                <li><h4>A PLETHORA OF PUZZLES. Ready to be dropped into any D&D adventure, puzzles of varied difficulty await your adventurers, complete with traps and guidance on using the puzzles in a campaign.</h4></li>
                            </ul>
                            <h4>Full of expanded content for players and Dungeon Masters alike, this book is a great addition to the Player's Handbook and the Dungeon Master’s Guide. Baked in you'll find more rule options for all the character classes in the Player's Handbook, including more subclass options. Thrown in for good measure is the artificer class, a master of magical invention. And this witch's brew wouldn't be complete without a dash of added artifacts, spellbook options, spells for both player characters and monsters, magical tattoos, group patrons, and other tasty goodies.</h4>
                            <h3>On the Cover</h3>
                            <h4>Spellbook in hand, the wizard Tasha casts a spell on a brew bubbling in her magic cauldron, in this painting by Magali Villeneuve.</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="title" onClick={() => toggle(8)}>
                            <Parallax translateY={[-20, 20]} speed={-10}>
                                <img src={book8} className="acc_image" alt="no"/>
                            </Parallax>
                            <div className="acc_name">Fizban's Treasury of Dragons</div>
                        </div>
                        <div className={selected === 8 ? 'acc_content show' : 'acc_content'}>
                            <h2>Fizban's Treasury of Dragons</h2>
                            <h4>Straight from the Dragon's Mouth</h4>
                            <h4>Discover how dragons embody magic across the worlds of D&D and how you can bring them to life at your table in this quintessential reference guide for the world’s greatest roleplaying game.</h4>
                            <h4>Meet Fizban the Fabulous: doddering archmage, unlikely hero of the War of the Lance, divine avatar of a dragon-god—and your guide to the mysteries of dragonkind in the worlds of Dungeons & Dragons.</h4>
                            <h4>What is the difference between a red dragon and a gold dragon? What is dragonsight? How does the magic that suffuses dragons impact the world around them? Here is your comprehensive guide to dragons, filled with the tips and tools Dungeon Masters and players need for their encounters with these dangerous magical creatures.</h4>
                            <h4>Dragonslayers and dragon scholars alike will appreciate the new dragon-themed options for players eager to harness the power of dragon magic and create unique and memorable draconic characters. Dungeon Masters will discover a rich hoard of new tools and information for designing dragon-themed encounters, adventures, and campaigns. Discover a host of new dragons and other creatures. Learn about the lairs and hoards of each type of dragon, and how hoards focus the magic that suffuses dragons and connects them to the myriad worlds of the Material Plane. Discover everything there is to know about the most iconic monsters of D&D with help from Fizban, your expert advisor on dragonkind!</h4>
                            <ul>
                                <li><h4>Introduces gem dragons to fifth edition!</h4></li>
                                <li><h4>Reveals the story of the First World and the role Bahamut and Tiamat played in its creation and destruction.</h4></li>
                                <li><h4>Adds new player character options, including unique draconic ancestries for dragonborn, dragon-themed subclasses for monks and rangers, and new feat and spell options.</h4></li>
                                <li><h4>Offers everything a Dungeon Master needs to craft adventures inspired by dragons across the worlds of D&D, with new dragon lair maps and details on 20 different kinds of dragons.</h4></li>
                                <li><h4>Presents a complete dragon bestiary and introduces a variety of new dragons and dragon-related creatures, including aspects of the dragon gods, dragon minions, and more.</h4></li>
                            </ul>
                            <h3>On the Cover</h3>
                            <h4>Fizban the Fabulous protects a group of innocents as a crystal dragon and a red dragon clash in the sky, in this painting by Chris Rahn.</h4>
                        </div>
                    </div>

                    <div className="item">
                        <div className="title" onClick={() => toggle(9)}>

                            <Parallax translateY={[-20, 20]} speed={-10}>

                                <img src={book9} className="acc_image" alt="no"/>

                            </Parallax>
                            <div className="acc_name">Mordenkainen Presents: Monsters of the Multiverse</div>
                        </div>
                        <div className={selected === 9 ? 'acc_content show' : 'acc_content'}>
                            <h2>Mordenkainen Presents: Monsters of the Multiverse</h2>
                            <h4>A bestiary of wondrous friends and foes for the world’s greatest roleplaying game.</h4>
                            <h4>Sparkling with the musings of the wizard Mordenkainen, this tome features a host of creatures for use in the Dungeons & Dragons roleplaying game. Hailing from every corner of the multiverse, these creatures represent some of the most benevolent and malevolent forces that D&D heroes might face.</h4>
                            <h4>The book also gathers together fantastical peoples from many different worlds. Each of these peoples represents a race option when you create your D&D character, expanding on the choices in the Player’s Handbook.</h4>
                            <h4>Compiling and updating monsters that originally appeared in Volo’s Guide to Monsters and Mordenkainen’s Tome of Foes, this book presents friends and foes for any D&D campaign, many of them accompanied by the comments of Mordenkainen. The wizard has faced many of these monsters and peoples on numerous wondrous adventures. Now it’s time for you to venture forth and face these creatures yourself!</h4>
                            <ul>
                                <li><h4>Includes over 250 monsters. Updates to the monsters include making spellcasters easier for Dungeon Masters to run; giving many monsters more damage and resilience; and improving the organization of the stat blocks themselves.</h4></li>
                                <li><h4>Includes over 30 playable races. Brings all the game’s setting-agnostic races into one book, complementing the races in the Player’s Handbook.</h4></li>
                                <li><h4>A multiverse of lore. Includes updates to monster lore that refocuses the stories on the D&D multiverse, rather than on any particular world.</h4></li>
                            </ul>
                            <h3>On the Cover</h3>
                            <h4>The wizard Mordenkainen soars through the Astral Plane astride a ki-rin—unaware of the astral dreadnought slinking toward them—in this painting by Grzegorz Rutkowski.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
}