import Database from '@ioc:Adonis/Lucid/Database';
import Moment from'moment';

export default class DesignerController {
  public async index({ request, view, session }: HttpContextContract) {
    try {
      const all = request.all()

      return view.render('admin.designer.index', {
        data: {
          title: '设计师',
          active: 'designer'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
