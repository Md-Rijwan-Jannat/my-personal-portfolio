import { FaDownload } from 'react-icons/fa';
import { Button } from '../ui/Button/Button';
const Media = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 lgl:gap-10 mx-5 lg:mx-0">
        <div>
         <Button text={'Hire me'}/>
        </div>
        <div>
         <Button text={'Download Resume'} icon={<FaDownload/>}>
          </Button> 
        </div>
      </div>
  )
}

export default Media