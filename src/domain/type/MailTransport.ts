type MailTransport = {
    host: string,
    port: string,
    auth: {
        user: string,
        pass: string
    }
}

export { MailTransport }