import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { searchStackOverflow } from '../../actions/searchStackOverflow'

const SearchStackOverflow = props => {
  const [answers, setAnswers] = useState([])
  const [loading, setLoading] = useState(true)
  const {triggerNextStep} = props
  const { steps } = props;
  const search = steps.search.value;

  useEffect(() =>{
    searchStackOverflow(search)
      .then(res => {
        setAnswers(res.message.slice(0,2))
        setLoading(false)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="" style={{
            width: '420px',
            maxWidth: 'calc(100% - 18px)',
            maxHeight: 'calc(100% - 48px)',
            overflowWrap: 'break-word',  
            wordWrap: 'break-word', 
            wordBreak: 'break-word',
    }}>
      <h3>{ loading && "Searching....."}</h3>
      <h3 style={{color:'#7a39e0', fontWeight:'1900'}}>{ !loading && "Here are the top 2 Answers from Stack Overflow"}</h3>
      {
          answers.map(ans => (
            <>
              <h3>{ans.title}</h3>
              <p>{ans.body}</p>
              <h4>Answer</h4>
              <p>{ans.answers[0]}</p>
            </>
          ))
      }
      { !loading && <button button onClick={() => triggerNextStep()}> Search Again </button>}
      </div>
  )
}

const SearchBot = (props) => (
  <ChatBot
  className='transition-5'
  style={{
    height: props.visible? '100%' : '0%',
    zIndex: props.visible ? '100' : '0',
    width: '100%',
    backgroundColor:'white'
  }}
    steps={[
      {
        id: '1',
        message: 'Ask me your programming related questions. (Ex:What is python list ) You can even ask me the errors you face',
        trigger: 'search',
      },
      {
        id: 'search',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        component: <SearchStackOverflow />,
        waitAction: true,
        trigger: '1',
      },
    ]}
  />
);

export default SearchBot;