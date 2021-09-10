import React, { useContext, useEffect } from "react";

import { AccessContext } from "../../context/CounterSiteAccessContext";

import { Container } from "./style";

export const Status = () => {

    const { myAccess, getCurrentlyAccess } = useContext(AccessContext);

    useEffect(() => {
        getCurrentlyAccess()
    }, [])

    return(
        <Container>
            <table>
                 <caption>Status</caption>
                <tbody>
                    <tr>
                        <th>Nº Posts:</th>
                        <th>0</th>
                    </tr>
                    <tr>
                        <th>Nº acessos:</th>
                        <th>{myAccess.allAccessGeral[0].allAccess}</th>
                    </tr>
                    <tr>
                        <th>Posts mais acessados</th>
                        <th>
                            <ul>
                                <li>Post 1</li>
                                <li>Post 2</li>
                                <li>Post 3</li>
                            </ul>
                        </th>
                    </tr>
                </tbody>
            </table>
            <div>
                <h3>Posts por mês</h3>
                <br/>
                <span>grafico</span>
            </div>
            <div>
                <h3>Acessos por mês</h3>
                <br/>
                <span>grafico</span>
            </div>
        </Container>
    )
}