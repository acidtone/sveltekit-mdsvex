import adapter from '@sveltejs/adapter-netlify'
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import autoprefixer from 'autoprefixer'
import defList from "remark-deflist"
import containers from "remark-containers"
import attr from "remark-attr"

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
      remarkPlugins: [
        defList,
        containers,
        attr
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ]
    })
  ],
};

export default config;
