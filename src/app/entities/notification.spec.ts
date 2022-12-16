import { Content } from "./content-validator"
import { Notification } from "./notification"

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New friend request'),
      category: 'social',
      recipientId: 'example-id',
    })

    expect(notification).toBeTruthy()
  })
})