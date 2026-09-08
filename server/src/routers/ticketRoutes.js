import { Router } from 'express'

import {
    createTicket,
    getTickets,
    getTicketById,
    updateTicket,
    deleteTicket,
    getTicketStats
} from '../controllers/ticketController.js'

import authMiddleware from '../middleware/authMiddleware.js'

const router = Router()

router.post('/', authMiddleware, createTicket)

router.get('/', authMiddleware, getTickets)

// Estatísticas dos chamados
router.get('/stats', authMiddleware, getTicketStats)

router.get('/:id', authMiddleware, getTicketById)

router.put('/:id', authMiddleware, updateTicket)

router.delete('/:id', authMiddleware, deleteTicket)

export default router