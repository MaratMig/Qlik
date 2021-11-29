"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.path}`);
    next();
}
exports.default = loggerMiddleware;
//# sourceMappingURL=logger.js.map