import { MessageMail } from "../entities/MessageMail"

interface IMail {
    sendMail(message: MessageMail): void
}

export { IMail }