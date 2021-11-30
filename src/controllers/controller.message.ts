
import { Request, Response,  NextFunction} from 'express';
import { BaseMessage, Message } from '../models/message.interface'
import * as MessageService from "../services/messages.service";
import { validationResult } from 'express-validator/check';

export class MessagesController {

    constructor() {
        this.getMessages = this.getMessages.bind(this);
        this.getMessage = this.getMessage.bind(this);
        this.postMessage = this.postMessage.bind(this);
        this.putMessage = this.putMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.getMessages = this.getMessages.bind(this);
      }

    getMessages = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const messages: Message[] = await MessageService.findAll();
            res.status(200).json({messages})
        }
        catch (e) {
            res.status(500).send(e.message);
        }
    }

    getMessage = async (req: Request, res: Response, next: NextFunction) => {
        const id: number = parseInt(req.params.messageId, 10);
        try {
            const message: Message = await MessageService.find(id);

            if (message) {
              return res.status(200).send(message);
            }

            res.status(404).send("item not found");
          } catch (e) {
            res.status(500).send(e.message);
          }
    }

    postMessage = async (req: Request, res: Response, next: NextFunction) => {
      const message: BaseMessage = req.body;
      const errors = validationResult(req);
      if ( !errors.isEmpty() ) {
        const errMessage = 'Validation failed, entered data should be alphanumeric';
        return res.status(422).json({message: errMessage, errors: errors.array()});
      }
      try {
          const newMessage = await MessageService.create(message);
          res.status(201).json(newMessage);
        } catch (e) {
          res.status(500).send(e.message);
        }
    }

    putMessage = async (req: Request, res: Response, next: NextFunction) => {
        const id: number = parseInt(req.params.messageId, 10);
        const errors = validationResult(req);
        if ( !errors.isEmpty() ) {
          const errMessage = 'Validation failed, entered data should be alphanumeric';
          return res.status(422).json({message: errMessage, errors: errors.array()});
        }
        try {
          const messageUpdate: Message = req.body;

          const existingMessage: Message = await MessageService.find(id);

          if (existingMessage) {
            const updatedMessage = await MessageService.update(id, messageUpdate);
            return res.status(200).json(updatedMessage);
          }

          const newMessage = await MessageService.create(messageUpdate);

          res.status(201).json(newMessage);
        } catch (e) {
          res.status(500).send(e.message);
        }
    }

    deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: number = parseInt(req.params.messageId, 10);
            await MessageService.remove(id);

            res.sendStatus(204);
          } catch (e) {
            res.status(500).send(e.message);
          }
    }

}

export default new MessagesController();