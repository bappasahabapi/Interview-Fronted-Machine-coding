export const Setting =({data,setData})=>{

    const {theme}=data;

    //at a time one only value take dark or light
    const handleChange=(e)=>{
        setData(pre=>({
            ...pre,
            theme:e.target.name
        }))
    }
    return(

        <>
        <h1>Settings</h1>
          <div>
          <label>
            <input type="radio" 
            name="dark"
            checked={theme==='dark'}
            onChange={handleChange}
            /> Dark
          </label>
        </div>
          <div>
          <label>
            <input type="radio" 
            name="light"
            checked={theme==='light'}
             onChange={handleChange}
            /> Light
          </label>
        </div>

        </>
        ) 
}