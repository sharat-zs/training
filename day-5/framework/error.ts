export class StandardError extends Error {
    constructor(
        message: string,
        public readonly code: string = 'UNKNOWN_ERROR',
        public readonly status: number = 500
    ) {
        super(message)
    }
}
