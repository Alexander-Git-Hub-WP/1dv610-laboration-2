import { describe, it, expect } from 'vitest'
import { parseArgs } from './app.js'

describe('parseArgs()', () => {
  it('should return the first positional argument', () => {
    expect(parseArgs(['Hello world'])).toBe('Hello world')
  })

  it('should return undefined when no arguments are given', () => {
    expect(parseArgs([])).toBeUndefined()
  })
})
