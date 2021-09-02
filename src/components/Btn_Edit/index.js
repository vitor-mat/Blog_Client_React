import React from "react";

import { Link } from 'react-router-dom';

import { Button } from "./style";

export const BtnEdit = () => {
    return(
        <Link to="/dashboard/posts/editar">
            <Button>
                Editar
            </Button>
        </Link>
    )
}