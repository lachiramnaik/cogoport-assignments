import React from 'react'

const Assignment_1 = () => {
    const heading={
        marginTop:"10px",
fontSize:"50px",
color:"black"
    }
    const hr={
        width:"400px",
        height:"3px",
        color:"black"
    }
const card={
    border:"none",
    boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding:"20px",
    fontSize:"20px",
    lineHeight:"40px",
    textAlign:"left",
    margin:"20px 0px 20px 0px"
}
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h2 style={heading}>Website selected</h2>
                   <center><hr style={hr} /></center> 
                <iframe className='mt-2' src="https://www.freejobalert.com/" width="100%" height="600">
</iframe>
                </div>
            </div>


            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h2 style={heading}>Changes Recommended Above To Website</h2>
                   <center><hr style={hr} /></center> 
                   <div class="card" style={card}>
  <div class="card-body">
      <ol>
<li>Maximum width like responsive:-
We can make the width of the website fully responsive. It looks like a little article.
</li>
<li>Menu when a website comes to mobile screen.
We can make a responsive menu using the menu icon and media screen. Here are the lots of links visible when screen in mobile view.but now its covering most of the page with header and menu. </li>
<li>All the Grid operation
Here all the grid(Flexbox) is mixing we can create with  giving space in between the grid so the user can attract.
</li>
<li>It is better to implement a footer, inside the footer we can display about, social media icons  so users can get easily in this website we can see social media links inside the contant.</li>
<li>Here when we hover an anchor tag its showing underline unter the link we can remove using text-decoration:none; so it looks good.
  </li>  
<li> 6.here looks all the  html content we can update website more styling with css and bootstrap.
</li>
      </ol>
  </div>
</div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Assignment_1