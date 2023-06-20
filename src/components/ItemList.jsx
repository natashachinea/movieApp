function ItemList({results}) {



    return (
        <div>
            <div>
            {results.map((result, index) => (
                <li key={index}>{result.name}</li>
            ))}
            </div>

        </div>
    )
}

export default ItemList;