// src/config/env.ts
import { z } from 'zod'
import * as process from "node:process";

const envSchema = z.object({
    CARD_NUMBER: z.string(),
    DEVICE_ID: z.string(),
    NODE_ENV: z.enum(['development', 'production', 'test']),
})

const clientEnvSchema = z.object({
})

// Validate server environment
export const serverEnv = envSchema.parse(process.env)

// Validate client environment
export const clientEnv = clientEnvSchema.parse(import.meta.env)