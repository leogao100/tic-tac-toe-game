import React from "react";

interface GameOverProps { 
    winner: string | null;
    onRestart: () => void; 
}

const GameOver: React.FC<GameOverProps> = ({ winner, onRestart }) => { 
    return (
        <></>
    )
}

export default GameOver;
