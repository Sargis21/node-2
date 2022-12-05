export enum HttpStatusCodes {
    OK = 200,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

export function HttpMessageStatus(status: number): string {
    return Object.keys(HttpStatusCodes)[Object.values(HttpStatusCodes).indexOf(status)];
}
