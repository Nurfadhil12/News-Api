import { Row } from 'react-bootstrap';
import CompCard from './Card';
import './News.css';



function News(props) {

  return (
    <div>

      <Row xs={1} md={2} lg={3} className="justify-content-center">
        {props.data
          ? props.data.articles.map((item) => (
            <CompCard datas={item} key={item.url}  />
          ))
          : "Loading..."
        }
        
      </Row>
    </div>
  )
}
export default News;