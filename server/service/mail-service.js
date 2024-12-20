const nodeMailer = require('nodemailer')

class mailService {
    constructor() {
        this.transporter = nodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT, // Используйте 465 для SSL
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            }
        })
    }

    async sendAcrivationMail(to, link) {
        try {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Активация аккаунта на ' + process.env.API_URL,
                text: '',
                html:
                    `
                <div>
                <h1>Для активации перейдите по ссылке</h1>
                <a href="${link}">${link}</a>
                </div>
            `
            });
            console.log('Активационное письмо успешно отправлено');
        } catch (error) {
            console.error('Ошибка при отправке активационного письма:', error);
        }
    }
}

module.exports = new mailService()