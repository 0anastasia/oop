import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';

const bowman = new Bowman('Bowman1');
const bowman2 = new Bowman('Bowman2');
const swordsman = new Swordsman('Swordsman1');
const magician = new Magician('Magician1');
const udead = new Undead('Undead1');
const zombie = new Zombie('Zombie1');
const daemon = new Daemon('Daemon1');

bowman.levelUp();
swordsman.levelUp();
magician.levelUp();
udead.levelUp();
zombie.levelUp();
daemon.levelUp();