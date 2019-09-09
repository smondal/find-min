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

test('object', t => {
	t.is(findMin({1: 2, 2: 4, 4: 5}), '1');
});

test('array', t => {
	t.is(findMin([1, 2, 3, 4]), 1);
});
