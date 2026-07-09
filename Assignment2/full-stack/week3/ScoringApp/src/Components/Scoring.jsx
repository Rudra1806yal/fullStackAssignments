import {useState} from "react";

function Scoring(){
    const [balls, setBalls] = useState(0);
    const [runs, setRuns] = useState(0);

    const hitBalls = () => {
        if(balls < 6){
            const randomRuns = Math.floor(Math.random()* 7);

            setBalls((prev) => prev + 1);
            setRuns((prev) => prev + randomRuns);
        }
    };

    const resetGames = ()=>{
        setBalls(0);
        setRuns(0);
    };

    return(
        <div className = "Scoring">
            <div className = "scoreBoard">
                <h2>Cricket Scoreboard</h2>
                <p>Balls: {balls}/6</p>
                <p>Runs: {runs}</p>
            </div>

            <button onClick = {hitBalls} disabled = {balls === 6}>
                Click to hit the ball
            </button>

            <button onClick = {resetGames} className = "reset">
                Reset
            </button>
        </div>
    );
}
export default Scoring;

