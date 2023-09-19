import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchengin } from "@fortawesome/free-brands-svg-icons"
import { TagInput } from "rsuite"
import Tag from 'rsuite/Tag';
import TagGroup from 'rsuite/TagGroup';
import './App.css';
import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const displayTags = ["Html", "Css", "JavaScript", "Python", "NodeJS"]
  const [tags, setTags] = useState([]);
  const chunckSize = 2;
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const searchBar = useRef();
  const [cards,setCards] = useState(items.slice(0,chunckSize));
  
  const setInput = () => {
    console.log(searchBar.current.target.props);
  }
  const removeTags = (event,tag) => {
    if(event.code == "Backspace"){
      if(searchTitle == ""){
        if(tags.length > 0){
          setTags([...tags.slice(0,tags.length-1)]);
        }
      }
      return;
    }
    const nextTags = tags.filter(item => item !== tag);
    setTags(nextTags);
  }
  const addTags = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  }
  const navigateNext = (idx) => {
    
    console.log(idx);
    let sidx = ((chunckSize*(idx-1)))%items.length;
    let eidx = Math.min(items.length-1,sidx + chunckSize-1);

    const splicedArray = items.slice(sidx,eidx+1);
    console.log(splicedArray);
    setCards(splicedArray);
  }
  const styles = { width: 300, display: 'block', marginBottom: 10, border: "10px solid green" };
  return (
    <div className="App-header">
      <div className="search-wrapper-tags">
        <div className="searchIcon">
          <FontAwesomeIcon icon={faSearchengin} color="#000000" />
        </div>
        <div className="search-input-area-tag">
          <div className="tagging-area">
            {tags.map((t) => {
              return (
                <Tag size="lg" closable onClose={(event) => removeTags(event,t)}>{t}</Tag>
              )
            })}
          </div>
          <div className="regular-search-text">
            <input className="search-text" type="text" name="" id=""value={searchTitle} onChange={(e)=>setSearchTitle(e.target.value)} onKeyUp={(event)=>removeTags(event)}/>
          </div>
        </div>
 
      </div>
      <div className="display-skills-tags">
        <TagGroup>
          {displayTags.map((t) => {
            return (
              <Tag size="lg" color="white" onClick={() => addTags(t)}>{t}</Tag>
            )
          })}
        </TagGroup>
      </div>
      <div className="projects-card-container">
        <div className="skill-card-show">
          {cards.map((e) => {
            return (
              <ProductCard tags={displayTags}></ProductCard>
            )
          })}

        </div>

      </div>

      <div className="pages-item-scroll">
        <div className="pagination">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(idx => {
            return (
              <>
                <input id={`dotted-${idx}`} type="radio" name="dotteds" onClick={()=>navigateNext(idx)}/>
                <label htmlFor={`dotted-${idx}`} />
              </>
            )
          })}
          <div className="pacman" />
        </div>

      </div>
    </div>
  );
}

export default App;
