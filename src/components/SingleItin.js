import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios'
import {UserContext} from '../contexts/UserContext';

const SingleItinerary = (props) => {

  const {users} = useContext(UserContext);

  const [itin, setItin] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const id = props.match.params.id.split('&')[0];
  const loggedUser = users ? users.filter( user => user.mail == localStorage.mail) : undefined;

  useEffect( () => {
    const getItin = async (id) => {
      await axios.get(`http://localhost:4040/itineraries/itins/${id}`)
        .then( res => setItin(res.data) )
        .catch( err => console.log('something went wrong', err))
    };
    getItin(id);
  }, [])

  useEffect( () => getComments(id), [])

  const handleComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loggedUser) {
      try {
        let date = new Date().toDateString()
        let body = {
          userId: loggedUser[0]._id,
          comment,
          itinId: id,
          userName: loggedUser[0].first_name,
          userPic: loggedUser[0].picture,
          date
        }
        console.log('request body', body);
        await axios('http://localhost:4040/itineraries/comment', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          data: body
        })
        .then( res => {setComment('');})
      } catch (err) { console.log('we did not get that comment', err)}

    }
  }

  const getComments = async (id) => {
    await axios.get(`http://localhost:4040/itineraries/comments/${id}`)
    .then( res => {setCommentsList(res.data)})
    .catch( err => console.log(err))
  }

  let shownItin = itin ? (
    itin.map( itin => {

      let hashtags = itin.hashtags ? (
        itin.hashtags.split(',').map( (has, i) => {
          if (has.length) {
            return(
              <span style={{margin: '0 10px', fontStyle:'italic'}} key={i}>#{has}</span>
            )
          }
      })
    ) : (<p>No hashtags to show</p>)
      return (
        <div style={{margin: '20px 0', borderRadius: '8px', boxShadow: 'rgb(1, 85, 77) 0 0 10px 0'}} key={itin._id}>
          <div style={{backgroundImage: `url(${itin.image})`, backgroundSize: 'cover', width: '300px', heigth: '300px', padding: '20px 10px', color: 'white'}}>
            <h3>{itin.name}</h3>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
              <span>{itin.city}</span>
              <span>{itin.rating} stars</span>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '10px'}}>
            <h4>Some practical information:</h4>
            <p>Duration: {itin.duration}h</p>
            <p>Price: {itin.price}€</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', margin: '20px 0', padding: '5px'}}>
            {hashtags}
          </div>
        </div>
      )
    })
  ) : (<div>Nothing to show yet</div>)



  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
      {shownItin}
      <h4>Comments on this!</h4>
      { commentsList.length ? (
        commentsList.map( com => {
          return (
            <div key={com._id} style={{borderBottom: '1px teal dashed', marginBottom: '20px'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '300px', padding: '20px 10px'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <img style={{width: '50px', height: '50px', borderRadius: '8px', marginRight: '20px'}} src={com.userPic}/>
                  <span>{com.userName}</span>
                </div>
                <p style={{wordWrap:'wrap', textAlign:'left'}}>{com.comment}</p>
              </div>
              <p>Commented on: {com.date}</p>
            </div>
          )
        })
      ) : (
        <div>Be the first to leave a comment</div>
      )}
      <div style={{display: 'flex', flexDirection:'column', alignItems:'center', border: 'teal 2px solid', borderRadius: '10px', padding: '20px', width: '300px'}}>
        <h3>Leave a comment!</h3>
        <div >
          <img style = {{position: 'relative', width: '50px', height: '50px', borderRadius: '12px', top: '20px', left: '-30px'}}src={loggedUser[0] ? loggedUser[0].picture : undefined} />
          <span>{loggedUser[0] ? loggedUser[0].first_name : 'John Doe'}</span>
        </div>
        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}onSubmit={handleSubmit}>
          <input style={{width: '250px', minHeight: '100px'}} type='text' onChange={handleComment} value={comment}/>
          <button className='reg-but' type='submit'>Comment</button>
        </form>
      </div>
    </div>
  )
}

export default SingleItinerary;
