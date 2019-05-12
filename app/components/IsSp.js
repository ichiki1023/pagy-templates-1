import Media from 'react-media'
import withAppContext from 'app/components/wrapper/withAppContext'

const IsSp = props => {
  const { userAgent, children, maxWidth } = props
  return (
    <Media query={`(max-width: ${maxWidth}px)`} defaultMatches={userAgent.issp}>
      {children}
    </Media>
  )
}

IsSp.defaultProps = {
  maxWidth: 750
}

export default withAppContext(IsSp)
