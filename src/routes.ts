import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/', (req: any, res: { json: (arg0: { message: string }) => any }) => {
  return res.json({ message: 'Hello World' })
})

export default routes
