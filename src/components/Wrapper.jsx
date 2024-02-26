import BestBuilders from './BestBuilders'
import BuilderSection from './BuilderSection'
import Footer from './Footer'
import Header from "./Header"
import RelatedDealsSection from './RelatedDealsSection'

const Wrapper = () => {
  return (
    <div className='app bg-[#FBFCFD]'>
        <Header />
      <div className="center-layout w-[80%] mx-auto md:my-4 my-3">
        <BestBuilders />
        <BuilderSection />
        <RelatedDealsSection />
      </div>
      <Footer />
    </div>
  )
}

export default Wrapper
