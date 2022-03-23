import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [autoprefixer]
      }
    }),
    mdsvex({
      extensions: ['.md'],
			layout: {
        blog: 'src/routes/blog/_post.svelte'
      },
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ]
    })
  ],
};

export default config;