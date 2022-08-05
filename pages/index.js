import LayoutWrapper from 'components/layout/LayoutWrapper'
import { PageSEO } from 'components/SEO'
import siteMetadata from 'data/siteMetadata'
import { getAllFilesFrontMatter } from 'lib/mdx'


const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <LayoutWrapper>
        <p className="text-color-primary">abc</p>
      </LayoutWrapper>
    </>
  )
}
