

import React from 'react'

const  page = async({ params }: { params: { id: string } }) => {
    
    const { id } = await params;

  return (
    <div>

        <p>La genul asta de componente/pagini randate dinamic in functie de path</p>

        <p>poti folosi si export default function (edf), si react component (rafce)!! Vezi pe git</p>

        <p> id : {id}</p>

    </div>
  )
}

export default page




// export default async function Product({ params }: { params: { id: string } }) {

//     const { id } = await params;

//     return <div>

//         <p>La genul asta de componente/pagini randate dinamic in functie de path</p>

//         <p>trebuie sa folosesti export default async function (edf), nu react component (rafce)!!</p>

//         <p> id : {id}</p>

//     </div>

// }


