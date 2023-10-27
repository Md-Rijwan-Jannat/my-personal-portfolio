import { FaDownload } from 'react-icons/fa';
import { Button } from '../ui/Button/Button';
import { Link as ScrollLink, Element } from 'react-scroll';
const Media = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 lgl:gap-10 mx-5 lg:mx-0">
    <div>
      <ScrollLink
        to="contact"  // ID of the element to scroll to
        spy={true}
        smooth={true}
        duration={1000}
      >
        <div>
          <Button text={'Hire me'} />
        </div>
      </ScrollLink>
    </div>
    <div>
      <a
        target='_blank'
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1PCyp5gNrFC_c_XK_jKCPtwLQ5MfaAqoZ/view?usp=drive_link"
      >
        <Button text={'Download Resume'} icon={<FaDownload />} />
      </a>
    </div>
  </div>
  )
}

export default Media