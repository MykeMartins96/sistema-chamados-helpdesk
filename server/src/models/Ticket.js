import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            required: true,
            enum: [
                'Acesso',
                'Financeiro',
                'Suporte Técnico',
                'Cadastro'
            ],
            required: true
        },

        priority: {
            type: String,
            required: true,
            enum: ['Baixa', 'Média', 'Alta'],
            default: 'Média'
        },

        status: {
            type: String,
            required: true,
            enum: ['Aberto', 'Em andamento', 'Resolvido'],
            default: 'Aberto'
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Ticket = mongoose.model('Ticket', ticketSchema)

export default Ticket