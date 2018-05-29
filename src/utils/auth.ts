// TODO: 获取真实的当前用户id，而不是默认用户。

export function getUser(ctx) {
  return ctx.db.query.user({
    where: {
      name: "章鱼日报"
    }
  }, `{
      id
    }`)
}