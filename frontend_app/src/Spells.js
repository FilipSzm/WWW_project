import React, { useState, useRef, useCallback } from 'react'
import useSpellList from "./useSpellList";

export default function Spells() {
    const [pageNumber, setPageNumber] = useState(1)

    const {
        spells,
        hasMore,
        loading,
        error
    } = useSpellList(pageNumber)

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
            {spells.map((spell, index) => {
                if (spells.length === index + 1) {
                    return <div ref={lastElementRef} key={index}>{spell}</div>
                } else {
                    return <div key={index}>{spell}</div>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </>
    );
}