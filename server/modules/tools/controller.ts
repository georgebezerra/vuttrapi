import { Request, Response } from 'express'
import * as _ from 'lodash'
import handlers from '../../api/responses/handlers'
import Tool from './service'

class ToolController {

  getAll(req: Request, res: Response) {
    Tool
      .getAll()
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.onError, res, `Erro ao buscar todos posts`))
  }

  createTool(req: Request, res: Response) {
    Tool
      .create(req.body)
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.dbErrorHandler, res, `Erro ao criar post`))
      .catch(_.partial(handlers.onError, res, `Erro ao buscar buscar post`))
  }

  getById(req: Request, res: Response) {
    const ToolId = parseInt(req.params.id)
    Tool
    .getById(ToolId)
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.onError, res, `Erro ao buscar post`))
  }

  updateTool(req: Request, res: Response) {
    const ToolId = parseInt(req.params.id)
    const props = req.body
    Tool
      .update(ToolId, props)
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.onError, res, `Erro ao autualizar todos post`))
  }

  deleteTool(req: Request, res: Response){
    const ToolId = parseInt(req.params.id)
    Tool
      .delete(ToolId)
      .then(_.partial(handlers.onSuccess, res))
      .catch(_.partial(handlers.onError, res, `Erro ao excluir post`))
  }
}

export default new ToolController()
