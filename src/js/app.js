import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';

const bowman = new Bowman('Bowman');
const swordsman = new Swordsman('Swordsman');
const magician = new Magician('Magician');
const udead = new Undead('Undead');
const zombie = new Zombie('Zombie');
const daemon = new Daemon('Daemon');

bowman.levelUp();
swordsman.levelUp();
magician.levelUp();
udead.levelUp();
zombie.levelUp();
daemon.levelUp();
