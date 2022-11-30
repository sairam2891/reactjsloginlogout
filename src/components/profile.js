import React , { useEffect }from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
//import { posts} from "../actions/posts";
//import UserService from "../services/user.service";

  
const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  //const [post,setupPosts] = useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
      console.log("currentUser",currentUser,dispatch);
    if (currentUser) {
    // UserService.getUsers().then(
    //     (response) => {
    //        // console.log("response",response.data.posts);
           
    //        // setupPosts(response.data.posts);
    //     },
    //     (error) => {
    //       console.log("error",error)  
    //       const _content = error;
    //         // (error.response && error.response.data) ||
    //         // error.message ||
    //         // error.toString();
  
    //         setupPosts(_content);
    //     }
    //   );

    // dispatch(posts())
    //     .then(() => {
    //         console.log("dad")
    //     })
    //     .catch(() => {
    //       //setLoading(false);
    //     });
    }
  },[dispatch,currentUser])

  //const { posts } = useSelector((state) => state);
  //console.log("posts",posts);
  //setupPosts(posts);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
       <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Name:</strong> {currentUser.name}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Date:</strong> {currentUser.date}
      </p>
      <strong>Authorities:</strong>
      {/*<ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
    </div>
  );
};

export default Profile;