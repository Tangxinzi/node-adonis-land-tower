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

  public async save({ request, response, session }: HttpContextContract) {
    try {
      const all = request.all()
      console.log(all)
      return

      if (!all.title || !all.detail) {
        session.flash('error', { type: 'error', header: '创建失败', message: `标题或者描述内容不能为空，请重新填写。` })
        return response.redirect('back')
      }

      const id = await Database.table('articles').returning('id').insert({
        title: all.title || '',
        detail: all.detail || ''
      })

      session.flash('message', { type: 'success', header: '创建成功', message: `${ all.title }已创建，点击<a href="?id=${ id }">查看</a>内容。` })
      return response.redirect('back')
    } catch (error) {
      console.log(error)
      session.flash('message', { type: 'error', header: '提交失败', message: `捕获错误信息 ${ JSON.stringify(error) }。` })
    }
  }

  // public async update({ request, response, session }: HttpContextContract) {
  //   try {
  //     const all = request.all()
  //     await Database.from('articles').where('id', all.id).update({ title: all.title, detail: all.detail })
  //     session.flash('message', { type: 'success', header: '更新成功', message: `${ all.title }已更新，点击<a href="?id=${ all.id }">查看</a>内容。` })
  //     return response.redirect('back')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}
