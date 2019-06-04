import React, {Component} from 'react';
import {Panel} from 'primereact/panel';
import AppToolbar from './components/toolbar'
import AppData from './components/list'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

class App extends Component {

    render() {
        return (
            <Panel header="Aplicación de ejemplo">
                <AppToolbar/>
                <br/>
                <AppData/>
            </Panel>
        );
    }
}

export default App;