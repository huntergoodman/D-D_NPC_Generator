//NPC stat variables
var npcNum1 = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
var npcNum2 = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
var npcNum3 = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
var npcNum4 = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
var npcNum5 = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
var npcNum6 = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];

//Random Stat opperators
var myNum1 = npcNum1[Math.floor(Math.random() * npcNum1.length)];
var myNum2 = npcNum2[Math.floor(Math.random() * npcNum2.length)];
var myNum3 = npcNum3[Math.floor(Math.random() * npcNum3.length)];
var myNum4 = npcNum4[Math.floor(Math.random() * npcNum4.length)];
var myNum5 = npcNum5[Math.floor(Math.random() * npcNum5.length)];
var myNum6 = npcNum6[Math.floor(Math.random() * npcNum6.length)];

//Male Dwarf Constructor
var dwarfNameMale = ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Breunor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Viet', 'Vondal'];
var myMDName = dwarfNameMale[Math.floor(Math.random() * dwarfNameMale.length)];
var dwarfClanName = ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frosbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgeher', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'];
var myDClanName = dwarfClanName[Math.floor(Math.random() * dwarfClanName.length)];
var npcAppearance = ['Distinctive jewlery: earrings, necklace, circlet, bracelets', 'Piercings', 'Flamboyant or outlandish clothes', 'Formal clean clothes', 'Ragged dirty clothes', 'Pronounced scar', 'Missing teeth', 'missing fingers', 'unusual eye color(or two different colors)', 'Tattoos', 'Birthmark', 'Unusual skin color', 'Bald', 'Braided beard or hair', 'Unusual hair color', 'Nervious eye twitch', 'Distinctive nose', 'Distinctive posture(crooked or ridged)', 'Exceptionally beautiful', 'Exeptionally ugly'];
var myNpcAppearance = npcAppearance[Math.floor(Math.random() * npcAppearance.length)];
var npcStrongAbilities = ['Strength--powerful brawny, strong as an ox', 'Dexterity--lithe, agile, graceful', 'Constitiution--hardy, hale, healthy', 'Intelligence--studious, learned, inquisitive', 'Wisdom--perceptive, spiritual, insightful', 'Charisma--persuasive, forceful, born leader'];
var myNpcSA = npcStrongAbilities[Math.floor(Math.random() * npcStrongAbilities.length)];
var npcWeakAbilities = ['Strength--feeble, scrawny', 'Dexterity--clumsy, fumbling', 'Constitiution--sickly, pale', 'Intelligence--dim-witted, slow', 'Wisdom--oblivious, abstentminded', 'Charisma--dull, boring'];
var myNpcWA = npcWeakAbilities[Math.floor(Math.random() * npcWeakAbilities.length)];
var npcTalents = ['Plays a musical instrument', 'Speaks several languages fluently', 'Unbelieveably lucky', 'Perfect memory', 'Great with animals', 'Great with children', 'Great at solving puzzles', 'Great at impersonations', 'Draws beautifully', 'Paints beautifully', 'Sings beautifully', 'Drinks everyone under the table', 'Expert carpenter', 'Expert cook', 'Expert dart thrower and rock skipper', 'Expert Juggler', 'Skilled actor and master of disguise', 'skilled dancer', 'Known theive\'s cant'];
var myNpcT = npcTalents[Math.floor(Math.random() * npcTalents.length)];
var npcMannerisms = ['Prone to singing, whistling, or humming quietly', 'Speaks in rhyme or some other peculiar way.', 'Particularly low or high voice', 'Slurs words, lisps, or stutters', 'Enunciates overly clearly', 'Speaks loudly', 'Whispers', 'Uses flowery speech or long words', 'Frequently uses the wrong word', 'Makes constant jokes or puns', 'Prone to predictions of doom', 'Fidgets', 'Squints', 'Stares into the distance', 'Chews something', 'Paces', 'Taps fingers', 'Bites fingernails', 'Twirls hair or tugs beard.'];
var myNpcM = npcMannerisms[Math.floor(Math.random() * npcMannerisms.length)];
var npcInteractionTraits = ['Argumentative', 'Arrogant', 'Blustering', 'Rude', 'Curious', 'Friendly', 'Honest', 'Hot Tempered', 'Irritable', 'Ponderous', 'Quiet', 'Suspicious'];
var myNpcIT = npcInteractionTraits[Math.floor(Math.random() * npcInteractionTraits.length)];
var npcIdeals = ['Beauty(Good)', 'Community(Lawful)', 'Balance(Neutral)', 'Domination(Evil)', 'Change(Chaotic)', 'Aspiration(Other)', 'Charity(Good)', 'Fairness(Lawful)', 'Knowledge(Neutral)', 'Greed(Evil)', 'Creativity(Chaotic)', 'Discovery(Other)', 'Greater Good(Good)', 'Honor(Lawful)', 'Live and let live(Neutral)', 'Might(Evil)', 'Freedom(Chaotic)', 'Glory(Other)', 'Life(Good)', 'Logic(Lawful)', 'Moderation(Neutral)', 'Pain(Evil)', 'Independence(Chaotic)', 'Nation(Other)', 'Respect(Good)', 'Responsibility(Lawful)', 'Neutrality(Neutral)', 'Retribution(Evil)', 'No Limits(Chaotic)', 'Redemption(Other)', 'Self-sacrifice(Good)', 'Tradition(Lawful)', 'People(Neutral)', 'Slaughter(Evil)', 'Whimsy(Chaotic)', 'Self-knowledge(Other)'];
var myNpcI = npcIdeals[Math.floor(Math.random() * npcIdeals.length)];
var npcBonds = ['Dedicated to fufilling a personal life goal.', 'Protective of close family members.', 'Protective of colleagues or compatriots.', 'Loyal to a benefactor, patron, or employer.', 'Captivated by a romatic intrest.', 'Drawn to a special place.', 'Protective of a sentimental keepsake', 'Protective of a valuable possesion', 'Out for revenge.'];
var myNpcB = npcBonds[Math.floor(Math.random() * npcBonds.length)];
var npcFlawsAndSecrets = ['Forbidden love or susceptability to romance.', 'Enjoys decadent pleasures.', 'Arrogance', 'Envies another creatur\'s possessions or station.', 'Overpowering greed.', 'Prone to rage', 'Has a powerful enemy.', 'Specific phobia.', 'Shameful or scandalous history.', 'Secret crime or misdeed.', 'Possession of forbidden lore.', 'Foolhardy bravery.'];
var myNpcFS = npcFlawsAndSecrets[Math.floor(Math.random() * npcFlawsAndSecrets.length)];


//Female Dwarf Constructor
var dwarfNameFemale = ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldith', 'Falkrunn', 'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', "Riswynn", 'Sannl', 'Torbera', 'Torgga', 'Vistra'];
var myFDName = dwarfNameFemale[Math.floor(Math.random() * dwarfNameFemale.length)];
var dwarfClanName = ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frosbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgeher', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'];
var myDClanName = dwarfClanName[Math.floor(Math.random() * dwarfClanName.length)];
var npcAppearance2 = ['Distinctive jewlery: earrings, necklace, circlet, bracelets', 'Piercings', 'Flamboyant or outlandish clothes', 'Formal clean clothes', 'Ragged dirty clothes', 'Pronounced scar', 'Missing teeth', 'missing fingers', 'unusual eye color(or two different colors)', 'Tattoos', 'Birthmark', 'Unusual skin color', 'Bald', 'Braided beard or hair', 'Unusual hair color', 'Nervious eye twitch', 'Distinctive nose', 'Distinctive posture(crooked or ridged)', 'Exceptionally beautiful', 'Exeptionally ugly'];
var myNpcAppearance2 = npcAppearance2[Math.floor(Math.random() * npcAppearance2.length)];
var npcStrongAbilities2 = ['Strength--powerful brawny, strong as an ox', 'Dexterity--lithe, agile, graceful', 'Constitiution--hardy, hale, healthy', 'Intelligence--studious, learned, inquisitive', 'Wisdom--perceptive, spiritual, insightful', 'Charisma--persuasive, forceful, born leader'];
var myNpcSA2 = npcStrongAbilities2[Math.floor(Math.random() * npcStrongAbilities2.length)];
var npcWeakAbilities2 = ['Strength--feeble, scrawny', 'Dexterity--clumsy, fumbling', 'Constitiution--sickly, pale', 'Intelligence--dim-witted, slow', 'Wisdom--oblivious, abstentminded', 'Charisma--dull, boring'];
var myNpcWA2 = npcWeakAbilities2[Math.floor(Math.random() * npcWeakAbilities2.length)];
var npcTalents2 = ['Plays a musical instrument', 'Speaks several languages fluently', 'Unbelieveably lucky', 'Perfect memory', 'Great with animals', 'Great with children', 'Great at solving puzzles', 'Great at impersonations', 'Draws beautifully', 'Paints beautifully', 'Sings beautifully', 'Drinks everyone under the table', 'Expert carpenter', 'Expert cook', 'Expert dart thrower and rock skipper', 'Expert Juggler', 'Skilled actor and master of disguise', 'skilled dancer', 'Known theive\'s cant'];
var myNpcT2 = npcTalents2[Math.floor(Math.random() * npcTalents.length)];
var npcMannerisms2 = ['Prone to singing, whistling, or humming quietly', 'Speaks in rhyme or some other peculiar way.', 'Particularly low or high voice', 'Slurs words, lisps, or stutters', 'Enunciates overly clearly', 'Speaks loudly', 'Whispers', 'Uses flowery speech or long words', 'Frequently uses the wrong word', 'Makes constant jokes or puns', 'Prone to predictions of doom', 'Fidgets', 'Squints', 'Stares into the distance', 'Chews something', 'Paces', 'Taps fingers', 'Bites fingernails', 'Twirls hair or tugs beard.'];
var myNpcM2 = npcMannerisms2[Math.floor(Math.random() * npcMannerisms2.length)];
var npcInteractionTraits2 = ['Argumentative', 'Arrogant', 'Blustering', 'Rude', 'Curious', 'Friendly', 'Honest', 'Hot Tempered', 'Irritable', 'Ponderous', 'Quiet', 'Suspicious'];
var myNpcIT2 = npcInteractionTraits2[Math.floor(Math.random() * npcInteractionTraits2.length)];
var npcIdeals2 = ['Beauty(Good)', 'Community(Lawful)', 'Balance(Neutral)', 'Domination(Evil)', 'Change(Chaotic)', 'Aspiration(Other)', 'Charity(Good)', 'Fairness(Lawful)', 'Knowledge(Neutral)', 'Greed(Evil)', 'Creativity(Chaotic)', 'Discovery(Other)', 'Greater Good(Good)', 'Honor(Lawful)', 'Live and let live(Neutral)', 'Might(Evil)', 'Freedom(Chaotic)', 'Glory(Other)', 'Life(Good)', 'Logic(Lawful)', 'Moderation(Neutral)', 'Pain(Evil)', 'Independence(Chaotic)', 'Nation(Other)', 'Respect(Good)', 'Responsibility(Lawful)', 'Neutrality(Neutral)', 'Retribution(Evil)', 'No Limits(Chaotic)', 'Redemption(Other)', 'Self-sacrifice(Good)', 'Tradition(Lawful)', 'People(Neutral)', 'Slaughter(Evil)', 'Whimsy(Chaotic)', 'Self-knowledge(Other)'];
var myNpcI2 = npcIdeals2[Math.floor(Math.random() * npcIdeals2.length)];
var npcBonds2 = ['Dedicated to fufilling a personal life goal.', 'Protective of close family members.', 'Protective of colleagues or compatriots.', 'Loyal to a benefactor, patron, or employer.', 'Captivated by a romatic intrest.', 'Drawn to a special place.', 'Protective of a sentimental keepsake', 'Protective of a valuable possesion', 'Out for revenge.'];
var myNpcB2 = npcBonds2[Math.floor(Math.random() * npcBonds2.length)];
var npcFlawsAndSecrets2 = ['Forbidden love or susceptability to romance.', 'Enjoys decadent pleasures.', 'Arrogance', 'Envies another creatur\'s possessions or station.', 'Overpowering greed.', 'Prone to rage', 'Has a powerful enemy.', 'Specific phobia.', 'Shameful or scandalous history.', 'Secret crime or misdeed.', 'Possession of forbidden lore.', 'Foolhardy bravery.'];
var myNpcFS2 = npcFlawsAndSecrets2[Math.floor(Math.random() * npcFlawsAndSecrets2.length)];


//Male Elf Constructor
var elfMaleNames = ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Berrian', 'Carric', 'Enialis', 'Erevan', 'Galinndan', 'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelaias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'];
var myMEName = elfMaleNames[Math.floor(Math.random() * elfMaleNames.length)];
var elfFamilyNames = ['Amakiir(Gemflower)', 'Amastacia(Starflower)', 'Galanodel(Moonwhisper)', 'Holimion(Diamonddew)', 'Ilphelkiir(Gemblossom)', 'Liadon(Silverfrond)', 'Meliamne(Oakenheel)', 'Nal&#x457o(Nightbreeze)', 'Siannodel(Moonbrook)', 'Xiloscient(Goldpetal)'];
var myEFN = elfFamilyNames[Math.floor(Math.random() * elfFamilyNames.length)];
var npcAppearance3 = ['Distinctive jewlery: earrings, necklace, circlet, bracelets', 'Piercings', 'Flamboyant or outlandish clothes', 'Formal clean clothes', 'Ragged dirty clothes', 'Pronounced scar', 'Missing teeth', 'missing fingers', 'unusual eye color(or two different colors)', 'Tattoos', 'Birthmark', 'Unusual skin color', 'Bald', 'Braided beard or hair', 'Unusual hair color', 'Nervious eye twitch', 'Distinctive nose', 'Distinctive posture(crooked or ridged)', 'Exceptionally beautiful', 'Exeptionally ugly'];
var myNpcAppearance3 = npcAppearance3[Math.floor(Math.random() * npcAppearance3.length)];
var npcStrongAbilities3 = ['Strength--powerful brawny, strong as an ox', 'Dexterity--lithe, agile, graceful', 'Constitiution--hardy, hale, healthy', 'Intelligence--studious, learned, inquisitive', 'Wisdom--perceptive, spiritual, insightful', 'Charisma--persuasive, forceful, born leader'];
var myNpcSA3 = npcStrongAbilities3[Math.floor(Math.random() * npcStrongAbilities3.length)];
var npcWeakAbilities3 = ['Strength--feeble, scrawny', 'Dexterity--clumsy, fumbling', 'Constitiution--sickly, pale', 'Intelligence--dim-witted, slow', 'Wisdom--oblivious, abstentminded', 'Charisma--dull, boring'];
var myNpcWA3 = npcWeakAbilities3[Math.floor(Math.random() * npcWeakAbilities3.length)];
var npcTalents3 = ['Plays a musical instrument', 'Speaks several languages fluently', 'Unbelieveably lucky', 'Perfect memory', 'Great with animals', 'Great with children', 'Great at solving puzzles', 'Great at impersonations', 'Draws beautifully', 'Paints beautifully', 'Sings beautifully', 'Drinks everyone under the table', 'Expert carpenter', 'Expert cook', 'Expert dart thrower and rock skipper', 'Expert Juggler', 'Skilled actor and master of disguise', 'skilled dancer', 'Known theive\'s cant'];
var myNpcT3 = npcTalents3[Math.floor(Math.random() * npcTalents3.length)];
var npcMannerisms3 = ['Prone to singing, whistling, or humming quietly', 'Speaks in rhyme or some other peculiar way.', 'Particularly low or high voice', 'Slurs words, lisps, or stutters', 'Enunciates overly clearly', 'Speaks loudly', 'Whispers', 'Uses flowery speech or long words', 'Frequently uses the wrong word', 'Makes constant jokes or puns', 'Prone to predictions of doom', 'Fidgets', 'Squints', 'Stares into the distance', 'Chews something', 'Paces', 'Taps fingers', 'Bites fingernails', 'Twirls hair or tugs beard.'];
var myNpcM3 = npcMannerisms3[Math.floor(Math.random() * npcMannerisms3.length)];
var npcInteractionTraits3 = ['Argumentative', 'Arrogant', 'Blustering', 'Rude', 'Curious', 'Friendly', 'Honest', 'Hot Tempered', 'Irritable', 'Ponderous', 'Quiet', 'Suspicious'];
var myNpcIT3 = npcInteractionTraits3[Math.floor(Math.random() * npcInteractionTraits3.length)];
var npcIdeals3 = ['Beauty(Good)', 'Community(Lawful)', 'Balance(Neutral)', 'Domination(Evil)', 'Change(Chaotic)', 'Aspiration(Other)', 'Charity(Good)', 'Fairness(Lawful)', 'Knowledge(Neutral)', 'Greed(Evil)', 'Creativity(Chaotic)', 'Discovery(Other)', 'Greater Good(Good)', 'Honor(Lawful)', 'Live and let live(Neutral)', 'Might(Evil)', 'Freedom(Chaotic)', 'Glory(Other)', 'Life(Good)', 'Logic(Lawful)', 'Moderation(Neutral)', 'Pain(Evil)', 'Independence(Chaotic)', 'Nation(Other)', 'Respect(Good)', 'Responsibility(Lawful)', 'Neutrality(Neutral)', 'Retribution(Evil)', 'No Limits(Chaotic)', 'Redemption(Other)', 'Self-sacrifice(Good)', 'Tradition(Lawful)', 'People(Neutral)', 'Slaughter(Evil)', 'Whimsy(Chaotic)', 'Self-knowledge(Other)'];
var myNpcI3 = npcIdeals3[Math.floor(Math.random() * npcIdeals3.length)];
var npcBonds3 = ['Dedicated to fufilling a personal life goal.', 'Protective of close family members.', 'Protective of colleagues or compatriots.', 'Loyal to a benefactor, patron, or employer.', 'Captivated by a romatic intrest.', 'Drawn to a special place.', 'Protective of a sentimental keepsake', 'Protective of a valuable possesion', 'Out for revenge.'];
var myNpcB3 = npcBonds3[Math.floor(Math.random() * npcBonds3.length)];
var npcFlawsAndSecrets3 = ['Forbidden love or susceptability to romance.', 'Enjoys decadent pleasures.', 'Arrogance', 'Envies another creatur\'s possessions or station.', 'Overpowering greed.', 'Prone to rage', 'Has a powerful enemy.', 'Specific phobia.', 'Shameful or scandalous history.', 'Secret crime or misdeed.', 'Possession of forbidden lore.', 'Foolhardy bravery.'];
var myNpcFS3 = npcFlawsAndSecrets3[Math.floor(Math.random() * npcFlawsAndSecrets3.length)];


//Female Elf Constructor
var elfFemaleNames = ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel', 'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'];
var myFEName = elfFemaleNames[Math.floor(Math.random() * elfFemaleNames.length)];
var elfFamilyNames = ['Amakiir(Gemflower)', 'Amastacia(Starflower)', 'Galanodel(Moonwhisper)', 'Holimion(Diamonddew)', 'Ilphelkiir(Gemblossom)', 'Liadon(Silverfrond)', 'Meliamne(Oakenheel)', 'Nal&#x457o(Nightbreeze)', 'Siannodel(Moonbrook)', 'Xiloscient(Goldpetal)'];
var myEFN = elfFamilyNames[Math.floor(Math.random() * elfFamilyNames.length)];
var npcAppearance4 = ['Distinctive jewlery: earrings, necklace, circlet, bracelets', 'Piercings', 'Flamboyant or outlandish clothes', 'Formal clean clothes', 'Ragged dirty clothes', 'Pronounced scar', 'Missing teeth', 'missing fingers', 'unusual eye color(or two different colors)', 'Tattoos', 'Birthmark', 'Unusual skin color', 'Bald', 'Braided beard or hair', 'Unusual hair color', 'Nervious eye twitch', 'Distinctive nose', 'Distinctive posture(crooked or ridged)', 'Exceptionally beautiful', 'Exeptionally ugly'];
var myNpcAppearance4 = npcAppearance4[Math.floor(Math.random() * npcAppearance4.length)];
var npcStrongAbilities4 = ['Strength--powerful brawny, strong as an ox', 'Dexterity--lithe, agile, graceful', 'Constitiution--hardy, hale, healthy', 'Intelligence--studious, learned, inquisitive', 'Wisdom--perceptive, spiritual, insightful', 'Charisma--persuasive, forceful, born leader'];
var myNpcSA4 = npcStrongAbilities4[Math.floor(Math.random() * npcStrongAbilities4.length)];
var npcWeakAbilities4 = ['Strength--feeble, scrawny', 'Dexterity--clumsy, fumbling', 'Constitiution--sickly, pale', 'Intelligence--dim-witted, slow', 'Wisdom--oblivious, abstentminded', 'Charisma--dull, boring'];
var myNpcWA4 = npcWeakAbilities4[Math.floor(Math.random() * npcWeakAbilities4.length)];
var npcTalents4 = ['Plays a musical instrument', 'Speaks several languages fluently', 'Unbelieveably lucky', 'Perfect memory', 'Great with animals', 'Great with children', 'Great at solving puzzles', 'Great at impersonations', 'Draws beautifully', 'Paints beautifully', 'Sings beautifully', 'Drinks everyone under the table', 'Expert carpenter', 'Expert cook', 'Expert dart thrower and rock skipper', 'Expert Juggler', 'Skilled actor and master of disguise', 'skilled dancer', 'Known theive\'s cant'];
var myNpcT4 = npcTalents4[Math.floor(Math.random() * npcTalents4.length)];
var npcMannerisms4 = ['Prone to singing, whistling, or humming quietly', 'Speaks in rhyme or some other peculiar way.', 'Particularly low or high voice', 'Slurs words, lisps, or stutters', 'Enunciates overly clearly', 'Speaks loudly', 'Whispers', 'Uses flowery speech or long words', 'Frequently uses the wrong word', 'Makes constant jokes or puns', 'Prone to predictions of doom', 'Fidgets', 'Squints', 'Stares into the distance', 'Chews something', 'Paces', 'Taps fingers', 'Bites fingernails', 'Twirls hair or tugs beard.'];
var myNpcM4 = npcMannerisms4[Math.floor(Math.random() * npcMannerisms4.length)];
var npcInteractionTraits4 = ['Argumentative', 'Arrogant', 'Blustering', 'Rude', 'Curious', 'Friendly', 'Honest', 'Hot Tempered', 'Irritable', 'Ponderous', 'Quiet', 'Suspicious'];
var myNpcIT4 = npcInteractionTraits4[Math.floor(Math.random() * npcInteractionTraits4.length)];
var npcIdeals4 = ['Beauty(Good)', 'Community(Lawful)', 'Balance(Neutral)', 'Domination(Evil)', 'Change(Chaotic)', 'Aspiration(Other)', 'Charity(Good)', 'Fairness(Lawful)', 'Knowledge(Neutral)', 'Greed(Evil)', 'Creativity(Chaotic)', 'Discovery(Other)', 'Greater Good(Good)', 'Honor(Lawful)', 'Live and let live(Neutral)', 'Might(Evil)', 'Freedom(Chaotic)', 'Glory(Other)', 'Life(Good)', 'Logic(Lawful)', 'Moderation(Neutral)', 'Pain(Evil)', 'Independence(Chaotic)', 'Nation(Other)', 'Respect(Good)', 'Responsibility(Lawful)', 'Neutrality(Neutral)', 'Retribution(Evil)', 'No Limits(Chaotic)', 'Redemption(Other)', 'Self-sacrifice(Good)', 'Tradition(Lawful)', 'People(Neutral)', 'Slaughter(Evil)', 'Whimsy(Chaotic)', 'Self-knowledge(Other)'];
var myNpcI4 = npcIdeals4[Math.floor(Math.random() * npcIdeals4.length)];
var npcBonds4 = ['Dedicated to fufilling a personal life goal.', 'Protective of close family members.', 'Protective of colleagues or compatriots.', 'Loyal to a benefactor, patron, or employer.', 'Captivated by a romatic intrest.', 'Drawn to a special place.', 'Protective of a sentimental keepsake', 'Protective of a valuable possesion', 'Out for revenge.'];
var myNpcB4 = npcBonds4[Math.floor(Math.random() * npcBonds4.length)];
var npcFlawsAndSecrets4 = ['Forbidden love or susceptability to romance.', 'Enjoys decadent pleasures.', 'Arrogance', 'Envies another creatur\'s possessions or station.', 'Overpowering greed.', 'Prone to rage', 'Has a powerful enemy.', 'Specific phobia.', 'Shameful or scandalous history.', 'Secret crime or misdeed.', 'Possession of forbidden lore.', 'Foolhardy bravery.'];
var myNpcFS4 = npcFlawsAndSecrets4[Math.floor(Math.random() * npcFlawsAndSecrets4.length)];


//Male Halfling Constructor
var halflingMaleNames = ['Alton', 'Ander', 'Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby'];
var myHMName = halflingMaleNames[Math.floor(Math.random() * halflingMaleNames.length)];
var halflingFamilyNames = ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough'];
var myHFName = halflingFamilyNames[Math.floor(Math.random() * halflingFamilyNames.length)];
var npcAppearance5 = ['Distinctive jewlery: earrings, necklace, circlet, bracelets', 'Piercings', 'Flamboyant or outlandish clothes', 'Formal clean clothes', 'Ragged dirty clothes', 'Pronounced scar', 'Missing teeth', 'missing fingers', 'unusual eye color(or two different colors)', 'Tattoos', 'Birthmark', 'Unusual skin color', 'Bald', 'Braided beard or hair', 'Unusual hair color', 'Nervious eye twitch', 'Distinctive nose', 'Distinctive posture(crooked or ridged)', 'Exceptionally beautiful', 'Exeptionally ugly'];
var myNpcAppearance5 = npcAppearance5[Math.floor(Math.random() * npcAppearance5.length)];
var npcStrongAbilities5 = ['Strength--powerful brawny, strong as an ox', 'Dexterity--lithe, agile, graceful', 'Constitiution--hardy, hale, healthy', 'Intelligence--studious, learned, inquisitive', 'Wisdom--perceptive, spiritual, insightful', 'Charisma--persuasive, forceful, born leader'];
var myNpcSA5 = npcStrongAbilities5[Math.floor(Math.random() * npcStrongAbilities5.length)];
var npcWeakAbilities5 = ['Strength--feeble, scrawny', 'Dexterity--clumsy, fumbling', 'Constitiution--sickly, pale', 'Intelligence--dim-witted, slow', 'Wisdom--oblivious, abstentminded', 'Charisma--dull, boring'];
var myNpcWA5 = npcWeakAbilities5[Math.floor(Math.random() * npcWeakAbilities5.length)];
var npcTalents5 = ['Plays a musical instrument', 'Speaks several languages fluently', 'Unbelieveably lucky', 'Perfect memory', 'Great with animals', 'Great with children', 'Great at solving puzzles', 'Great at impersonations', 'Draws beautifully', 'Paints beautifully', 'Sings beautifully', 'Drinks everyone under the table', 'Expert carpenter', 'Expert cook', 'Expert dart thrower and rock skipper', 'Expert Juggler', 'Skilled actor and master of disguise', 'skilled dancer', 'Known theive\'s cant'];
var myNpcT5 = npcTalents5[Math.floor(Math.random() * npcTalents5.length)];
var npcMannerisms5 = ['Prone to singing, whistling, or humming quietly', 'Speaks in rhyme or some other peculiar way.', 'Particularly low or high voice', 'Slurs words, lisps, or stutters', 'Enunciates overly clearly', 'Speaks loudly', 'Whispers', 'Uses flowery speech or long words', 'Frequently uses the wrong word', 'Makes constant jokes or puns', 'Prone to predictions of doom', 'Fidgets', 'Squints', 'Stares into the distance', 'Chews something', 'Paces', 'Taps fingers', 'Bites fingernails', 'Twirls hair or tugs beard.'];
var myNpcM5 = npcMannerisms5[Math.floor(Math.random() * npcMannerisms5.length)];
var npcInteractionTraits5 = ['Argumentative', 'Arrogant', 'Blustering', 'Rude', 'Curious', 'Friendly', 'Honest', 'Hot Tempered', 'Irritable', 'Ponderous', 'Quiet', 'Suspicious'];
var myNpcIT5 = npcInteractionTraits5[Math.floor(Math.random() * npcInteractionTraits5.length)];
var npcIdeals5 = ['Beauty(Good)', 'Community(Lawful)', 'Balance(Neutral)', 'Domination(Evil)', 'Change(Chaotic)', 'Aspiration(Other)', 'Charity(Good)', 'Fairness(Lawful)', 'Knowledge(Neutral)', 'Greed(Evil)', 'Creativity(Chaotic)', 'Discovery(Other)', 'Greater Good(Good)', 'Honor(Lawful)', 'Live and let live(Neutral)', 'Might(Evil)', 'Freedom(Chaotic)', 'Glory(Other)', 'Life(Good)', 'Logic(Lawful)', 'Moderation(Neutral)', 'Pain(Evil)', 'Independence(Chaotic)', 'Nation(Other)', 'Respect(Good)', 'Responsibility(Lawful)', 'Neutrality(Neutral)', 'Retribution(Evil)', 'No Limits(Chaotic)', 'Redemption(Other)', 'Self-sacrifice(Good)', 'Tradition(Lawful)', 'People(Neutral)', 'Slaughter(Evil)', 'Whimsy(Chaotic)', 'Self-knowledge(Other)'];
var myNpcI5 = npcIdeals5[Math.floor(Math.random() * npcIdeals5.length)];
var npcBonds5 = ['Dedicated to fufilling a personal life goal.', 'Protective of close family members.', 'Protective of colleagues or compatriots.', 'Loyal to a benefactor, patron, or employer.', 'Captivated by a romatic intrest.', 'Drawn to a special place.', 'Protective of a sentimental keepsake', 'Protective of a valuable possesion', 'Out for revenge.'];
var myNpcB5 = npcBonds5[Math.floor(Math.random() * npcBonds5.length)];
var npcFlawsAndSecrets5 = ['Forbidden love or susceptability to romance.', 'Enjoys decadent pleasures.', 'Arrogance', 'Envies another creatur\'s possessions or station.', 'Overpowering greed.', 'Prone to rage', 'Has a powerful enemy.', 'Specific phobia.', 'Shameful or scandalous history.', 'Secret crime or misdeed.', 'Possession of forbidden lore.', 'Foolhardy bravery.'];
var myNpcFS5 = npcFlawsAndSecrets5[Math.floor(Math.random() * npcFlawsAndSecrets5.length)];


//Female Halfling Constructor
var halflingFemaleNames = ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla', 'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna'];
var myHalflingFemaleName = halflingFemaleNames[Math.floor(Math.random() * halflingFemaleNames.length)];
var halflingFamilyNames = ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough'];
var myHFName = halflingFamilyNames[Math.floor(Math.random() * halflingFamilyNames.length)];
var npcAppearance6 = ['Distinctive jewlery: earrings, necklace, circlet, bracelets', 'Piercings', 'Flamboyant or outlandish clothes', 'Formal clean clothes', 'Ragged dirty clothes', 'Pronounced scar', 'Missing teeth', 'missing fingers', 'unusual eye color(or two different colors)', 'Tattoos', 'Birthmark', 'Unusual skin color', 'Bald', 'Braided beard or hair', 'Unusual hair color', 'Nervious eye twitch', 'Distinctive nose', 'Distinctive posture(crooked or ridged)', 'Exceptionally beautiful', 'Exeptionally ugly'];
var myNpcAppearance6 = npcAppearance6[Math.floor(Math.random() * npcAppearance6.length)];
var npcStrongAbilities6 = ['Strength--powerful brawny, strong as an ox', 'Dexterity--lithe, agile, graceful', 'Constitiution--hardy, hale, healthy', 'Intelligence--studious, learned, inquisitive', 'Wisdom--perceptive, spiritual, insightful', 'Charisma--persuasive, forceful, born leader'];
var myNpcSA6 = npcStrongAbilities6[Math.floor(Math.random() * npcStrongAbilities6.length)];
var npcWeakAbilities6 = ['Strength--feeble, scrawny', 'Dexterity--clumsy, fumbling', 'Constitiution--sickly, pale', 'Intelligence--dim-witted, slow', 'Wisdom--oblivious, abstentminded', 'Charisma--dull, boring'];
var myNpcWA6 = npcWeakAbilities6[Math.floor(Math.random() * npcWeakAbilities6.length)];
var npcTalents6 = ['Plays a musical instrument', 'Speaks several languages fluently', 'Unbelieveably lucky', 'Perfect memory', 'Great with animals', 'Great with children', 'Great at solving puzzles', 'Great at impersonations', 'Draws beautifully', 'Paints beautifully', 'Sings beautifully', 'Drinks everyone under the table', 'Expert carpenter', 'Expert cook', 'Expert dart thrower and rock skipper', 'Expert Juggler', 'Skilled actor and master of disguise', 'skilled dancer', 'Known theive\'s cant'];
var myNpcT6 = npcTalents6[Math.floor(Math.random() * npcTalents6.length)];
var npcMannerisms6 = ['Prone to singing, whistling, or humming quietly', 'Speaks in rhyme or some other peculiar way.', 'Particularly low or high voice', 'Slurs words, lisps, or stutters', 'Enunciates overly clearly', 'Speaks loudly', 'Whispers', 'Uses flowery speech or long words', 'Frequently uses the wrong word', 'Makes constant jokes or puns', 'Prone to predictions of doom', 'Fidgets', 'Squints', 'Stares into the distance', 'Chews something', 'Paces', 'Taps fingers', 'Bites fingernails', 'Twirls hair or tugs beard.'];
var myNpcM6 = npcMannerisms6[Math.floor(Math.random() * npcMannerisms6.length)];
var npcInteractionTraits6 = ['Argumentative', 'Arrogant', 'Blustering', 'Rude', 'Curious', 'Friendly', 'Honest', 'Hot Tempered', 'Irritable', 'Ponderous', 'Quiet', 'Suspicious'];
var myNpcIT6 = npcInteractionTraits6[Math.floor(Math.random() * npcInteractionTraits6.length)];
var npcIdeals6 = ['Beauty(Good)', 'Community(Lawful)', 'Balance(Neutral)', 'Domination(Evil)', 'Change(Chaotic)', 'Aspiration(Other)', 'Charity(Good)', 'Fairness(Lawful)', 'Knowledge(Neutral)', 'Greed(Evil)', 'Creativity(Chaotic)', 'Discovery(Other)', 'Greater Good(Good)', 'Honor(Lawful)', 'Live and let live(Neutral)', 'Might(Evil)', 'Freedom(Chaotic)', 'Glory(Other)', 'Life(Good)', 'Logic(Lawful)', 'Moderation(Neutral)', 'Pain(Evil)', 'Independence(Chaotic)', 'Nation(Other)', 'Respect(Good)', 'Responsibility(Lawful)', 'Neutrality(Neutral)', 'Retribution(Evil)', 'No Limits(Chaotic)', 'Redemption(Other)', 'Self-sacrifice(Good)', 'Tradition(Lawful)', 'People(Neutral)', 'Slaughter(Evil)', 'Whimsy(Chaotic)', 'Self-knowledge(Other)'];
var myNpcI6 = npcIdeals6[Math.floor(Math.random() * npcIdeals6.length)];
var npcBonds6 = ['Dedicated to fufilling a personal life goal.', 'Protective of close family members.', 'Protective of colleagues or compatriots.', 'Loyal to a benefactor, patron, or employer.', 'Captivated by a romatic intrest.', 'Drawn to a special place.', 'Protective of a sentimental keepsake', 'Protective of a valuable possesion', 'Out for revenge.'];
var myNpcB6 = npcBonds6[Math.floor(Math.random() * npcBonds6.length)];
var npcFlawsAndSecrets6 = ['Forbidden love or susceptability to romance.', 'Enjoys decadent pleasures.', 'Arrogance', 'Envies another creatur\'s possessions or station.', 'Overpowering greed.', 'Prone to rage', 'Has a powerful enemy.', 'Specific phobia.', 'Shameful or scandalous history.', 'Secret crime or misdeed.', 'Possession of forbidden lore.', 'Foolhardy bravery.'];
var myNpcFS6 = npcFlawsAndSecrets6[Math.floor(Math.random() * npcFlawsAndSecrets6.length)];

//Calishite Male Constructor
var calishiteMaleNames = ['Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir'];
var calishiteSurnames = ['Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein'];
var myCalishiteMaleName = calishiteMaleNames[Math.floor(Math.random() * calishiteMaleNames.length)];
var myCalishiteSurname = calishiteSurnames[Math.floor(Math.random() * calishiteSurnames.length)];

//Calisite Female Constructor
var calishiteFemaleNames = ['Atala', 'Ceidil', 'Hama', 'Jasmal', 'Meilil', 'Seipora', 'Yaheira', 'Zasheida'];
var calishiteSurnames = ['Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein'];
var myCalishiteFemaleName = calishiteFemaleNames[Math.floor(Math.random() * calishiteFemaleNames.length)];
var myCalishiteSurname = calishiteSurnames[Math.floor(Math.random() * calishiteSurnames.length)];

//Chondathan Male Constructor
var chondathanMaleNames = ['Darvin', 'Dorn', 'Evendur', 'Gorgstag', 'Grim', 'Helm', 'Malark', 'Morn', 'Randal', 'Stedd'];
var myChondathanMale = chondathanMaleNames[Math.floor(Math.random() * chondathanMaleNames.length)];
var chondathanSurnames = ['Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag'];
var myChondathanSurname = chondathanSurnames[Math.floor(Math.random() * chondathanSurnames.length)];

//Chondathan Female Constructor
var chondathanFemaleNames = ['Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele'];
var myChondathanFemale = chondathanFemaleNames[Math.floor(Math.random() * chondathanFemaleNames.length)];
var chondathanSurnames = ['Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag'];
var myChondathanSurname = chondathanSurnames[Math.floor(Math.random() * chondathanSurnames.length)];


//file open functions
function maleDwarf() {
    window.open('file:///home/chronos/u-7bd9acf60573c8c3097a7ccd3eb7ddb47f346a65/MyFiles/Downloads/Code/D-D_NPC_Generator-master/races/Male_Dwarf.html');
}

function femaleDwarf() {
    window.open('file:///home/chronos/u-7bd9acf60573c8c3097a7ccd3eb7ddb47f346a65/MyFiles/Downloads/Code/D-D_NPC_Generator-master/races/Female_Dwarf.html');
}

function maleElf() {
    window.open('file:///home/chronos/u-7bd9acf60573c8c3097a7ccd3eb7ddb47f346a65/MyFiles/Downloads/Code/D-D_NPC_Generator-master/races/Male_Elf.html');
}

function femaleElf() {
    window.open('file:///home/chronos/u-7bd9acf60573c8c3097a7ccd3eb7ddb47f346a65/MyFiles/Downloads/Code/D-D_NPC_Generator-master/races/Female_Elf.html');
}

function maleHalfling() {
    window.open('file:///home/chronos/u-7bd9acf60573c8c3097a7ccd3eb7ddb47f346a65/MyFiles/Downloads/Code/D-D_NPC_Generator-master/races/Halfling_Male.html');
}

function femaleHalfling() {
    window.open('file:///home/chronos/u-7bd9acf60573c8c3097a7ccd3eb7ddb47f346a65/MyFiles/Downloads/Code/D-D_NPC_Generator-master/races/Halfling_Female.html');
}

function maleHuman() {
    window.open('file:///home/chronos/u-7bd9acf60573c8c3097a7ccd3eb7ddb47f346a65/MyFiles/Downloads/Code/D-D_NPC_Generator-master/races/Male_Human.html');
}
