import './LoginPage.css'
import {Component} from "react";
import CancelIcon from "@mui/icons-material/Cancel";

export class LoginPage extends Component {

    state = {
        login: '',
        password: '',
    }

    handleLoginChange = (e) => {
        this.setState({
            login: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleLogIn()
        this.props.setUserName(this.state.login)
        this.props.setUserPassword(this.state.password)
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('userName', this.state.login)
        localStorage.setItem('userPassword', this.state.password)
    }

    render() {
        const handleHideLoginPage = this.props.handleHideLoginPage
        return(
            <>
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <button className="hideBtn" onClick={handleHideLoginPage}><CancelIcon/></button>
                    <h2>Авторизация</h2>
                    <div>
                        <input
                            onChange={this.handleLoginChange}
                            className="loginInput"
                            type="text"
                            placeholder="Логин"
                            required
                        />
                    </div>
                    <div>
                        <input
                            onChange={this.handlePasswordChange}
                            className="loginInput"
                            type="password"
                            placeholder="Пароль"
                            required
                        />
                    </div>
                    <div>
                        <button className="blackBtn" type="submit">Войти</button>
                    </div>
                </form>

                <div className="overlay" onClick={handleHideLoginPage}></div>
            </>
        )
    }
}