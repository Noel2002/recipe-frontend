import React, { useState } from 'react'

const StringFormatter = () => {
    const [content, setContent] = useState('');
  return (
    <div>
        <textarea value={content} onChange={e => setContent(e.target.value)} style={{width: "70%", height: "400px"}}/>
        <p>{content && content.length>0?content.replace(/(?:\r\n|\r|\n)/g, '*****'): 'No content'}</p>
    </div>
  )
}

export default StringFormatter