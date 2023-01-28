import React from 'react';
import styles from './articleTitle.module.css'

const ArticleTitle = (props) => {

    return (
        <div className={`${styles.root} ${styles["txt-"+props.align]}`}>
            {props.children}
        </div>
    )
}

export default ArticleTitle