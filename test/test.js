'use strict';
var shifumi = require('../index.js')
var assert = require('assert');

describe('ShiFuMi class',function () {
  describe('constructor', function () {
    it('construct a "shi" element', function () {
      var shi = new shifumi.ShiFuMi("shi");
      assert.ok(shi.choice == "shi");
    });
    it('construct a "fu" element', function () {
      var fu = new shifumi.ShiFuMi("fu");
      assert.ok(fu.choice == "fu");
    });
    it('construct a "mi" element', function () {
      var mi = new shifumi.ShiFuMi("mi");
      assert.ok(mi.choice == "mi");
    });
    it('construct a "random" element', function () {
      var rdm = new shifumi.ShiFuMi();
      assert.ok(["mi", "fu", "shi"].includes(rdm.choice));
    });
  });
  describe('fight', function () {
    it('"shi" vs "shi"', function () {
      var el1 = new shifumi.ShiFuMi("shi");
      var el2 = new shifumi.ShiFuMi("shi");
      assert.ok(el1.fight(el2) == "Equality");
      assert.ok(el2.fight(el1) == "Equality");
    });
    it('"fu" vs "fu"', function () {
      var el1 = new shifumi.ShiFuMi("fu");
      var el2 = new shifumi.ShiFuMi("fu");
      assert.ok(el1.fight(el2) == "Equality");
      assert.ok(el2.fight(el1) == "Equality");
    });
    it('"mi" vs "mi"', function () {
      var el1 = new shifumi.ShiFuMi("mi");
      var el2 = new shifumi.ShiFuMi("mi");
      assert.ok(el1.fight(el2) == "Equality");
      assert.ok(el2.fight(el1) == "Equality");
    });
    it('"shi" vs "fu"', function () {
      var el1 = new shifumi.ShiFuMi("shi");
      var el2 = new shifumi.ShiFuMi("fu");
      assert.ok(el1.fight(el2) == "You lose");
      assert.ok(el2.fight(el1) == "You win");
    });
    it('"shi" vs "mi"', function () {
      var el1 = new shifumi.ShiFuMi("shi");
      var el2 = new shifumi.ShiFuMi("mi");
      assert.ok(el1.fight(el2) == "You win");
      assert.ok(el2.fight(el1) == "You lose");
    });
    it('"fu" vs "mi"', function () {
      var el1 = new shifumi.ShiFuMi("fu");
      var el2 = new shifumi.ShiFuMi("mi");
      assert.ok(el1.fight(el2) == "You lose");
      assert.ok(el2.fight(el1) == "You win");
    });
  })
});
describe("other methods", function () {
  describe('randomShiFuMi', function () {
    it('create a "random" ShiFuMi choice', function () {
      var rdm = shifumi.randomShiFuMi();
      assert.ok(["mi", "fu", "shi"].includes(rdm));
    });
  })
})
