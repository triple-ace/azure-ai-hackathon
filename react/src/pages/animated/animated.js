function Animated() {
    return (
        <div style={{height:"700px"}}>
            <h1 style={{textAlign:"center"}}>US Monthly Flights vs COVID Confirmed Cases Over Time</h1>
            <p style={{textAlign:"center"}}>This animated scatter plot shows US Monthly Flights vs COVID Confirmed Cases over time for the top 10 busiest states by airport passenger total passenger boardings. An inverse relationship can be seen between flights and COVID cases as we go progress through the pandemic from late 2019 to 2020        </p>

            <iframe style={{marginLeft:"5%"}} width="90%" height="550px" src="https://www.youtube.com/embed/t4T-3JpSyZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export { Animated };