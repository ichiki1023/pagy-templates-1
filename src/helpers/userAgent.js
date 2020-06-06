import MobileDetect from 'mobile-detect'

export const getUserAgent = (userAgent) => {
  const md = new MobileDetect(userAgent)
  let isMobile = false
  if (md.mobile()) {
    isMobile = true
  }
  return {
    userAgent: userAgent,
    isMobile: isMobile,
  }
}
