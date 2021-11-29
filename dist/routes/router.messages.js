"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_message_1 = __importDefault(require("../controllers/controller.message"));
const router = (0, express_1.Router)();
router.get('/', controller_message_1.default.getMessages);
router.get('/:messageId', controller_message_1.default.getMessage);
router.post('/message', controller_message_1.default.postMessage);
router.put('/message/:messageId', controller_message_1.default.putMessage);
router.delete('/message/:messageId', controller_message_1.default.deleteMessage);
exports.default = router;
//# sourceMappingURL=router.messages.js.map