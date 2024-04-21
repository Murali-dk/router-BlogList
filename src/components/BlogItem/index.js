// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, publishedDate, description} = eachItem
  return (
    <li>
      <div className="div">
        <h1 className="head">{title}</h1>
        <p className="p">{publishedDate}</p>
      </div>
      <p className="p">{description}</p>
    </li>
  )
}

export default BlogItem
