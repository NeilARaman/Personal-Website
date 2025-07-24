import Head from 'next/head'
import { ArticleJsonLd } from 'next-seo'
import Blogpost from '../layouts/Blogpost'
import ErrorMessage from '../components/ErrorMessage'
import { getPostBySlug, getAllPosts, convertMarkdownToHtml } from '../lib/blog'
import { sanitizeMarkdownHTML } from '../lib/sanitize'

function Post(props) {
  if (props.errorCode) {
    return <ErrorMessage code={props.errorCode} />
  }

  const title = `${props.title} // Neil Raman`
  const description = props.description || ''
  const url = `https://neilraman.com/${props.slug}`
  const date = props.date ? new Date(props.date).toISOString() : ''
  const image = props.image
    ? `https://neilraman.com${props.image}`
    : 'https://neilraman.com/static/images/home-opt.jpg'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
        <meta content={image} property="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={image} name="twitter:image" />

        {props.canonical_url && (
          <link rel="canonical" href={props.canonical_url} />
        )}
      </Head>

      <ArticleJsonLd
        authorName="Neil Raman"
        type="Blog"
        url={url}
        title={title}
        images={[image]}
        datePublished={date}
        dateModified={date}
        description={props.description}
      />

      <div dangerouslySetInnerHTML={{ __html: sanitizeMarkdownHTML(props.content) }} suppressHydrationWarning />
    </>
  )
}

export async function getStaticProps({ params }) {
  try {
    const post = getPostBySlug(params.slug, [
      'canonical_url',
      'content',
      'date',
      'description',
      'image',
      'lang',
      'slug',
      'title',
    ])

    const content = await convertMarkdownToHtml(post.content || '')

    // Base URL not currently used but available for future URL generation
    // const isProd = process.env.NODE_ENV === 'production'
    // const base = isProd ? 'https://neilraman.com' : 'http://localhost:3000'

    return {
      props: {
        ...post,
        content,
      },
      revalidate: 60,
    }
  } catch (e) {
    return { props: { errorCode: 404 } }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: 'blocking',
  }
}

Post.Layout = Blogpost

export default Post
