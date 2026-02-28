import React from 'react'
import {useParams} from 'react-router-dom'

const DyanmicCoursePage = () => {
    const params = useParams();
    console.log(params);
  return (
    <div>
        <h1>{params.id} DyanmicCoursePage</h1>
    </div>
  )
}

export default DyanmicCoursePage