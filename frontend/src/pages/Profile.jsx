import Leaderboard from "../components/Leaderboard";


function Profile(){


return(

<div className="profile">


<h1>
👤 Player Profile
</h1>


<div className="profile-card">


<h2>Bheemeswari</h2>

<p>🎮 Level : Pro Gamer</p>

<p>🔥 Games Played : 4</p>

<p>🏆 Total Score : 360</p>


</div>


<Leaderboard />


</div>

);


}


export default Profile;