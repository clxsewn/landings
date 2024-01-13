import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import prefixer from 'postcss-prefix-selector'
import { pages, pagesPaths } from './src/routes/data'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src/landings') },
        ],
    },
    css: {
        postcss: {
            plugins: [
                prefixer({
                    prefix: '',
                    transform(prefix, selector, prefixedSelector, filePath) {
                        for (const p of pagesPaths)
                            if (filePath.includes(p))
                                return '#' + pages[p].prefix + ' ' + selector

                        return selector
                    },
                }),
            ],
        },
    },
})
