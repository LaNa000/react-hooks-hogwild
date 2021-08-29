
function Filter( { greased, setGreased }) {

    return (
        <>
            <span>Filter by </span>
            <select name="greased" id="greased" class="ui dropdown" onChange={(e) => setGreased(e.target.value)}>
                <option value="0">All</option>
                <option value="1">greased</option>
                <option value="2">not greased</option>
            </select>
        </>
    )
}
export default Filter;