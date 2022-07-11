import './AddPostForm.css'
import CancelIcon from '@mui/icons-material/Cancel';
import {Component} from "react";

export class AddPostForm extends Component {

    state = {
        postTitle: '',
        postTag: '',
        postBody: ''
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

    createPost = (e) => {
        const post = {
            title: this.state.postTitle,
            tag: this.state.postTag,
            body: this.state.postBody,
            name: this.props.name,
            password: this.props.password,
            liked: false,
            likeArray: this.props.likeArray,
            likeCounter: 0
        }

        this.props.addNewPost(post)
        this.props.handleHideAddForm()
    }

    handleEnter = (e) => {
        if (e.key === 'Enter'
            && this.state.postTitle !== ''
            && this.state.postTag !== ''
            && this.state.postBody !== '') {
            this.createPost()
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createPost()
    }

    componentDidMount() {
        window.addEventListener('keyup', this.handleEnter)
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleEnter)
    }

    render() {
        const handleHideAddForm = this.props.handleHideAddForm
        return (
            <>
                <form action="" className="addPostForm" onSubmit={this.handleSubmit}>
                    <button onClick={handleHideAddForm} className="hideBtn"><CancelIcon/></button>
                    <h2>Новая цель</h2>
                    <div>
                        <input className="addPostInput"
                               type="text" name="postTitle"
                               placeholder="Название"
                               value={this.state.postTitie}
                               onChange={this.handlePostTitleChange}
                               required
                        />
                    </div>
                    <div>
                        <input className="addPostInput"
                               type="text"
                               name="postTags"
                               placeholder="Теги"
                               value={this.state.postTag}
                               onChange={this.handlePostTagChange}
                               required
                        />
                    </div>
                    <div>
                        <textarea className="addPostInput"
                                  name="postBody"
                                  placeholder="Пост"
                                  value={this.state.postBody}
                                  onChange={this.handlePostBodyChange}
                                  rows={8}
                                  required
                        />
                    </div>
                    <button
                            className="blackBtn"
                            type="submit">  Поделиться
                    </button>
                </form>
                <div onClick={handleHideAddForm} className="overlay"></div>
            </>
        )
    }
}