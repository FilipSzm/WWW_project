import React, { useState, useRef, useCallback } from 'react'
import useMonsterList from "./useMonsterList";

export default function Monsters() {
    const [pageNumber, setPageNumber] = useState(1)

    const {
        monsters,
        hasMore,
        loading,
        error
    } = useMonsterList(pageNumber)

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
            {monsters.map((monster, index) => {
                if (monsters.length === index + 1) {
                    return <div ref={lastElementRef} key={index}>{monster}</div>
                } else {
                    return <div key={index}>{monster}</div>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </>
    );
}