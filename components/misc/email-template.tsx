import * as React from 'react'

interface EmailTemplateProps {
    firstName: string
    lastName: string
    email: string
    phoneNumber?: string
    message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
}) => (
    <div>
        <h1>
            New Form submission from {firstName} {lastName}
        </h1>
        <p>Email: {email}</p>
        {phoneNumber && <p>Phone Number: {phoneNumber}</p>}
        <p>Message: {message}</p>
    </div>
)

export default EmailTemplate
