import Image from 'next/image'
import Layout from '@/components/layout'
import Head from 'next/head'
export default function Index () {
  return (
    <>
      <Layout>
        <Head>
          <title>Playground</title>
          <meta
            rel="og:description"
            content="Miscellaneous visual work and unfinished ideas by Shreyas Gupta"
          />
          <meta
            name="description"
            content="Miscellaneous visual work and unfinished ideas by Shreyas Gupta"
          />
        </Head>
        <h1 className="page-title-design">Playground</h1>
        <div>
          <div>
            <h2 className="section-title-design">Neue Instagram</h2>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/Instagram-nu.png"
                alt="Neumorphic Concept art for Instagram"
                width={667}
                height={583}
                layout="responsive"
              />
            </div>
            <p className="page-para-design">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            </p>
          </div>

          <div>
            <h2 className="section-title-design">Iconography</h2>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/icons.png"
                alt="Various icons designed with 3D realism in mind"
                width={834}
                height={454}
                layout="responsive"
              />
            </div>
            <p className="page-para-design">
              With the launch of macOS Big Sur and iOS 14, there is a surge in
              demand for custom icons! Big Sur introduced depth and shadows to
              many default icons, but not all. I decided to take this as an
              opportunity to learn shadows, lighting and depth, and created a
              few custom icons! All these icons were made using Sketch.
            </p>
            <p className="page-para-design">
              I was also asked to create a logo for Canvasbird, an open-source
              organisation building tools for remote learning.
            </p>
          </div>

          <div>
            <h2 className="section-title-design">Blender experiments</h2>
            <div className="rounded-xl overflow-hidden">
              {' '}
              <Image
                src="/images/donut.png"
                alt="3D Donut made in Blender"
                width={800}
                height={800}
                layout="responsive"
              />
            </div>
            <p className="page-para-design">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
            </p>
          </div>

          <div>
            <h2 className="section-title-design">Vector Art</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/lowpolyearth.png"
                  alt="low ploygon count vector earth"
                  width={600}
                  height={600}
                  layout="responsive"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/logorender1.png"
                  alt=""
                  width={600}
                  height={600}
                  layout="responsive"
                />
              </div>
            </div>

            <p className="page-para-design"></p>
          </div>
        </div>
      </Layout>
    </>
  )
}
