import * as React from 'react'
import Header from '../Components/Header/Header'
import '../Page/Contact.css'

class Contact extends React.Component<{}> {

    constructor(props: any) {
      super(props)
    }
  
    // This method renders the contact page and displays it to the user
    public render() {
      return (
      
        <div className="backgroundC">
          <Header/>
        <div className="HeaderC">
          CONTACT US
          </div>

        <div className="info">
          APP Test Ltd
        </div>
        <div className="boldInfo">
          Mobile
        </div>
        <div className="info">
          123 456 789
        </div>
        <div className="boldInfo">
          Phone
        </div>
        <div className="info">
          98 765 432
        </div>
        <div className="boldInfo">
          Email
        </div>
        <div className="info">
          Apptest@TEST.com
        </div>


      </div>
      )
    }
}
export default Contact;