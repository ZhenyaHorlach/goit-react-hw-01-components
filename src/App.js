import User from './components/User';
import users from './user.json';

export default function App() {
    return (
        <div>
            <User
                tag={users[0].tag}
                username={users[0].username}
                location={users[0].location}
                avatar={users[0].avatar}
                userFollowers={users[0].stats.followers}
                userViews={users[0].stats.views}
                userLikes={users[0].stats.likes}
            />
            {/* <Data
                label={data[0].label}
                percentage={data[0].percentage}
            /> */}
            {/* <Friends
                avatar={friends[0].avatar}
                name={friends[0].name}

            /> */}
            {/* <Transactions
                type={transactions[0].type}
                amount={transactions[0].amount}
                currency={transactions[0].currency}
            /> */}
        </div>
    );
}