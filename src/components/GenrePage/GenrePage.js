import React from 'react';
import { MDBBadge, MDBBtn } from 'mdb-react-ui-kit';

export default function GenrePage({genre}) {
    const {name} = genre;

    return (
        <div className={"genreDiv"}>
    <MDBBtn>
        <MDBBadge color={"light"}>
                <div>{name}</div>
        </MDBBadge>
    </MDBBtn>
        </div>

    )
}