export default function Team(){


    const teamStyle={
        border:'2px solid red',
        background:'skyblue',
        borderRadious:'10px',
        padding:'10px',
        margin:'10px'
    }

    const [count setCount]=useCount(0)


    return(
        <div style={teamStyle}>
            <h3>Players:</h3>
        </div>
    )
}