import './App.css';
import { CardContext } from './Context/CardContext';
import { useContext, useState } from 'react';
import TagInput from './TagInput';

export default function Card(){

    const { product } = useContext(CardContext);
    const [tags, setTags] = useState([]);

     const filteredProduct = product?.filter((item) =>
        tags.length === 0
        ? true
        : item.skills.some((skill) =>
            tags.some((tag) => skill.toLowerCase().includes(tag.toLowerCase()))
            )
    );
    return(
        <div className="Container min-h-screens ">
            <div className="box1">
                <img 
                    src={`${process.env.PUBLIC_URL}/images/bg-header-desktop.svg`} 
                    alt="Placeholder" 
                    className="w-full h-auto object-cover"
                />
                <TagInput
                    onChange={setTags}
                />
            </div>

            <div className="box2 mx-auto max-w-7xl min-h-screen">
                
                {filteredProduct.length > 0 && filteredProduct.map((items) => (
                   
                   <div key={items.id} className="card">
                        <div className="card-one">
                            <img src={items.logo} alt="Placeholder" />
                        </div>
                        <div className="card-two">
                            <span className="this_text pr-4 font-bold text-lg">{items.name}</span><span className="this_ft px-2 py-1 bg-blue-200 rounded-2xl font-bold">NEW!</span><span className="this_ft2 ml-2 px-2 py-1 bg-blue-200 rounded-2xl font-bold">FEATURED</span>
                            <p className="this_text_file font-bold text-xl py-2">{items.position}</p>
                            <span className="this_sp pr-5">{items.postedAt}</span><span className="this_sp">.</span><span className="this_sp px-5">{items.contract}</span><span className="this_sp">.</span><span className="this_sp pl-5">{items.location}</span>
                        </div>
                        <div className="card-three">
                            {items.skills.map((skill, index) => (
                                <button key={index} className="this_skill text-sm px-2 py-1 rounded-full mr-2 mb-2">{skill}</button>
                            ))}
                        </div>
                        </div>
                    )
                )}
            </div>
            
        </div>
    );
    const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '40px',
    cursor: 'text',
  },
  tag: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: '16px',
    padding: '4px 8px',
    margin: '4px',
    fontSize: '14px',
  },
  remove: {
    marginLeft: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  input: {
    border: 'none',
    outline: 'none',
    flex: 1,
    minWidth: '100px',
    fontSize: '14px',
    padding: '4px',
  }
};
}