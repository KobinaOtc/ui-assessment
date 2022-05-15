import { ReactComponent as WorldIcon } from '_Images/world.svg'
import { ReactComponent as WhatsAppIcon } from '_Images/whatsapp.svg'

import './NotificationBar.css'

export const NotificationBar = () => {
  return (
    <div className="notification-bar">
      <div className='language'>
        <WorldIcon />
        <span>EN</span>
      </div>
      <div className='sale'>SALES BEGIN  •  FREE SHIPPING ON ALL ORDERS</div>
      <div className='chat-btn'>
        <WhatsAppIcon />
        <span>Chat with us</span>
      </div>
    </div>
  )
}
