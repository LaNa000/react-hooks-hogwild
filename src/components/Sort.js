
function Sort({ sort, setSort }) {
    return (
        <>
            <span>Sort by </span>
            <select name="sort" id="sort" class="ui dropdown" onChange={(e) => setSort(e.target.value)}>
                <option value="0">None</option>
                <option value="1">Name</option>
                <option value="2">weight</option>
            </select>
        </>
    )
}
export default Sort;