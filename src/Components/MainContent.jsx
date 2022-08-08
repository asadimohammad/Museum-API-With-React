// Main Content 
const MainContent = (prop) => {
    const artObject = prop.art;
  
    // destructure prop
    const {artistDisplayName, department,title, culture, primaryImageSmall} = prop.art;
  
    // save function  
    return ( 
      <main className="wrapper">
        {
          artObject.objectID &&
          (
          <>
          <p>An art piece for {prop.search}</p>
          <div className="artDisplay">
            <div className="imgContainer">
              <img src={primaryImageSmall} alt={`${title} by ${artistDisplayName}`}  />
            </div>
            <div className="description">  
              <h2>Title : {title}</h2>       
              {department && <p><span>Department:</span> {department}</p>}
              {artistDisplayName && <p><span>Artist Name:</span> {artistDisplayName}</p>}
              {culture && <p><span>culture:</span> {culture}</p>}
              
            </div>              
          </div>
          </>
          ) 
        }
      </main>
    )
  }
  
  export default MainContent;