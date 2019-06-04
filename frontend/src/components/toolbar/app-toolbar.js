import React, {Component} from 'react';
import {Toolbar} from 'primereact/toolbar';
import axios from 'axios';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class AppToolbar extends Component {

    state = {};

    componentDidMount() {
        setInterval(this.withAxios, 1000);
    }

    withAxios = () => {
        axios.get('/time/api/time')
            .then(res => this.setState({message:res.data}));
    }

    render() {
        return (
            <Toolbar>
                <div className="p-toolbar-group-right">
                    <h4>La hora es: {this.state.message}</h4>
                </div>
            </Toolbar>
        );
    }

}

export default AppToolbar;