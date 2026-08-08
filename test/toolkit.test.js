import { test } from 'node:test'
import assert from 'node:assert/strict'
import { slugify } from '../lib/slugify.js'
import { wordCount } from '../lib/wordcount.js'

test('slugify lowercases text', () => {
  assert.equal(slugify('Hello World'), 'hello-world')
})

test('slugify replaces special characters', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world')
})

test('slugify trims leading/trailing separators', () => {
  assert.equal(slugify('--hello--'), 'hello')
})

test('slugify handles empty input', () => {
  assert.equal(slugify(''), '')
})

test('wordCount counts words', () => {
  assert.equal(wordCount('the quick brown fox').words, 4)
})

test('wordCount handles multiple spaces', () => {
  assert.equal(wordCount('a  b   c').words, 3)
})

test('wordCount counts lines', () => {
  assert.equal(wordCount('one\ntwo\nthree').lines, 3)
})

test('wordCount handles empty input', () => {
  assert.deepEqual(wordCount(''), { words: 0, lines: 0, characters: 0 })
})
