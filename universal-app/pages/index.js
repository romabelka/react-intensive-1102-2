import Link from 'next/link'
import App from '../components/App'
import { withApollo } from '../lib/apollo'
import EventList from "../components/event-list";

const IndexPage = props => (
  <App>
      <Link href="/about">
          <a>
              About
          </a>
      </Link>
    <EventList/>
  </App>
)

export default withApollo(IndexPage)
