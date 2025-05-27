import React from 'react'
import Footer from '../../features/Footer/Footer'
import NavigationBar from '../../features/NavigationBar/NavigationBar'
import Section from '../Section/Section'

const PageWrapper = (props) => {
  return (
     <div>
        <div className={`container mini-section`}>
            <NavigationBar theme='dark' />            
        </div>
        <Section>
            {props.children}
        </Section>
        <Footer />
    </div>
  )
}

export default PageWrapper