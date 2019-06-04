import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class AppData extends Component {

    state = {};

    constructor() {
        super();
        this.state = {
            catalog: [],
            dialogVisible: false,
            nombre: '',
            descripcion: ''
        };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onSave = this.onSave.bind(this);
        this.handleInputNombre = this.handleInputNombre.bind(this);
        this.handleInputDescripcion = this.handleInputDescripcion.bind(this);
    }

    onClick() {
        this.setState({ dialogVisible: true });
    }

    onHide() {
        this.setState({ dialogVisible: false });
    }

    onSave() {
        const catalogo = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion
        };
        axios.post('/catalog/api/catalogo', catalogo).then(() => this.componentDidMount());
        this.setState({ dialogVisible: false });
    }

    componentDidMount() {
        axios.get('/catalog/api/catalogo')
            .then(res => this.setState({ catalog: res.data }));
    }

    handleInputNombre(e) {
        this.setState({nombre: e.target.value});
    }

    handleInputDescripcion(e) {
        this.setState({ descripcion: e.target.value });
    }

    render() {
        const footer = (
            <div>
                <Button label="Guardar" icon="pi pi-check" onClick={this.onSave} />
                <Button label="Cancelar" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );

        return (
            <div>
                <Toolbar>
                    <Button label="Nuevo" icon="pi pi-plus" onClick={this.onClick} />
                </Toolbar>
                <DataTable value={this.state.catalog} autoLayout={true} paginator={true} rows={10}>
                    <Column header="Id" field="id" />
                    <Column header="Nombre" field="nombre" sorteable={true} filter={true} />
                    <Column header="Descripcion" field="descripcion" sorteable={true} filter={true} />
                </DataTable>

                <Dialog header="Crear nuevo" visible={this.state.dialogVisible} style={{ width: '50vw' }}
                    onHide={this.onHide} footer={footer} maximizable>
                    <span className="p-float-label">
                        <InputText id="inNombre" value={this.state.nombre} 
                            onChange={this.handleInputNombre} />
                        <label htmlFor="inNombre">Nombre</label>
                    </span>
                    <span className="p-float-label">
                        <InputText id="inDescripcion" value={this.state.descripcion} 
                            onChange={this.handleInputDescripcion} />
                        <label htmlFor="inDescripcion">Descripción</label>
                    </span>
                </Dialog>
            </div>
        );
    }

}

export default AppData;