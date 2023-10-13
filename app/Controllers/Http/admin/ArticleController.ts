import Database from '@ioc:Adonis/Lucid/Database';
import Moment from'moment';

export default class ArticleController {
  public async index({ request, view, session }: HttpContextContract) {
    try {
      const all = request.all()

      return view.render('admin.article.index', {
        data: {
          title: '文章',
          active: 'article'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}
