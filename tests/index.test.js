import test from 'ava';
import { add } from '../dist/index.js';

test('Should do addition without fail', (t) => {
	const sum = add(1, 2);
	t.is(sum, 3);
});
