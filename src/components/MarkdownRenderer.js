import Markdown from 'markdown-to-jsx'
import React from 'react'

const MarkdownRenderer = (props) => {
  return (
    <Markdown
        className=' font-[family-name:var(--ff-body)]'
        options={{
            overrides:{
                h3: {
                    props:{
                        className: "subtitle"
                    }
                }
            }
        }
        }       
        >
            {props.content.replaceAll('*****', "\n")}
    </Markdown>
  )
}

export default MarkdownRenderer