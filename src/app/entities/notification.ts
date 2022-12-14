import { Replace } from "src/helpers/replace"
import { Content } from "./content-validator"

export interface NotificationProps {
  recipientId: string
  content: Content
  category: string
  readAt?: Date | null
  createdAt: Date
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId
  }

  public get recipientId() {
    return this.props.recipientId
  }

  public set content(content: Content) {
    this.props.content = content
  }

  public get content() {
    return this.props.content
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}