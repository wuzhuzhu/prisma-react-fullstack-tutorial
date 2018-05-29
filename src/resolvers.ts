import { Context } from './interfaces'
import { getUser } from './utils/auth'

const resolvers = {
  Query: {
    posts(parent, args, ctx, info) {
      return ctx.db.query.posts({ }, info)
    },
    post(parent, args, ctx, info) {
      return ctx.db.query.post({ where: { id: args.id } }, info)
    },
  },
  Mutation: {
    async setRole(parent, { id, newRole }, ctx, info) {
      const { id: userId, role } = await getUser(ctx)
      if (role !== 'ADMIN') {
        throw new Error('操作者没有足够的权限')
      }
      return ctx.db.mutation.updateUser({
        where: {
          id,
        },
        data: {
          role: newRole,
        }
      })
    },
    async createDraft(parent, { title, content, likes }, ctx, info) {
      const { id: userId } = await getUser(ctx)
      return ctx.db.mutation.createPost(
        {
          data: {
            title,
            content,
            likes,
            user: {
              connect: { id: userId }
            }
          },
        },
        info,
      )
    },
    deletePost(parent, { id }, ctx, info) {
      return ctx.db.mutation.deletePost({ where: { id } }, info)
    },
    publish(parent, { id }, ctx, info) {
      return ctx.db.mutation.updatePost(
        {
          where: { id },
          data: { published: true },
        },
        info,
      )
    },
    async like(parent, { id, amount = 1 }, ctx: Context, info) {
      const post = await ctx.db.query.post({
        where: {id}
        }, `{
        id
        likes
      }`)
      if (!post.id) {
        throw new Error(`没有找到对应的文章`)
      }
      return ctx.db.mutation.updatePost({
        where: { id },
        data: {
          likes: post.likes + amount
        }
      })
    }
  },
}

export default resolvers