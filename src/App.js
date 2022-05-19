import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'


const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)
  

  const fetchData = async () =>{
    const response = await fetch(url)
    const tabsData = await response.json()
    setData(tabsData)
    setLoading(false)
  }

  useEffect(()=>{
    fetchData()
    
  }, [])

  const chooseCompany = (index) => {
    setValue(index)
  }

  
  
  if(loading){
    return(
      <h1>Loading...</h1>
      )
    }
    
  else{
    const {title, dates, duties, company} = data[value]
    return (
    <>
    <div className = "d-flex justify-content-center align-items-center flex-column">
      <h1>Experience</h1>
    </div>
      <div className = "d-flex justify-content-center align-items-center">
        <div className = "m-5 d-flex flex-column">
          {data.map((company, index)=>{

            return (
              <Button onClick = {()=> chooseCompany(index)} className = "mt-1" variant = "outline-dark">{company.company}</Button>
            )
          })}
        </div>
        <div className = "m-5">
          <h2>{title}</h2>
          <h3>{company}</h3>
          <h4>{dates}</h4>
          <ul>
            {duties.map((d)=>{
              return(
                <li>
                  {d}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      
    </>
  );
  }
  

}
export default App;
