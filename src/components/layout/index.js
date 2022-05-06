import Header from "./header"
import Footer from "./footer"

const Index = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Index