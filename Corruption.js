"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corruption = void 0;
const Trade_1 = require("@civ-clone/base-terrain-yield-trade/Trade");
const NegativeYield_1 = require("@civ-clone/core-yield/NegativeYield");
class Corruption extends Trade_1.default {
}
exports.Corruption = Corruption;
(0, NegativeYield_1.makeNegative)(Corruption);
exports.default = Corruption;
//# sourceMappingURL=Corruption.js.map