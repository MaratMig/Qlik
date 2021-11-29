import { Router } from 'express';

import { Message } from '../models/message.interface'

import MessagesController from '../controllers/controller.message'

const router = Router();

router.get('/', MessagesController.getMessages)

router.get('/:messageId', MessagesController.getMessage)

router.post('/message', MessagesController.postMessage)

router.put('/message/:messageId', MessagesController.putMessage)

router.delete('/message/:messageId', MessagesController.deleteMessage)


export default router;