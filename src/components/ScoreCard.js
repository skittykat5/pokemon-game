import React from 'react';
import Table from 'react-bootstrap/Table';

function ScoreCard({wins, losses}) {

    return (
        <table class='scorecard'>
            <thead>
                <tr>
                    <td>Correct:</td>
                    <td>Incorrect:</td>
                    <td>Accuracy:</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{wins}</td>
                    <td>{losses}</td>
                    <td>{"% " + (((wins/(wins+losses))*100).toFixed(2))}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ScoreCard;
