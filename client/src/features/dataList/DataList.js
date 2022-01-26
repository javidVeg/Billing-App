import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getDataList } from './dataListSlice';

const DataList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataList())
    },[dispatch])
   

  return (
   <div>
       <h1>{getDataList.firstName}</h1>
   </div>
  )
}

export default DataList;
