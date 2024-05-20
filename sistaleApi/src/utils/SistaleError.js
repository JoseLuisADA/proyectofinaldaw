// src/utils/SistaleError.js
class SistaleError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(msg) {
        return new SistaleError(400, msg);
    }

    static unauthorized(msg) {
        return new SistaleError(401, msg);
    }

    static conflict(msg) {
        return new SistaleError(409, msg);
    }

    static internal(msg) {
        return new SistaleError(500, msg);
    }
}

export default SistaleError;
