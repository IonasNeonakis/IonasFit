import { z } from 'zod'

const envSchema = z.object({
    CARD_NUMBER: z.string().min(1),
    DEVICE_ID: z.string().min(1),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
})

export const serverEnv = envSchema.parse(process.env)
