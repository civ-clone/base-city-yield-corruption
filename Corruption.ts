import Trade from '@civ-clone/base-terrain-yield-trade/Trade';
import { makeNegative } from '@civ-clone/core-yield/NegativeYield';

export class Corruption extends Trade {}

makeNegative(Corruption);

export default Corruption;
