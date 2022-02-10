import ReactDOM from 'react-dom';
import users from './user.json';

const data = users[0];

const user = (
  <div class="profile">
    <div class="description">
      <img
        src={data.avatar}
        alt={data.username}
        class="avatar"
      />
      <p class="name">{data.username}</p>
      <p class="tag">{data.tag}</p>
      <p class="location">{data.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{data.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(user, document.querySelector('#root'));


// import { App } from 'components/App';
// import reportWebVitals from './reportWebVitals';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
