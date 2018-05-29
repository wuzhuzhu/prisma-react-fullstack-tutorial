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
  },
}

export default resolvers