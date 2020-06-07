import MobileDetect from 'mobile-detect'

export const getUserAgent = (userAgent) => {
  const md = new MobileDetect(userAgent)

  return {
    userAgent: userAgent,
    isMobile: !!md.mobile(),
  }
}
