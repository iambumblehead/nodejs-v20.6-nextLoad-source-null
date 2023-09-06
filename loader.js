import fs from 'node:fs/promises'

export const load = async (url, context, nextLoad) => {
  if (context.format === 'commonjs') {
    const nextLoadRes = await nextLoad(url, context)
    const source = nextLoadRes.source === null
        ? String(await fs.readFile(new URL(url)))
        : String(nextLoadRes.source)

    return {
      format: nextLoadRes.format,
      shortCircuit: true,
      responseURL: url,
      source: source
    }
  }

  return nextLoad(url, context);
}
