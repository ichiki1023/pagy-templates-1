import Media from 'react-media'
import withAppContext from 'app/components/wrapper/withAppContext'

const IsSp = props => {
  const { userAgent, children } = props
  return (
    <Media query='(max-width: 750px)' defaultMatches={userAgent.issp}>
      {children}
    </Media>
  )
}

export default withAppContext(IsSp)
