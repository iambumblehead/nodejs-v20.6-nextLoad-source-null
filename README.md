Demonstrates how the nextLoad function passed to the load hook returns `{ source: null }` when url belongs to CJS module.

cd into the cloned ropo and use `npm test`

_loader.js_
```javascript
export const load = async (url, context, nextLoad) => {
  if (context.format === 'commonjs') {
    const res = await nextLoad(url, context)
    if (res.source === null)
      throw new Error('nextLoad source definition is null')
  }

  return nextLoad(url, context);
}
```
