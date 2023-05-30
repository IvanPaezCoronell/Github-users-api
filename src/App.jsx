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
            <div className=" profile-page d-fle" id="card-container">
            <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="card profile-header">
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12 d-flex">
                                    <div className="profile-image row p-2 w-100 " id="card-header">
                                     <img src="${data.avatar_url}" />

                                     </div>
                                     <div className="p-4 p-2 flex-shrink-1 >
                                     
                                     <h2 className="m-t-0 m-b-0 text-dark fs-1"><strong className="fs-1">${data.name ||
                data.login} </strong> </h2>
                                     <div>
                                     
                                     <p className="username">@${data.login}</p>
                                     <p className="bio fs-6">${data.bio ||
                "Account doesn't have a bio."}</p>
                                     </div>
                                     </div>
                                </div>
                                <div className="info col-lg-8 col-md-8 col-12">

                                 <div className="mt-2">
                        <div>
                            <div className="stats-name"> <span>Public Repositories</span></div>
                            <div className="stats-value">${data.public_repos}</div>
                        </div>
                        <div>
                            <div className="stats-name"><span>Followers</span></div>
                            <div className="stats-value">${data.followers}</div>
                        </div>
                        <div>
                            <div className="stats-name"><span>Following</span></div>
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
                        </div>                    
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
            <h1>
                Get GitHub User - Github Api <span>2023</span>{' '}
            </h1>

            <div className="searchBox d-flex">
                <input
                    type="text"
                    id="searchInput"
                    className="form-control"
                    placeholder="Enter GitHub Username"
                />

                <button type="button" className="d-flex" onClick={searchGithub}>
                    Search{' '}
                    <div className="icon">
                        <AiOutlineSearch />
                    </div>
                </button>
            </div>
            <div className="details card text-dark mt-5" id="result" />
        </div>
    );
}

export default App;
