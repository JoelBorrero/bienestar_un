import { DataGrid } from '@mui/x-data-grid';

import './DataTable.css'

function createData(id, name, group, activities, role, career) {
    return { id, name, group, activities, role, career };
}

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'group', headerName: 'Grupo', type: 'number', width: 90 },
    { field: 'activities', headerName: 'Actividades', type: 'number', width: 90 },
    { field: 'role', headerName: 'Rol', description: 'This column has a value getter and is not sortable.', width: 160 },
    { field: 'career', headerName: 'Carrera', width: 130 },
];

const rows = [
    createData(1, 'Jon Snow', 35, 10, 'Promotor', 'Ing. Civil'),
    createData(2, 'Cersei Lannister', 42, 10, 'Estudiante', 'Admon'),
    createData(3, 'Jaime Lannister', 45, 10, 'Promotor', 'Derecho'),
    createData(4, 'Arya Stark', 16, 10, 'Estudiante', 'Derecho'),
    createData(5, 'Daenerys Targaryen', null, 10, 'Estudiante', 'Derecho'),
    createData(6, 'Marie Melisandre', 150, 10, 'Promotor', 'Medicina'),
    createData(7, 'Ferrara Clifford', 44, 10, 'Promotor', 'Derecho'),
    createData(8, 'Rossini Frances', 36, 10, 'Estudiante', 'Psicología'),
    createData(9, 'Harvey Roxie', 65, 10, 'Promotor', 'Derecho'),
    createData(10, 'Taya Kno', 65, 10, 'Estudiante', 'Música'),
    createData(11, 'Brooke Liger', 65, 10, 'Promotor', 'Música'),
];

export default function DataTable(props) {
    return (
        <article className='Card' >
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </article>
    );
}