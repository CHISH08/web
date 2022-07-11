import './DeletePostForm.css'
import CancelIcon from '@mui/icons-material/Cancel';
import {Component} from "react";

export class DeletePostForm extends Component {
    state = {
        postTitle: this.props.selectedPost.title,
        postTag: this.props.selectedPost.tag,
        postBody: this.props.selectedPost.body,
        postName: this.props.selectedPost.name,
        postPassword: this.props.selectedPost.password,
    }

    handleDelete = (e) => {
        const post = {
            id: this.props.selectedPost.id,
            title: this.state.postTitle,
            tag: this.state.postTag,
            body: this.state.postBody,
            name: this.props.selectedPost.name,
            password: this.props.selectedPost.password,
            liked: this.props.selectedPost.liked,
            likeArray: this.props.selectedPost.likeArray,
            likeCounter: this.props.selectedPost.likeCounter,
        }
        this.props.deletePost(post)
        this.props.handleHideDeleteForm()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.handleDelete()
    }

    render() {
        const handleHideDeleteForm = this.props.handleHideDeleteForm
        return (
            <>
                <form action="" className="editPostForm" onSubmit={this.handleSubmit}>
                    <button onClick={handleHideDeleteForm} className="hideBtn"><CancelIcon/></button>
                    <h2>Удалить</h2>
                    <div>
                        <input className="deletePostInput"
                               type="text" name="postTitle"
                               placeholder="Название"
                               value={this.state.postTitle}
                               required
                        />
                    </div>
                    <div>
                        <input className="deletePostInput"
                               type="text"
                               name="postTags"
                               placeholder="Теги"
                               value={this.state.postTag}
                               required
                        />
                    </div>
                    <div>
                        <textarea className="deletePostInput"
                                  name="postBody"
                                  placeholder="Пост"
                                  value={this.state.postBody}
                                  rows={8}
                                  required
                        />
                    </div>
                    {
                        (this.props.currentName === this.state.postName) &&
                        (this.props.currentPassword === this.state.postPassword)?
                            <button
                                className="blackBtn"
                                type="submit">  Удалить
                            </button>
                            :
                            <p> У вас нет прав на удаление этого поста </p>
                    }

                </form>
                <div onClick={handleHideDeleteForm} className="overlay"></div>
            </>
        )
    }

}