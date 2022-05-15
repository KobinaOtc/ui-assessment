import { NotificationBar } from '_Home/components/NotificationBar'
import { LeaguePost } from '_Home/components/LeaguePost'
import { ProductList } from '_Home/components/Product'
import { InfoCard } from '_Home/components/InfoCard'
import { Slider } from '_Home/components/Slider'
import { Footer } from '_Home/components/Footer'
import { ImageCard } from '_Home/components/ImageCard'
import { NavBar } from '_Home/components/NavBar'

import { ReactComponent as WhatsAppIcon } from '_Images/whatsapp.svg'
import { ReactComponent as PhoneIcon } from '_Images/phone.svg'
import { ReactComponent as QualityIcon } from '_Images/quality.svg'
import { ReactComponent as CarIcon } from '_Images/car.svg'
import { ReactComponent as CaretLeftIcon } from '_Images/caret-left.svg'
import { ReactComponent as CaretRightIcon } from '_Images/caret-right.svg'
import { ReactComponent as RewardIcon } from '_Images/rewards.svg'
import CardImage from '_Images/fb_card.png'
import CardImageTwo from '_Images/fb_card_two.png'
import FCImage from '_Images/fc.png'
import FCImageTwo from '_Images/fd.png'
import FCImageFour from '_Images/fe.png'
import FCImageThree from '_Images/fg.png'
import FCImageFive from '_Images/ff.png'

import { ProductData } from '_Home/constants/productData'
import { CountryLeague } from '_Home/constants/leagueData'
import './HomePage.css'

export const HomePage = () => {
  const otherCollectionsExtras = (text) => {
    return (
      <div className='other-bottom'>
        <div className='text'>{text}</div>
        <div className='caret-right'><CaretRightIcon /></div>
      </div>
    )
  }
  return <div className="homepage-cont">
    <NotificationBar />
    <NavBar />
    <Slider
      heroText={<div className='heroText'>
        <div>Your favorite customized</div>
        <div>Club Jerseys.</div>
      </div>
      }
    />
    <div className="content">
      <div className="info-cards">
        <InfoCard header='Secure Shipping' icon={<CarIcon />} description='on all orders'/>
        <InfoCard header='Telephone' icon={<PhoneIcon /> } description='+34 660 63 64 27'/>
        <InfoCard header='Chat WhatsApp' icon={<WhatsAppIcon/>} description='Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00'/>
        <InfoCard header='Quality Guarantee Shipping' icon={<QualityIcon />} description='Verified Purchase Reviews'/>
      </div>
      <div className="rewards">
        <RewardIcon />
      </div>

      <div className="popular">
        <div className='popular-header-container'>
          <div className="popular-header">
            MOST POPULAR T-SHIRTS
          </div>
          <div className="controls">
            <div>
              <CaretLeftIcon fill="#111112"/>
            </div>
            <div>
              <CaretRightIcon fill="#111112"/>
            </div>
          </div>
        </div>
        <div className='product-listing'>
          <ProductList data={ProductData} />
        </div>
      </div>

      <div className="country-league">
        <div className='league-header-container'>
          <div className="league-header">
           Country Leagues
          </div>
        </div>
        <div className='league-listing'>
          {
            CountryLeague.map((league, index) => <LeaguePost key={index} {...league} />)
          }
        </div>
      </div>

      <div className="other-collection">
        <div className="collection-title">
          Other Collections
        </div>
        <div className="other-posts">
          <ImageCard
            image={FCImage}
            extras={otherCollectionsExtras('Kids')}
          />
          <ImageCard
            image={FCImageTwo}
            extras={otherCollectionsExtras('Large sizes')}
          />
          <ImageCard
            image={FCImageThree}
            extras={otherCollectionsExtras('Goalkeeper')}
          />
          <ImageCard
            image={FCImageThree}
            extras={otherCollectionsExtras('Shorts')}
          />
          <ImageCard
            image={FCImageFour}
            extras={otherCollectionsExtras('Socks')}
          />
          <ImageCard
            image={FCImageFive}
            extras={otherCollectionsExtras('Authentic / Pro Player')}
          />
        </div>
      </div>

      <div className='image-cards'>
        <ImageCard
          image={CardImage}
          overlay
          header="PERSONALIZATION"
          description="Put a custom print on the football shirt of your choice with our Personalization service."
          extras="Tell us what name, what number and we put it. FREE!!!"
        />
        <ImageCard
          image={CardImageTwo}
          overlay
          header="SOCIAL NETWORKS"
          description="Share your shirts with us with the #CamisetasFutbolSpainnn"
          extras="Tell us what name, what number and we put it. FREE!!!"
        />
      </div>
    </div>
    <Footer />
  </div>
}
