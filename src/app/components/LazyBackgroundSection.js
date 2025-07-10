import { useState, useEffect, useRef } from 'react'

export default function LazyBackgroundSection({ image, children, ...rest }) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: loaded ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
