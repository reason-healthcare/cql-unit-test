"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const fixture = (name) => {
    let filename = path_1.default.join(__dirname, 'fixtures', name);
    if (!name.endsWith('json')) {
        filename += '.json';
    }
    return JSON.parse(fs_1.default.readFileSync(filename).toString());
};
test('Unit Test', () => {
    expect(true);
});
