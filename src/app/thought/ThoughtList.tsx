async function getThoughts(){
    const result = await fetch('http://localhost:4000/thoughts',{
        next:{
            revalidate: 0 //refresh rate by seconds
        }
    })
    
    return result.json()
}

export default async function ThoughtList() {
    const thoughts = await getThoughts()
    return (
    <>
        {thoughts.map((thought) =>(
            <div key={thought.id} className="card my-5">
                <h3>{thought.title}</h3>
                <p>{thought.content}</p>
                {/* <div className={`pill ${thought.content}`}>
                    {thought.content}
                </div> */}
            </div>
        ))}
        {thoughts.length === 0 && (
            <p className="text-center">My life is considerable happy :)</p>
        )}
    </>
    )
}