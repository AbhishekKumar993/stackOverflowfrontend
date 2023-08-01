import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import moment from 'moment'
import {useSelector,useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import copy from 'copy-to-clipboard'
import { useParams } from 'react-router-dom'
import { deleteAnswer } from '../../actions/question'

const DisplayAnswer = ({question}) => {

    const { id } = useParams()
    const User = useSelector((state) => (state.currentUserReducer))
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const url = process.env.REACT_APP_FRONT_END
    const handleShare = () => {
        copy(url + location.pathname)
        alert('URL Copied to clipboard'+url+location.pathname)
    }
    
    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
    }
    return (
    <div>
        {
            question.answer.map(ans => (
                <div className='display-ans' key={ans._id}>
                    <p>{ ans.answerBody}</p>
                    <div className='question-actions-user'>
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                                User?.result?._id === ans.userId && (
                                    <button type='button' onClick={()=>handleDelete(ans._id,question.noOfAnswers)}>Delete</button>
                                )
                            }
                        </div>
                        <div>
                            <p>Answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/Users/${question.userId}`} className='user-link' style={{ color: '#00086d8' }}>
                                <Avatar backgroundColor="green" px="8px" py="5px">{ ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                <div>{ans.userAnswered}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer
