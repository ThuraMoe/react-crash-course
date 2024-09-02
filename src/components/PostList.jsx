import { useState } from "react"
import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostList.module.css"
import Modal from "./Modal";

function PostList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function authorChangeHandler(event) {
        setAuthor(event.target.value);
    }

    let modalContent;
    if(modalIsVisible) {
        modalContent = 
            <Modal onClose={hideModalHandler}>
                <NewPost onTitleChange={titleChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>;
    }


    return (
        <>
            {
            modalIsVisible && 
                <Modal onClose={hideModalHandler}>
                    <NewPost onTitleChange={titleChangeHandler} onAuthorChange={authorChangeHandler} />
                </Modal>
            }
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