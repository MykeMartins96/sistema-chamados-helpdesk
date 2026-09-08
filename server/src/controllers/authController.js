import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export async function register(req, res) {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Nome, e-mail e senha são obrigatórios.'
            })
        }

        const userAlreadyExists = await User.findOne({ email })

        if (userAlreadyExists) {
            return res.status(400).json({
                message: 'Já existe um usuário cadastrado com este e-mail.'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso!',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error)

        return res.status(500).json({
            message: 'Erro interno do servidor.'
        })
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: 'E-mail e senha são obrigatórios.'
            })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({
                message: 'E-mail ou senha incorretos.'
            })
        }

        const passwordIsCorrect = await bcrypt.compare(
            password,
            user.password
        )

        if (!passwordIsCorrect) {
            return res.status(401).json({
                message: 'E-mail ou senha incorretos.'
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        )

        return res.status(200).json({
            message: 'Login realizado com sucesso!',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.error('Erro ao realizar login:', error)

        return res.status(500).json({
            message: 'Erro interno do servidor.'
        })
    }
}