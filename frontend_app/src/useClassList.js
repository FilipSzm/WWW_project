import { useEffect, useState } from "react";
import axios from "axios";

const Clazz = ({name, hit_die, profi, sub_cl, mul_pr}) => {
    return (<div className="stat-block">
        <hr className="orange-border"/>
        <div className="section-left">
            <div className="creature-heading">
                <h1>{name}</h1>
                <h2>Hit die: {hit_die}</h2>
            </div>
            <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"/>
            </svg>
        </div>
        <div className="section-right">
            <div className="actions">
                <h3>Proficiencies</h3>
                {profi}
            </div>
            <div className="actions">
                <h3>Subclasses</h3>
                {sub_cl}
            </div>
            <div className="actions">
                <h3>Multi Classing</h3>
                {mul_pr}
            </div>
        </div>
        <hr className="orange-border bottom"/>
    </div>);
}


export default function useClassList(pageNumber) {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [classes, setClasses] = useState([])
    const [urls, setUrls] = useState([])
    const [pageSize] = useState(5)
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://www.dnd5eapi.co/api/classes').then(res => {
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
                let proficiencies = res.data.proficiencies.map((prf, index) =>
                    <div className="property-block" key={index}>
                        <p>{prf.name}</p>
                    </div>
                )

                let sub_cl = res.data.subclasses.map((prf, index) =>
                    <div className="property-block" key={index}>
                        <h4>{prf.name}</h4>
                    </div>
                )

                let mul_pr = res.data.multi_classing.proficiencies.map((prf, index) =>
                    <div className="property-block" key={index}>
                        <p>{prf.name}</p>
                    </div>
                )

                setClasses(prevClasses =>
                    [...new Set([
                        ...prevClasses,
                        <Clazz
                            name={res.data.name}
                            hit_die={res.data.hit_die}
                            hm_prof={res.data.proficiency_choices[0].choose}
                            profi={proficiencies}
                            sub_cl={sub_cl}
                            mul_pr={mul_pr}
                        />
                    ])])
                if (current.length === index + 1) setLoading(false)
            })
            .catch((e) => {
                console.log(e)
                setError(true)
            })
        })
        setHasMore(lastIndex < count)
    }, [pageNumber, pageSize, urls, count])



    return { loading, error, classes, hasMore }
}
