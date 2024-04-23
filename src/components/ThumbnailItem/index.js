// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, change, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const onImageThumbnailClick = () => change(id)
  const imageClass = isActive ? 'highlight' : 'normal'
  return (
    <li className="list">
      <button className="button">
        <img
          className={`image ${imageClass}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onImageThumbnailClick}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
