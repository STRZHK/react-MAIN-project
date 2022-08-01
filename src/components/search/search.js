import React from "react";

export const Search = () => {
    return(
        <div className={"search"}>
            <section>
                <form action={""}>
                    <div className={"inputField"}>
                        <input placeholder={"Search..."} type={"text"}/>
                    </div>
                </form>
            </section>
        </div>
    )
}