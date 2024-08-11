import React from 'react';
import styles from './Cards.module.css';

const MyComponent = () => {
  
  const cards = [
    { id: 1, name: '.NET', h1Name:'DevCraft', textColor: '#FF5733', buttonColor:'#C70039',description: 'Comprehensive .NET developer tools and UI controls,desktop and mobile applications,The . NET system includes tools, libraries.' },  
    { id: 2, name: 'NATIVE MOBILE', h1Name:'NativeScript', textColor: '#33FF57', buttonColor: '#28B463',description: 'NativeScript provides platform APIs directly to the JavaScript runtime ,for a rich TypeScript development experience. Some popular use cases ' }, 
    { id: 3, name: 'HTML5',h1Name:'Kendo UI', textColor: '#3357FF', buttonColor: '#2980B9',description:'Kendo UI is a bundle of four JavaScript UI libraries built natively for jQuery, Angular, React and Vue. Each is built with consistent API' },     
    { id: 4, name: 'CMS', h1Name:'Progress Sitefinity',textColor: '#F4D03F', buttonColor: '#F1C40F',description:'Sitefinity CMS is a content management system (CMS) that you use to create, store, manage, and present content on your website.' },      
    { id: 5, name: 'MOBILE',h1Name:'Telerik Platform', textColor: '#9B59B6', buttonColor: '#8E44AD',description:'Telerik Reporting gives developers full control over their data, because it makes use of the most popular data sources ' },   
    { id: 6, name: 'TESTING',h1Name:'Test Studio', textColor: '#E74C3C', buttonColor: '#E67E22',description:'The Telerik Test Studio provides an excellent platform for automation application testing.' },  
  ];

  return (
    <div className={styles.CardsContainer}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={styles.Card}
        >
          <div
            className={styles.CardContent}
            style={{ color: card.textColor }} 
          >
            <h3>{card.name}</h3>
            <h1>{card.h1Name}</h1>
            <p>{card.description}</p>
            <button style={{ backgroundColor: card.buttonColor }}>
            Learn More
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
