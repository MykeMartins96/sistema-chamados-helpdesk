import mongoose from 'mongoose'

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL)

    console.log('✅ MongoDB conectado!')
  } catch (error) {
    console.error('❌ Erro ao conectar com o MongoDB:', error.message)

    process.exit(1)
  }
}

export default connectDatabase