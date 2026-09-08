import Ticket from '../models/Ticket.js'

export async function createTicket(req, res) {
    try {
        const {
            title,
            description,
            category,
            priority
        } = req.body

        if (!title || !description || !category) {
            return res.status(400).json({
                message: 'Título, descrição e categoria são obrigatórios.'
            })
        }

        const ticket = await Ticket.create({
            title,
            description,
            category,
            priority,
            user: req.user.id
        })

        return res.status(201).json({
            message: 'Chamado criado com sucesso!',
            ticket
        })
    } catch (error) {
        console.error('Erro ao criar chamado:', error)

        return res.status(500).json({
            message: 'Erro interno do servidor.'
        })
    }
}

export async function getTickets(req, res) {
    try {
        const {
            status,
            priority,
            category
        } = req.query

        const filters = {
            user: req.user.id
        }

        if (status) {
            filters.status = status
        }

        if (priority) {
            filters.priority = priority
        }

        if (category) {
            filters.category = category
        }

        const tickets = await Ticket.find(filters)
            .sort({ createdAt: -1 })

        return res.status(200).json(tickets)
    } catch (error) {
        console.error('Erro ao buscar chamados:', error)

        return res.status(500).json({
            message: 'Erro interno do servidor.'
        })
    }
}

export async function getTicketById(req, res) {
    try {
        const ticket = await Ticket.findOne({
            _id: req.params.id,
            user: req.user.id
        })

        if (!ticket) {
            return res.status(404).json({
                message: 'Chamado não encontrado.'
            })
        }

        return res.status(200).json(ticket)
    } catch (error) {
        console.error('Erro ao buscar chamado:', error)

        return res.status(500).json({
            message: 'Erro interno do servidor.'
        })
    }
}

export async function updateTicket(req, res) {
    try {
        const ticket = await Ticket.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!ticket) {
            return res.status(404).json({
                message: 'Chamado não encontrado.'
            })
        }

        return res.status(200).json({
            message: 'Chamado atualizado com sucesso!',
            ticket
        })
    } catch (error) {
        console.error('Erro ao atualizar chamado:', error)

        return res.status(500).json({
            message: 'Erro interno do servidor.'
        })
    }
}

export async function deleteTicket(req, res) {
    try {
        const ticket = await Ticket.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id
        })

        if (!ticket) {
            return res.status(404).json({
                message: 'Chamado não encontrado.'
            })
        }

        return res.status(200).json({
            message: 'Chamado excluído com sucesso!'
        })
    } catch (error) {
        console.error('Erro ao excluir chamado:', error)

        return res.status(500).json({
            message: 'Erro interno do servidor.'
        })
    }
}

export async function getTicketStats(req, res) {
    try {
        const userId = req.user.id

        const total = await Ticket.countDocuments({
            user: userId
        })

        const open = await Ticket.countDocuments({
            user: userId,
            status: 'Aberto'
        })

        const inProgress = await Ticket.countDocuments({
            user: userId,
            status: 'Em andamento'
        })

        const resolved = await Ticket.countDocuments({
            user: userId,
            status: 'Resolvido'
        })

        const highPriority = await Ticket.countDocuments({
            user: userId,
            priority: 'Alta'
        })

        return res.status(200).json({
            total,
            open,
            inProgress,
            resolved,
            highPriority
        })
    } catch (error) {
        console.error('Erro ao buscar estatísticas:', error)

        return res.status(500).json({
            message: 'Erro interno do servidor.'
        })
    }
}