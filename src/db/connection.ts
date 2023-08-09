import { createPool } from 'mysql2/promise'
import { MYSQL_CONFIG } from '@/lib/secrets'

export const poolConnection = createPool({
  ...MYSQL_CONFIG,
  connectionLimit: 10
})
