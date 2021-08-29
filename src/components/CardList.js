import { useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import Sort from "./Sort";

function CardList({ hogs }) {

    const [greased, setGreased] = useState(0);
    const [sort, setSort] = useState(0);

    const sortedHog = hogs;
    {
        if (sort == 1) {
            const sortedHog = hogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name));
        } else if (sort == 2) {
            const sortedHog = hogs.sort((hog1, hog2) => hog1.weight - hog2.weight);
        }
    }

    const greasedFilter = () => {
        if(greased == 0) {
            return (
                <div class="ui three stackable cards">
                    {
                        sortedHog.map((hog) =>
                            <Card hog={hog} />
                        )
                    }
                </div>
            )
        }
        else if (greased == 1) {
            return (
                <div class="ui three stackable cards">
                    {
                        sortedHog.filter((hog) => hog.greased == true)
                        .map((hog) =>
                            <Card hog={hog} />
                        )
                    }
                </div>
            )
        }
        else if (greased == 2) {
            return (
                <div class="ui three stackable cards">
                    {
                        sortedHog.filter((hog) => hog.greased == false)
                        .map((hog) =>
                            <Card hog={hog} />
                        )
                    }
                </div>
            )
        }
    }

    return (
        <>
            <Filter greased={greased} setGreased={setGreased} />
            <span> </span>
            <Sort sort={sort} setSort={setSort} />
            {greasedFilter()}
        </>
    )
}
export default CardList;