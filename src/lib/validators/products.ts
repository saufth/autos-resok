import * as z from 'zod'

export const headerSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }).min(4, {
    message: 'Must be at least 4 character'
  }).max(50, {
    message: 'Must not be longer than 50 characters'
  }),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string'
  }).min(12, {
    message: 'Must be at least 12 character'
  }).max(160, {
    message: 'Must not be longer than 160 characters'
  })
})
