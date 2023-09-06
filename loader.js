export const load = async (url, context, nextLoad) => {
  if (context.format === 'commonjs') {
    const res = await nextLoad(url, context)
    if (res.source === null)
      throw new Error('nextLoad source definition is null')
  }

  return nextLoad(url, context);
}
