import React from 'react'
import './index.css'

export default function leaderboardPage() {
  return (
    <div className='leaderboard'>
        <h1>Leaderboard</h1>
        {/* Leaderboard table */}
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Username</th>
                    <th scope="col">GamerScore</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><i class="fa-solid first fa-trophy"></i></th>
                    <td>Mark</td>
                    <td>5035</td>
                </tr>
                <tr>
                    <th scope="row"><i class="fa-solid second fa-trophy"></i></th>
                    <td>Jacob</td>
                    <td>3510</td>
                </tr>
                <tr>
                    <th scope="row"><i class="fa-solid third fa-trophy"></i></th>
                    <td>Larry</td>
                    <td>1500</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
