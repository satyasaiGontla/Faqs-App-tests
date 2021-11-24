import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faqs-bg-container">
      <div className="faqs-container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="faqs">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqItem={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
