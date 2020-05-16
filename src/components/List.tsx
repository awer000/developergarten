import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_CONTINENTS } from '../graphQL/index';

function List() {
  const { loading, error, data } = useQuery(GET_CONTINENTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <div className='List'>
      <ul>
        {data.continents.map(({ code, name }: { code: any; name: any }) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
