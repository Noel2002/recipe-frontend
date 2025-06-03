import React from 'react'
import Footer from '../../features/Footer/Footer'
import NavigationBar from '../../features/NavigationBar/NavigationBar'
import Section from '../Section/Section'

const PageWrapper = (props) => {
  return (
     <div className=' min-h-screen flex flex-col'>
        <div className={`container mini-section`}>
            <NavigationBar theme='dark' />            
        </div>
        <div className='flex-grow'>
          <Section>
              {props.children}
          </Section>
        </div>
        <Footer />
    </div>
  )
}

export default PageWrapper