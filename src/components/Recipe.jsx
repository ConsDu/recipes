import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { BsBookmark, BsFillBookmarkFill, BsThreeDots, BsFillShareFill } from 'react-icons/bs';
import { GiCookingPot } from "react-icons/gi";
import { MdAccessTimeFilled, MdPerson, MdContentCopy } from "react-icons/md";
import { Link } from 'react-router-dom';
import copy from 'copy-to-clipboard';
import snackbar from 'snackbar/dist/snackbar';

function Recipe({ item, onBookmarkToggle, bookmarks }) {

  const handleBookmarkClick = () => {
    onBookmarkToggle(item)
  }

  const handleCopyClick = () => {
    copy(window.location.host + "/#/" + item.id)
    snackbar.show("Copied!")
  }

  return (
    <div className="shadow card width-card mb-5 mx-auto">
      <img src={item.image} className="card-img-top card-image" alt="..." height={300} />
      <div className="card-body">
        <div className='d-flex justify-content-between'>
          <Link to={"/" + item.id} className="text-dark text-decoration-none"><h5 className="card-title">{item.name}</h5></Link>
          <div className='me-2'>
            <a className='pointer text-dark me-4' onClick={handleCopyClick}>{<BsFillShareFill />}</a>
            <a className='pointer text-dark' onClick={handleBookmarkClick}>{bookmarks.includes(item.id) ? <BsFillBookmarkFill /> : <BsBookmark />}</a>
          </div>
        </div>
        <div className='card-body icon-card'>
          <table className="table table-borderless">
            <thead>
              <tr className='d-flex justify-content-between card-icon'>
                <th scope="col"><MdAccessTimeFilled className='fs-3 mt-2' /></th>
                <th scope="col"><GiCookingPot className='fs-1' /></th>
                <th scope="col"><MdPerson className='fs-2 mt-1' /></th>
              </tr>
            </thead>
            <tbody>
              <tr className='d-flex justify-content-between ps-1 pe-1'>
                <td className='text-secondary'>{item.time + "'"}</td>
                <td className='text-secondary'>{item.cooked}</td>
                <td className='me-1 text-secondary'>{item.people}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-group list-group-flush">
          {item.ingredients.map(item => {
            return <li key={uuidv4()} className="list-group-item d-flex justify-content-between"><span><a href={`https://www.google.com/search?q=${item.name}`} className="text-black text-decoration-none" target="_blank">{item.name}</a></span><span className='text-secondary'>{item.quantity}</span></li>
          })}
        </ul>
      </div>
      <div className='d-flex justify-content-center'>
        <button className="btn btn-light rounded-0 rounded-bottom w-100" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + item.id} aria-expanded="false" aria-controls="collapseExample">
          <BsThreeDots />
        </button>
      </div>
      <div className="collapse" id={"collapseExample" + item.id}>
        <div className="card-body">
          {item.instructions.map(instruction => {
            return <p className="card-text" key={uuidv4()}>▸ {instruction}</p>
          })}
        </div>
      </div>
    </div>
  )
}

export default Recipe;