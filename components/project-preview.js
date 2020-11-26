import Date from './date'
import Link from 'next/link'

export default function ProjectPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <Link as={`/work/${slug}`} href="/work/[slug]">
      <div className="transform bg-white shadow-lg hover:shadow-2xl hover:scale-100 duration-500 rounded-xl overflow-hidden cursor-pointer">
        <div className="">
          <img src={coverImage.imgix_url} />
        </div>
        <div className="p-5">
          <h3 className="text-xl mb-1 font-semibold leading-snug text-gray-800">
            {title}
          </h3>
          <div className="text-base font-normal mb-4 text-gray-700">
            <Date dateString={date} />
          </div>
          <p className="text-base text-gray-700 leading-relaxed mb-2">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}