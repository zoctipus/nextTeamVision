import React from 'react';
import './App.css';
import ReactStars from "react-rating-stars-component";
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale } from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale
)



function App() {

  const data = {
    labels: ['Leadership', 'Collaboration', 'Work-Life Balance', 'Growth Opportunities', 'Job Security', 'Management'],
    datasets: [{
      data: [3, 2, 4, 1, 5, 3],
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)'
    }]
  }

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const posts = [
    {
      title: 'Long Working Hours: A Normalized Issue',
      content: 'Ever since I joined the corporate world, I have noticed how often employees are expected to work beyond their official hours without receiving any extra compensation. This unhealthy practice not only leads to burnout but also affects work-life balance significantly. There should be clear boundaries set to ensure employees are not overworked.',
      userProfile: 'userProfileImageUrl1', // replace with actual image URL
      username: 'Username1',
      userCareerIntro: 'Software Engineer at XYZ Corp.'
    },
    {
      title: 'Diversity and Inclusion: Just Buzzwords?',
      content: 'Despite the constant emphasis on diversity and inclusion, there seems to be a lack of genuine effort to foster a diverse and inclusive work environment. The same groups of people are repeatedly marginalized, making it hard for different voices to be heard. It’s time we turn these buzzwords into actions.',
      userProfile: 'userProfileImageUrl2', // replace with actual image URL
      username: 'Username2',
      userCareerIntro: 'Product Manager at ABC Inc.'
    },
    {
      title: 'The Issue with Top-Down Communication',
      content: 'One of the common issues I’ve noticed is the lack of bottom-up communication. Decision-making is often reserved for the top management, with little to no consultation with those directly affected by these decisions. I believe a shift towards a more transparent and inclusive approach would greatly benefit the company culture.',
      userProfile: 'userProfileImageUrl3', // replace with actual image URL
      username: 'Username3',
      userCareerIntro: 'Human Resources Specialist at JKL Enterprises.'
    },
    {
      title: 'Unhealthy Competition Over Collaboration',
      content: 'In my years of corporate experience, I’ve seen how the promotion of excessive competition over collaboration can create a toxic work environment. When employees are driven to outperform each other at all costs, the spirit of teamwork and collective growth suffers. I believe it’s time companies rethink their reward and recognition strategies.',
      userProfile: 'userProfileImageUrl4', // replace with actual image URL
      username: 'Username4',
      userCareerIntro: 'Business Analyst at MNO Company.'
    }
  ]
  
  return (
    <div className="app">
      {/* <header>
        <div className="logo">
          <img src="logo.png" alt="Team Things Logo" /> 
          <span>Next Team Vision</span>
        </div>
        <div className="home-icon">
          <img src="home-icon.png" alt="Home Icon" /> 
        </div>
        <input className="search-input" type="search" placeholder="Search..." />
        <div className="user-info">
          <img src="userProfileImageUrl" alt="Username" /> 
          <span>Username</span> 
        </div>
      </header> */}

      <div className="content">

        {/* <div className="media">
          
        </div> */}

        <div className="posts">
          {posts.map(post => (
            <div className="post">
              <div className="user-info">
                <img src={post.userProfile} alt={post.username} className="user-image"/>
                <div>
                  <h4>{post.username}</h4>
                  <p className="user-career">{post.userCareerIntro}</p>
                </div>
              </div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>

        
        <div className="sidebar">
          <div className="box">
            <h3>Overall Score <br/> Data Management Team @ Google</h3>
            <ReactStars
              count={5}
              value={2.5}
              size={24}
              activeColor="#eed700"
            />
            <Radar
              data = {data}
            />
            
          </div>
          <div className="box highlights">
            <h3>Comment Highlights</h3>
            <ul>
              <li>"Excessive competition over collaboration creates a toxic environment."</li>
              <li>"There's a lack of bottom-up communication."</li>
              <li>"Long working hours without compensation leads to burnout."</li>
              <li>"The promotion of diversity and inclusion seems insincere."</li>
            </ul>
            
          </div>
      
        </div>

        
      </div>

      {/* <footer>
          <h3>"Founded by Employees,"<br/>
          "Empowering Employees:"<br/>
          "Uncovering the Heartbeat of Corporate Culture."</h3>
          <p>Contact: +1 123 456 7890</p>
          <p>Email: info@company.com</p>
      </footer> */}
      
    </div>
  );
}

export default App;