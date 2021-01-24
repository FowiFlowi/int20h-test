import crypto from 'crypto'

export function generateUUID(): string {
    return crypto.randomBytes(16).toString('hex')
}
