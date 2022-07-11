import './EditPostForm.css'
import CancelIcon from '@mui/icons-material/Cancel';
import {Component} from "react";

export class EditPostForm extends Component {

    state = {
        postTitle: this.props.selectedPost.title,
        postTag: this.props.selectedPost.tag,
        postBody: this.props.selectedPost.body,
        postName: this.props.selectedPost.name,
        postPassword: this.props.selectedPost.password,
    }

    handlePostTitleChange = (e) => {
        this.setState({
            postTitle: e.target.value
        })
    }

    handlePostTagChange = (e) => {
        this.setState({
            postTag: e.target.value
        })
    }

    handlePostBodyChange = (e) => {
        this.setState({
            postBody: e.target.value
        })
    }

    savePost = (e) => {
        const post = {
            id: this.props.selectedPost.id,
            title: this.state.postTitle,
            tag: this.state.postTag,
            body: this.state.postBody,
            name: this.props.selectedPost.name,
            password: this.props.selectedPost.password,
            liked: this.props.selectedPost.liked,
            likeArray: this.props.selectedPost.likeArray,
            likeCounter: this.props.selectedPost.likeCounter
        }

        this.props.editBlogPost(post)
        this.props.handleHideEditForm()
    }

    handleEnter = (e) => {
        if (e.key === 'Enter'
            && this.state.postTitle !== ''
            && this.state.postTag !== ''
            && this.state.postBody !== ''
            && this.props.currentName === this.state.postName
            && this.props.currentPassword === this.state.postPassword) {
            this.savePost()
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.savePost()
    }

    componentDidMount() {
        window.addEventListener('keyup', this.handleEnter)
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEnter)
    }

    render() {
        const handleHideEditForm = this.props.handleHideEditForm
        return (
            <>
                <form action="" className="editPostForm" onSubmit={this.handleSubmit}>
                    <button onClick={handleHideEditForm} className="hideBtn"><CancelIcon/></button>
                    <h2>Редактировать</h2>
                    <div>
                        <input className="editPostInput"
                               type="text" name="postTitle"
                               placeholder="Название"
                               value={this.state.postTitle}
                               onChange={this.handlePostTitleChange}
                               required
                        />
                    </div>
                    <div>
                        <input className="editPostInput"
                               type="text"
                               name="postTags"
                               placeholder="Теги"
                               value={this.state.postTag}
                               onChange={this.handlePostTagChange}
                               required
                        />
                    </div>
                    <div>
                        <textarea className="editPostInput"
                                  name="postBody"
                                  placeholder="Пост"
                                  value={this.state.postBody}
                                  onChange={this.handlePostBodyChange}
                                  rows={8}
                                  required
                        />
                    </div>
                    {
                        (this.props.currentName === this.state.postName) &&
                        (this.props.currentPassword === this.state.postPassword)?
                            <button
                                className="blackBtn"
                                type="submit">  Сохранить
                            </button>
                            :
                            <p> У вас нет прав на редактирование этого поста </p>
                    }

                </form>
                <div onClick={handleHideEditForm} className="overlay"></div>
            </>
        )
    }
}