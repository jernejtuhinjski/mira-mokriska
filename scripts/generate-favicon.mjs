import sharp from 'sharp'

const src = 'public/images/Logo MM.png'

await sharp(src).resize(32, 32).toFile('public/favicon.ico')
await sharp(src).resize(32, 32).toFile('app/icon.png')
await sharp(src).resize(180, 180).toFile('public/apple-icon.png')

console.log('Favicon files generated.')
