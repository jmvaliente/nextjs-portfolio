import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
export default function Index() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  var linkList = [
    'https://www.linkedin.com/in/shreyas-gupta/',
    'https://dribbble.com/shreyasgupta',
    'https://github.com/GLaDO8',
    'https://www.instagram.com/wutamelonshrey/',
    'https://twitter.com/wutamelonshrey',
    'https://www.behance.net/ShreyasGupta',
  ]
  var iconList = [
    'linkedin',
    'dribbble',
    'github',
    'instagram',
    'twitter',
    'behance',
  ]

  function iconLinkGenerator(name, theme, link) {
    return (
      <a href={link} target="_blank" rel="noreferrer noopener">
        <Image
          src={`https://s2.svgbox.net/social.svg?ic=${name}&color=${
            theme === 'light' ? '000' : 'fff'
          }`}
          className="social-icons"
          width={24}
          height={20}
          alt={name}
        />
      </a>
    )
  }
  return (
    <div className="flex max-w-3xl my-8 space-x-4">
      {linkList.map((link, index) =>
        iconLinkGenerator(iconList[index], theme, link),
      )}
    </div>
  )
}
