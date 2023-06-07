import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ data}) => {
  const [grow , setGrow] = useState(true)
  return (
      <article className='question'>
        <header>
          <h4>{data.title}</h4>
          <button className='btn' onClick={()=> setGrow(!grow)}>{grow ? <AiOutlinePlus /> : <AiOutlineMinus />}</button>
        </header>
      <p className=''>{grow ? " " : data.info}</p>
      </article>
  );
};

export default Question;
