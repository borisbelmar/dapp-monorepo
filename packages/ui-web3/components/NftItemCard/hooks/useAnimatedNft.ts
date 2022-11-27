import { useEffect, useRef, useState } from 'react'

export default function useAnimatedNft() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoShow, setVideoShow] = useState(false)
  const [needAction, setNeedAction] = useState(false)
  const videoShowTimeoutRef = useRef<NodeJS.Timeout>()

  const handleVideoPlay = () => {
    videoShowTimeoutRef.current = setTimeout(async () => {
      setVideoShow(true)
      try {
        await videoRef.current?.play()
        setNeedAction(false)
      } catch (e) {
        setNeedAction(true)
      }
    }, 300)
  }

  const handleVideoPause = () => {
    clearTimeout(videoShowTimeoutRef.current)
    setVideoShow(false)
    setNeedAction(false)
    videoRef.current?.pause()
  }

  useEffect(() => {
    const timeoutRef = videoShowTimeoutRef.current
    return () => {
      clearTimeout(timeoutRef)
    }
  }, [])

  return {
    videoRef,
    videoShow,
    needAction,
    handleVideoPlay,
    handleVideoPause
  }
}
