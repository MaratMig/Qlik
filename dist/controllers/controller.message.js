"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const MessageService = __importStar(require("../services/messages.service"));
class MessagesController {
    constructor() {
        this.getMessages = async (req, res, next) => {
            try {
                const messages = await MessageService.findAll();
                res.status(200).json({ messages });
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
        this.getMessage = async (req, res, next) => {
            const id = parseInt(req.params.messageId, 10);
            try {
                const message = await MessageService.find(id);
                if (message) {
                    return res.status(200).send(message);
                }
                res.status(404).send("item not found");
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
        this.postMessage = async (req, res, next) => {
            try {
                const message = req.body;
                const newMessage = await MessageService.create(message);
                res.status(201).json(newMessage);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
        this.putMessage = async (req, res, next) => {
            const id = parseInt(req.params.messageId, 10);
            try {
                const messageUpdate = req.body;
                const existingMessage = await MessageService.find(id);
                if (existingMessage) {
                    const updatedMessage = await MessageService.update(id, messageUpdate);
                    return res.status(200).json(updatedMessage);
                }
                const newMessage = await MessageService.create(messageUpdate);
                res.status(201).json(newMessage);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
        this.deleteMessage = async (req, res, next) => {
            try {
                const id = parseInt(req.params.messageId, 10);
                await MessageService.remove(id);
                res.sendStatus(204);
            }
            catch (e) {
                res.status(500).send(e.message);
            }
        };
        this.getMessages = this.getMessages.bind(this);
        this.getMessage = this.getMessage.bind(this);
        this.postMessage = this.postMessage.bind(this);
        this.putMessage = this.putMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.getMessages = this.getMessages.bind(this);
    }
}
exports.MessagesController = MessagesController;
exports.default = new MessagesController();
//# sourceMappingURL=controller.message.js.map