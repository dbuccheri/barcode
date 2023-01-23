import "./App.css";
import { uidData } from "./uidData";
 
 
 
 
const Component = () => {
    const searchParams = new URLSearchParams(document.location.search)
    const par_uid = searchParams.get('IUD')
    const getUID = uidData.filter (ID => ID.UID === par_uid )
 
    return (
        <div>
        <div id="header">
        <img src="kplogo.png" width="200px" />
        </div>
        <h1 id="UID">
            Unique Identifier Database
        </h1>
       <div > {getUID.map(data => (
       <div>
       <div id="data" class="parent">
 
       
        <div class="child">
             <span class="label">UID:</span> {data.UID}<br />
             <span class="label">Project:</span>  {data.Project}<br />
             <span class="label">Letter ID:</span>  {data.LetterID}<br />
             <span class="label">Region:</span>  {data.Region}<br />
             <span class="label">Release Date:</span>  {data.release_date}<br />
             <span class="label">Revision:</span>  {data.revision}<br />
             <span class="label">Test Case:</span>  {data.testgroup}<br />
             <span class="label">Owner Group:</span>  {data.ownergroup}<br />
             <span class="label">Client:</span>      <a href="mailto:{data.client}"> {data.client} </a><br />
             <span class="label">TC Contact:</span>   <a href="mailto:{data.tc}"> {data.tc} </a><br />
             <span class="label">Notes:</span>   {data.notes}<br />
        </div>
       </div>
       </div>
      
      ))}</div>
        </div>
    )
}

export default Component;