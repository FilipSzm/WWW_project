import {useEffect, useState} from "react";
import axios from "axios";


const Monster = ({
                     name, size, type, alignment, armor,
                     hit_points, speed, str, dex, con, int, wis, cha,
                     challenge, xp, actions
}) => {
    return (<div className="stat-block">
        <hr className="orange-border"/>
        <div className="section-left">
            <div className="creature-heading">
                <h1>{name}</h1>
                <h2>{size} {type}, {alignment}</h2>
            </div>
            <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"/>
            </svg>
            <div className="top-stats">
                <div className="property-line first">
                    <h4>Armor Class </h4>
                    <p>{armor}</p>
                </div>
                <div className="property-line">
                    <h4>Hit Points </h4>
                    <p>{hit_points}</p>
                </div>
                <div className="property-line last">
                    <h4>Speed </h4>
                    <p>{speed}</p>
                </div>
                <svg height="5" width="100%" className="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"/>
                </svg>
                <div className="abilities">
                    <div className="ability-strength">
                        <h4>STR</h4>
                        <p>{str}</p>
                    </div>
                    <div className="ability-dexterity">
                        <h4>DEX</h4>
                        <p>{dex}</p>
                    </div>
                    <div className="ability-constitution">
                        <h4>CON</h4>
                        <p>{con}</p>
                    </div>
                    <div className="ability-intelligence">
                        <h4>INT</h4>
                        <p>{int}</p>
                    </div>
                    <div className="ability-wisdom">
                        <h4>WIS</h4>
                        <p>{wis}</p>
                    </div>
                    <div className="ability-charisma">
                        <h4>CHA</h4>
                        <p>{cha}</p>
                    </div>
                </div>
                <svg height="5" width="100%" className="tapered-rule">
                    <polyline points="0,0 400,2.5 0,5"/>
                </svg>
                <div className="property-line last">
                    <h4>Challenge </h4>
                    <p>{challenge} ({xp} XP)</p>
                </div>
            </div>
        </div>
        <div className="section-right">
            <div className="actions">
                <h3>Actions</h3>
                {actions}
            </div>
        </div>

        <hr className="orange-border bottom"/>
    </div>);
}


export default function useMonsterList(pageNumber) {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [monsters, setMonsters] = useState([])
    const [urls, setUrls] = useState([])
    const [pageSize] = useState(5)
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://www.dnd5eapi.co/api/monsters').then(res => {
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

        current.forEach((url, index) => {
            axios
                .get('https://www.dnd5eapi.co' + url)
                .then(res => {
                    let actions = res.data.actions.map((act, index) =>
                        <div className="property-block" key={index}>
                            <h4>{act.name}: </h4>
                            <p>{act.desc}</p>
                        </div>
                    )

                    setMonsters(prevMonsters =>
                        [...new Set([
                            ...prevMonsters,
                            <Monster
                                name={res.data.name}
                                size={res.data.size}
                                type={res.data.type}
                                alignment={res.data.alignment}
                                armor={res.data.armor_class}
                                hit_points={res.data.hit_points}
                                speed={res.data.speed.walk}
                                str={res.data.strength}
                                dex={res.data.dexterity}
                                con={res.data.constitution}
                                int={res.data.intelligence}
                                wis={res.data.wisdom}
                                cha={res.data.charisma}
                                challenge={res.data.challenge_rating}
                                xp={res.data.xp}
                                actions={actions}
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


    return {loading, error, monsters, hasMore}
}
