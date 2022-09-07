import React, { useEffect, useState } from 'react'

import axios from 'context/axios'
import MainPanel from 'components/MainPanel/MainPanel';

const Users = () => {
    const [data, setData] = useState([]);
    const card1 = {
        title: 'Administrativos',
        firstNumber: 24,
        firstText: 'usuarios registrados',
        secondNumber: 10,
        secondText: 'activos en los últimos 7 días'
    }
    const card2 = {
        title: 'Estudiantes',
        firstNumber: 924,
        firstText: 'usuarios registrados',
        secondNumber: 107,
        secondText: 'activos en los últimos 7 días'
    }

    const onLoad = async e => {
        const response = (await axios.get('users')).data;
        console.log(response);
        // setData(response.data.data);
        // console.log(data);
    }

    useEffect(() => {
        onLoad();
    }, [])

    return (
        <MainPanel title='Usuarios' card1={card1} card2={card2} data={data} />
    )
}

export default Users