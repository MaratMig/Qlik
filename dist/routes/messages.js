"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let messages = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ messages });
});
router.post('/message', (req, res, next) => {
    const newMessage = {
        id: new Date().toISOString(),
        message: req.body.message,
        isPalindrome: null
    };
    messages.push(newMessage);
    res.status(200).json({ text: 'Added message', newMessage, messages });
});
router.put('/message/:messageId', (req, res, next) => {
    const mid = req.params.messageId;
    const messageIndex = messages.findIndex(msg => msg.id === mid);
    if (messageIndex >= 0) {
        messages[messageIndex].message = req.body.message;
        return res.status(200).json({ text: 'Updated message', messages });
    }
    res.status(404).json({ error: 'Could not find the message for this id' });
});
router.delete('/message/:messageId', (req, res, next) => {
    const mid = req.params.messageId;
    messages = messages.filter(msg => msg.id !== mid);
    res.status(200).json({ text: 'Deleted the message', messages });
});
exports.default = router;
//# sourceMappingURL=messages.js.map