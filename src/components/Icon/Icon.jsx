// assets

import edit from '../../assets/icons/edit.svg'
import trash from '../../assets/icons/trash.svg'

const Icon = ({ category }) => {
  const icons = {
    Edit: edit,
    Trash: trash,
  }

  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}

export default Icon
