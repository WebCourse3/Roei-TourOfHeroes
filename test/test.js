"use strict";

var expect = require('chai').expect;
var assert = require('assert');
var getFirstHero = require('../server');
var heroes = require('../heroes');

describe('Heroes', function() {
	describe('getFirstHero', function() {
		it('should return first hero', function() {
			assert.heroes[0].isEqual(getFirstHero);
		});
	});
});