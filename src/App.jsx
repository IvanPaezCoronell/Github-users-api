import './App.css';
import { AiOutlineSearch } from 'react-icons/ai';

function App() {
	const searchGithub = async () => {
		const username = document.getElementById('searchInput').value;
		const response = await fetch(`https://api.github.com/users/${username}`);
		const detailsContainer = document.querySelector('.details');
		const data = await response.json();

		if (response.ok) {
			detailsContainer.getElementsByClassName.display = 'flex';
			document.getElementById('result').innerHTML = `
      <div className="profile">
                <div className="profile-image">
                    <img src="${data.avatar_url}" />
                </div>
                <div className="profile-details">
                    <h2 className="name">${data.name || data.login}</h2>
                    <p className="username">@${data.login}</p>
                    <p className="bio">${data.bio ||
											"Account doesn't have a bio."}</p>

                    <div className="stats">
                        <div>
                            <div className="stats-name">Public Repos</div>
                            <div className="stats-value">${data.public_repos}</div>
                        </div>
                        <div>
                            <div className="stats-name">Followers</div>
                            <div className="stats-value">${data.followers}</div>
                        </div>
                        <div>
                            <div className="stats-name">Following</div>
                            <div className="stats-value">${data.following}</div>
                        </div>
                    </div>

                <div className="media">
                    <p>
                        <span className="media-value">${data.location ||
													'Not Available'}</span>
                    </p>
                    <p>
                        <span className="media-value">${data.blog ||
													'Not Available'}</span>
                    </p>
                    <p>
                        <span className="media-value">${data.twitter_username ||
													'Not Available'}</span>
                    </p>
                    <p>
                        <span className="media-value">${data.company ||
													'Not Available'}</span>
                    </p>
                </div>
            </div>
        </div>
      
      `;
		} else {
			alert(data.message);
		}
	};

	return (
		<div>
			<div className="container">
				<h1>Get GitHub User <span>GitHub Api</span> </h1>
        

				<div className="searchBox">
					<input
						type="text"
						id="searchInput"
						className="form-control"
						placeholder="Enter GitHub Username"
					/>

					<button type="button" onClick={searchGithub}>
						Search <AiOutlineSearch />
					</button>
				</div>
      <div className="details" id="result" />
			</div>
		</div>
	);
}

export default App;
