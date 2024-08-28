import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={props.onTitleChange}></textarea>
            </p>
            <p>
                <label htmlFor="name">Author Name</label>
                <input type="text" id="name" required onChange={props.onAuthorChange} />
            </p>
        </form>
    )
}

export default NewPost;