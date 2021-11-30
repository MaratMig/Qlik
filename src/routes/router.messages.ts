import { Router } from 'express';

import { check } from 'express-validator/check'

import MessagesController from '../controllers/controller.message'

const router = Router();

router.get('/messages', MessagesController.getMessages)

router.get('/:messageId', MessagesController.getMessage)

router.post('/message', check('message').isAlphanumeric(), MessagesController.postMessage)

router.put('/message/:messageId',check('message').isAlphanumeric(), MessagesController.putMessage)

router.delete('/message/:messageId', MessagesController.deleteMessage)


export default router;