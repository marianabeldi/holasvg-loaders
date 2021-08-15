let sep;_34e‍.x([["parseStack",()=>parseStack]]);_34e‍.w("path",[["sep",["sep"],function(v){sep=v}]]);

// copied from https://github.com/nuxt/consola/blob/master/src/utils/error.js
       function parseStack (stack) {
  const cwd = process.cwd() + sep

  const lines = stack
    .split('\n')
    .splice(1)
    .map(l => l
      .trim()
      .replace('file://', '')
      .replace(cwd, '')
    )

  return lines
}
