import React, { useState, useRef, useCallback } from 'react'
import useClassList from "./useClassList";

export default function Classes() {
    const [pageNumber, setPageNumber] = useState(1)

    const {
        classes,
        hasMore,
        loading,
        error
    } = useClassList(pageNumber)

    const observer = useRef()
    const lastElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <>
            {classes.map((clazz, index) => {
                if (classes.length === (index + 1)) {
                    return <div ref={lastElementRef} key={index}>{clazz}</div>
                } else {
                    return <div key={index}>{clazz}</div>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </>
    );
}