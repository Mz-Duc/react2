import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-3">Project quản lý thành viên bằng reactjs</h1>
                        <p class="lead">Jumbo helper text</p>
                        <hr class="my-2"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;