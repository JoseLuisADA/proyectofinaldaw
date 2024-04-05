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

    static internal(msg) {
        return new SistaleError(500, msg);
    }
}

export default SistaleError;
