import './index.css';

import { Link } from 'react-router-dom';

const ListMenu = ({ cvi }) => {
  let listItem;
  if (!Array.isArray(cvi)) {
    listItem =
      cvi.row.map(data =>
        <li key={data.id} className="li-list">
          <Link to={data.name} className="nav-list">{data.name}</Link>
        </li>
      )
  }


  return (
    <div>
      <ul className='ul-list'>{listItem}</ul>
    </div>
  )
}

export default ListMenu;