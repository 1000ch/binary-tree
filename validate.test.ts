import {assertEquals} from 'https://deno.land/std@0.223.0/assert/mod.ts';
import {validate} from './validate.ts';

Deno.test('binary tree test1', async () => {
  const bt = await Deno.readTextFile('./bt1.json');
  assertEquals(validate(JSON.parse(bt)), false);
});

Deno.test('binary tree test2', async () => {
  const bt = await Deno.readTextFile('./bt2.json');
  assertEquals(validate(JSON.parse(bt)), false);
});

Deno.test('binary tree test3', async () => {
  const bt = await Deno.readTextFile('./bt3.json');
  assertEquals(validate(JSON.parse(bt)), true);
});

Deno.test('binary tree test4', async () => {
  const bt = await Deno.readTextFile('./bt4.json');
  assertEquals(validate(JSON.parse(bt)), false);
});

Deno.test('binary tree test5', async () => {
  const bt = await Deno.readTextFile('./bt5.json');
  assertEquals(validate(JSON.parse(bt)), false);
});
