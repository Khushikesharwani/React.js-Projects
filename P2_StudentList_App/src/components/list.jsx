import React from "react";

const List = ({people}) => {

    return (
        <>
        {people.map((person) => {
            const {id, name, age, image} = person;

            return (
                <>
                <div key={id} className="person">
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>Age: {age}</p>

                    </div>

                </div>
                </>
            )

        })}
        </>
    )
}

export default List;