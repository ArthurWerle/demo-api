import { Content } from "./content-validator"

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    expect(() => new Content('You received a new connect invite')).toBeTruthy()
  })
  
  it('should not be able to create a notification with less than 5 characters', () => {
    expect(() =>  new Content('aaa')).toThrow()
  })
  
  it('should not be able to create a notification with more than 240 characters', () => {
    expect(() =>  new Content('a'.repeat(241))).toThrow()
  })
})