import "./App.css";
import ProfilePhoto from "./component/Profile/ProfilePhoto";
import FullName from "./component/Profile/FullName";
import Address from "./component/Profile/Address";

function App() {
    return (
        <div className="App">
            <ProfilePhoto src="./Avatar.jpg" />
            <FullName name=" Taher Chabaane" />
            <Address Address="Bizerte Tunisia" />
        </div>
    );
}

export default App;