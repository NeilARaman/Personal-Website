import { styled } from '../stitches.config'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
// import { getAllPosts, getPostBySlug } from '../lib/blog'
// import ListItem from '../components/ListItem'
// import FeaturedArticle from '../components/FeaturedArticle'
// import { ListGroup } from '../components/ListGroup'
import { motion } from 'framer-motion'

export async function getStaticProps() {
  // const allPosts = getAllPosts(['date', 'skip', 'slug', 'title'])

  // const featuredParams = [
  //   'date',
  //   'slug',
  //   'title',
  //   'image',
  //   'content',
  //   'description',
  // ]

  // const featuredPosts = [
  //   getPostBySlug('the-two-types-of-quality', featuredParams),
  //   getPostBySlug('how-is-life-post-yc', featuredParams),
  // ]

  return {
    props: {
      title: 'Articles // Neil Raman',
      tagline: 'Stories. Updates. Guides.',
      image: '/static/images/articles-bw.jpg',
      primaryColor: 'yellow',
      secondaryColor: 'pink',
      // featuredPosts,
      // allPosts,
    },
  }
}

function Articles(props) {
  // const renderFeatured = () => {
  //   return props.featuredPosts.map((post, index) => {
  //     return (
  //       <FeaturedArticle
  //         key={index}
  //         index={index}
  //         href={`/${post.slug}/`}
  //         title={post.title}
  //         description={post.description}
  //         image={post.image}
  //         stats={post.stats}
  //         content={post.content}
  //       />
  //     )
  //   })
  // }

  // const renderAll = () => {
  //   return props.allPosts.map((post, index) => {
  //     if (!post.skip) {
  //       return (
  //         <ListItem
  //           key={index}
  //           index={index}
  //           href={`/${post.slug}/`}
  //           title={post.title}
  //           date={post.date}
  //         />
  //       )
  //     }
  //   })
  // }

  const { title, image } = props
  const description = `Here will be all the articles that I plan to write. I plan to cover
  personal topics that I'm interested in, companies/industries I think are promising,
  and whatever else comes to mind. Every article here will be cross-posted on my Medium page,
  as well as posted about on my LinkedIn and Twitter.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://neilraman.com/articles" property="og:url" />
        <meta content={`https://neilraman.com${image}`} property="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={stripHtml(description)} name="twitter:description" />
        <meta content={`https://neilraman.com${image}`} name="twitter:image" />
      </Head>

      <motion.LayoutGroup>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <ComingSoonContainer>
          <ComingSoonTitle>Coming Soon!</ComingSoonTitle>
        </ComingSoonContainer>

        {/* <h2>Featured Articles</h2>
        <FeaturedArticles>{renderFeatured()}</FeaturedArticles>

        <h2>All Articles</h2>
        <ListGroup>{renderAll()}</ListGroup> */}
      </motion.LayoutGroup>
    </>
  )
}

// const FeaturedArticles = styled('div', {
//   margin: '10px 0 0 -20px',
//   '@bp2': { display: 'flex', justifyContent: 'space-between' },
// })

const ComingSoonContainer = styled('div', {
  textAlign: 'center',
  padding: '60px 20px',
  margin: '40px 0',
  background: '$hover',
  borderRadius: '$borderRadius',
})

const ComingSoonTitle = styled('h2', {
  fontSize: '48px',
  fontFamily: '$heading',
  color: '$primary',
  margin: '0 0 20px 0',
  '@bp3': { fontSize: '36px' },
})

  // const ComingSoonDescription = styled('p', {
  //   fontSize: '18px',
  //   color: '$secondary',
  //   lineHeight: '1.6',
  //   maxWidth: '600px',
  //   margin: '0 auto',
  //   '@bp3': { fontSize: '16px' },
  // })

Articles.Layout = Base

export default Articles
