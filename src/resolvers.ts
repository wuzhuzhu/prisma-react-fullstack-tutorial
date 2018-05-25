import { Context } from './interfaces'
import { getUser } from './utils/auth'

const resolvers = {
  Query: {
    feed(parent, args, ctx: Context, info) {
      console.log()
      return ctx.db.query.posts({
        where: {
          isPublished: true
        },
        orderBy: 'createdAt_DESC'
      }, info)
    },
    drafts(parent, args, ctx: Context, info) {
      return ctx.db.query.posts({
        where: {
          isPublished: false
        },
        orderBy: 'createdAt_DESC'
      }, info)
    },
    post(parent, { id }, ctx: Context, info) {
      return ctx.db.query.post({
        where: {
          id,
        },
      }, info)
    },
  },
  Mutation: {
    async createDraft(parent, {title, content}, ctx: Context, info) {
      const { id: userId } = await getUser(ctx)
      return ctx.db.mutation.createPost(
        {
          data: {
            title,
            content,
            user: {
              connect: { id: userId },
            },
            // isPublished: false,  #schema default false
            // likes: 0,  #schema default 0
          },
        },
        info
      )
    },
  },
}

export default resolvers