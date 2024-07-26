const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('getNum read whole number input', function () {
        assert.equal(convertHandler.getNum('4gal'), 4);
    });
    test('getNum read decimal number input', function () {
        assert.equal(convertHandler.getNum('4.123km'), 4.123);
    });
    test('getNum read fractional number input', function () {
        assert.equal(convertHandler.getNum('4/2kg'), 4/2);
    });
    test('getNum read fractional input with decimal', function () {
        assert.equal(convertHandler.getNum('4.32/2.52lbs'), 4.32/2.52);
    });
    test('getNum return empty string on double fraction input', function () {
        assert.equal(convertHandler.getNum('12/2/12mi'), false);
    });
    test('getNum return 1 on input without value', function () {
        assert.equal(convertHandler.getNum('mi'), 1);
    });
    test('getUnit read unit from input', function () {
        assert.equal(convertHandler.getUnit('20mi'), 'mi');
    });
    test('getUnit return from invalid unit input', function () {
        assert.equal(convertHandler.getUnit('abs'), '');
    });
    test('getReturnUnit return from valid converted unit', function () {
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    });
    test('getReturnUnit return from valid converted unit', function () {
        assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    });
    test('spellOutUnit return full unit word', function () {
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });

    
    test('spellOutUnit return full unit word', function () {
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });
    test('spellOutUnit return full unit word', function () {
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });
    test('spellOutUnit return full unit word', function () {
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });
    test('spellOutUnit return full unit word', function () {
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });
    test('spellOutUnit return full unit word', function () {
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });
});