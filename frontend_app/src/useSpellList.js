import { useEffect, useState } from "react";
import axios from "axios";

const Spell = ({name, desc, lvl, dur, cast_time}) => {
    return (<div className="stat-block">
        <hr className="orange-border"/>
        <div className="section-left">
            <div className="creature-heading">
                <h1>{name}</h1>
                <h2>Level {lvl}, Cast time: {cast_time}, Duration: {dur}</h2>
            </div>
            <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"/>
            </svg>
        </div>
        <div className="section-right">
            <div className="actions">
                <h3>Description</h3>
                <div className="property-block">
                    <p>{desc}</p>
                </div>

            </div>
        </div>

        <hr className="orange-border bottom"/>
    </div>);
}


export default function useMonsterList(pageNumber) {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [spells, setSpells] = useState([])
    const [urls, setUrls] = useState([])
    const [pageSize] = useState(5)
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://www.dnd5eapi.co/api/spells').then(res => {
            setCount(res.data.count)
            setUrls(res.data.results.map(m => m.url))
        }).catch(() => {
            setError(true)
        })
        setLoading(false)
    }, [])


    useEffect(() => {
        setLoading(true)
        setError(false)

        const lastIndex = pageNumber * pageSize;
        const firstIndex = lastIndex - pageSize;
        const current = urls.slice(firstIndex, lastIndex);

        current.forEach((url, index) => {axios
            .get('https://www.dnd5eapi.co' + url)
            .then(res => {


                setSpells(prevSpells =>
                    [...new Set([
                        ...prevSpells,
                        <Spell
                            name={res.data.name}
                            desc={res.data.desc}
                            lvl={res.data.level}
                            cast_time={res.data.casting_time}
                            dur={res.data.duration}
                        />
                    ])])
                if (current.length === index + 1) setLoading(false)
            })
            .catch(() => {
                setError(true)
            })
        })
        setHasMore(lastIndex < count)
    }, [pageNumber, pageSize, urls, count])



    return { loading, error, spells, hasMore }
}
