import {FaTimes , FaEdit} from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
    //name of piece of state 'rating' and function to update state 'setRating' ;7 will be default for that function
    // const [rating, setRating] = useState(7); 
    // const [text, setText] = useState('This is an example');

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick = {() => deleteFeedback(item.id)}className="close">
          <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} 
        className="edit">
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>

    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem