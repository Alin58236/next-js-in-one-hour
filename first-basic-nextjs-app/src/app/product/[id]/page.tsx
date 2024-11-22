

import React from 'react'

const  page = async({ params }: { params: { id: string } }) => {
    
    const { id } = await params;

  return (
    <div>

        <p>La genul asta de componente/pagini randate dinamic in functie de path</p>

        <p>poti folosi si export default function (edf), si react component (rafce)!! Vezi pe  <u><a href='https://github.com/Alin58236/next-js-in-one-hour/blob/main/first-basic-nextjs-app/src/app/product/%5Bid%5D/page.tsx'>github</a></u></p>

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


