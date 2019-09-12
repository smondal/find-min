import {serial as test} from 'ava';
import findMin from '.';

test('no arguments pass', t => {
	t.is(findMin(), undefined);
});

test('no array pass', t => {
	t.is(findMin([]), undefined);
});

test('arguments', t => {
	t.is(findMin(1, 2, 3, 4), 1);
});

test('integer key', t => {
	t.is(findMin({1: 2, 2: 4, 4: 5}), '1');
});

test('string key', t => {
	t.is(findMin({a: 2, b: 4, c: 5}), 'a');
});

test('array', t => {
	t.is(findMin([1, 2, 3, 4]), 1);
});

test('array of array', t => {
	t.is(findMin([2, 1, 3, 4, [6, 12], [9, 10], [2], 8]), 1);
});
