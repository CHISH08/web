import './postItem.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {Component} from "react";
export class PostItem extends Component {

    showEditForm = () => {
        this.props.handleSelect();
        this.props.handleShowEditForm();
    }

    showDeleteForm = () => {
        this.props.handleSelect();
        this.props.handleShowDeleteForm();
    }

    render() {
        return (
            <div className="post">
                <div className="postContent">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.tag}</p>
                    <p>{this.props.body}</p>
                    <p>@{this.props.name}</p>
                    <div className="likeDiv">
                        <button onClick={this.props.likePost}>
                            {
                                this.props.likeArray.includes(this.props.currentName) && this.props.currentName !== "" ?
                                    <FavoriteIcon style={{fill:"crimson"}} />
                                    :
                                    <FavoriteIcon style={{fill:"black"}} />
                            }

                        </button>
                        <strong>{this.props.likeCounter}</strong>
                    </div>
                </div>
                <div className="postControl">
                    <button className="editBtn" onClick={this.showEditForm}>
                        <EditIcon/>
                    </button>
                    <button className="deleteBtn" onClick={this.showDeleteForm}>
                        <DeleteForeverIcon/>
                    </button>
                </div>
            </div>

        );
    }
}

