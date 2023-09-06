import test from 'node:test'
import assert from 'assert'

test('should not show promise resolution error', async () => {
  await import('./file-importing-cjs-module.js')

  assert.ok(true)
})
