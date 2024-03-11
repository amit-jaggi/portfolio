import {useState, createContext} from 'react';
import htmlLogo from '../../image/html5-logo.png';
import cssLogo from '../../image/css3-logo.png';
import javascriptLogo from '../../image/js-logo.png';
import githubLogo from '../../image/github-logo.png';
import reactLogo from '../../image/react-logo.svg';
import typescriptLogo from '../../image/typescript-logo.svg';
import nodeLogo from '../../image/node-logo.png';
import backTracking from '../../image/back-tracking.JPG';
import todoWebMobile from '../../image/todo-web-mobile.jpg';
import todoAppJS from '../../image/todo-app-js.jpg';
import digitalClock from '../../image/digital-clock.JPG';
import theSiren from '../../image/the-siren.JPG';
import baseDashboard from '../../image/base-dashboard.PNG';
import boltEarthAssingment from '../../image/bolt.earth-assignment.PNG';
import goMarbleAssignment from '../../image/go-marble-dashboard.png';
import person1 from '../../image/testimonial-image-1.jpeg';
import person2 from '../../image/testimonial-image-2.jpg';
import person3 from '../../image/testimonial-image-3.jpeg';

export const MainDataBase = createContext();

export const DataBase = ({children}) => {
    const [data] = useState([
        {
            id : `1`,
            category : `DevelopmentLanguage`,
            url : htmlLogo
        },
        {
            id : `2`,
            category : `DevelopmentLanguage`,
            url : cssLogo
        },
        {
            id : `3`,
            category : `DevelopmentLanguage`,
            url : javascriptLogo
        },
        {
            id : `4`,
            category : `DevelopmentLanguage`,
            url : reactLogo
        },
        {
            id : `5`,
            category : `DevelopmentLanguage`,
            url : typescriptLogo
        },
        {
            id : `6`,
            category : `DevelopmentLanguage`,
            url : nodeLogo
        },
        {
            id : `7`,
            category : `DevelopmentLanguage`,
            url : githubLogo
        },
        {
            id : `1`,
            category : `Portfolio`,
            title : `BackTracking App`,
            imageUrl : backTracking,
            repositoryUrl : `https://amit-jaggi.github.io/backtrackingProject/` 
        },
        {
            id : `2`,
            category : `Portfolio`,
            title : `Todo Web / Mobile App`,
            imageUrl : todoWebMobile,
            repositoryUrl : `https://amit-jaggi.github.io/todo_MobileApp/` 
        },
        {
            id : `3`,
            category : `Portfolio`,
            title : `Todo App JS`,
            imageUrl : todoAppJS,
            repositoryUrl : `https://amit-jaggi.github.io/todoApp_JS/` 
        },
        {
            id : `4`,
            category : `Portfolio`,
            title : `Digital Clock`,
            imageUrl : digitalClock,
            repositoryUrl : `https://amit-jaggi.github.io/digital_Clock/` 
        },
        {
            id : `5`,
            category : `Portfolio`,
            title : `The Siren Blog`,
            imageUrl : theSiren,
            repositoryUrl : `https://hopeful-brahmagupta-02115a.netlify.app/` 
        },
        {
            id : `6`,
            category : `Portfolio`,
            title : `Revos Dashboard`,
            imageUrl : boltEarthAssingment,
            repositoryUrl : `https://eloquent-beignet-c1ce24.netlify.app/` 
        },
        {
            id : `7`,
            category : `Portfolio`,
            title : `Base Dashboard | CSV Upload`,
            imageUrl : baseDashboard,
            repositoryUrl : `https://taupe-biscotti-874e94.netlify.app/` 
        },
        {
            id : `8`,
            category : `Portfolio`,
            title : `Go Marble | Dashboard Panel`,
            imageUrl : goMarbleAssignment,
            repositoryUrl : `https://gomarble.netlify.app/` 
        },
        {
            id: `1`,
            category : `Testimonial`,
            personImage : person1,
            personName : `Mohd Sufian Mohiuddin`,
            personOpinion : `He is a very hard working and a responsible person. His professional aspect is clear and is a risk taker and moreover he has what it takes to be a good leader as he has shapened his skills to develop and showcase what needs to be done.`
        },
        {
            id: `2`,
            category : `Testimonial`,
            personImage : person2,
            personName : `Deepak Pradhan`,
            personOpinion : `He is a friendly person and always helpful in nature. He is always into programming which makes his projects look more clean.`
        },
        {
            id: `3`,
            category : `Testimonial`,
            personImage : person3,
            personName : `Einstine Wittke`,
            personOpinion : `He is a very dedicated person towards his career. If someone approaches to him with some doubts he always comes up with the solution. He is having a friendly nature.`
        }
        // {
        //     id: `4`,
        //     category : `Testimonial`,
        //     personImage : person4,
        //     personName : `Kunal Sengupta`,
        //     personOpinion : `He is very focused and passionate about building creative websites. He is always up with different ideas and approach so as to tackle any kind of situations while developing.`
        // }
    ]);

    return (
        <MainDataBase.Provider value={[data]}>
            {children}
        </MainDataBase.Provider>
    );
}