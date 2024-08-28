import { useState } from "react"
import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostList.module.css"
import Modal from "./Modal";

function PostList() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function authorChangeHandler(event) {
        setAuthor(event.target.value);
    }


    return (
        <>
            <Modal>
                <NewPost onTitleChange={titleChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>
            <ul className={classes.posts}>
                <Post author={author} title={title} />
                <Post author="Sham Kaseem" title="Dancing with Anxiety" />
                <Post author="Mr Moore" title="Escape From Fear" />
                <Post author="Amnesty" title="Beyond limit" />
            </ul>
        </>
    )
}

export default PostList