import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="leaderboards">
      <h5 className="leaderboard-header">24 Hour Leaderboard</h5>
        <ol className="rank">
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" />
            <div>Lurd</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" />
            <div>Mitchalas</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" />
            <div>Kman520</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" />
            <div>Baalbakki99</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" />
            <div>PHawk</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" />
            <div>MixFruit</div>
          </li>
          <li className="userposition">
            <img src="https://img.icons8.com/pastel-glyph/40/000000/user-male--v1.png" />
            <div>Mdog1</div>
          </li>
        </ol>
        <Link className="full-leaderboard-link" to="leaderboards">Expanded Leaderboards</Link>
      </div>
      <div className="leaderboard-posts">
        <div className="boxx-column">
          <div className="boxx-container">
            <div className="boxx">
              <img className="boxx-img" src="https://previews.123rf.com/images/dolgachov/dolgachov1904/dolgachov190401638/120809683-boy-in-red-t-shirt-drinking-soda-from-tin-can.jpg"/>
            </div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="boxx-description">Enjoying that fresh fizzy soda</p>
              <img
                className="comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="desc-comment">@user123 awesome!</p>
            </div>
          </div>
          <div className="boxx-container">
            <div className="boxx">
              <img className="boxx-img" src="https://ak.picdn.net/shutterstock/videos/20455645/thumb/10.jpg"/>
            </div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="boxx-description">I'm aboutta "bounce"....get it??</p>
              <img
                className="comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="desc-comment">@user123 Lol I get it!</p>
            </div>
          </div>
          <div className="boxx-container">
            <div className="boxx">
              <img className="boxx-img" src="https://d1yn1kh78jj1rr.cloudfront.net/image/preview/rDtN98Qoishumwih/graphicstock-happy-hungry-man-eating-pizza-from-a-box-isolated-on-white-background_HdGnKOiB3l_SB_PM.jpg"/>
            </div>
            <div className="post-info">
              <img
                className="profile-comment"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="boxx-description">This pizza is fire... and ON fire!</p>
              <img
                className="comment-profile-icon"
                src="https://www.greenecountyfoundation.org/wp-content/uploads/2019/09/Profile-Icon.png"
                alt=""
              />
              <p className="desc-comment">@user123 Ight relax...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
