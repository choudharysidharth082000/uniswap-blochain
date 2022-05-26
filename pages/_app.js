import '../styles/globals.css'
import {TransactionProvider} from "../Context/TransactionControl"
// add bootstrap css 
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
function MyApp({ Component, pageProps }) {
  return(
          <TransactionProvider>
            <Component {...pageProps} />
          </TransactionProvider>
        )
}

export default MyApp