import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import ExpertsContainer from './components/Experts/ExpertsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import AccountContainer from './components/Account/AccountContainer';
import { authThunk } from './redux/auth-reducer';
import { connect } from 'react-redux';
import PostLoopContainer from './components/PostLoop/PostLoopContainer';
import PostContainer from './components/Post/PostContainer';
import VacancyLoopContainer from './components/VacancyLoop/VacancyLoopContainer';
import TVLoopContainer from './components/TVLoop/TVLoopContainer';
import TVItemContainer from './components/TVLoop/TVItem/TVItemContainer';
import VacancyContainer from './components/Vacancy/VacancyContainer';
import EventLoopContainer from './components/EventLoop/EventLoopContainer';
import EventContainer from './components/Event/EventContainer';
import CourseLoopContainer from './components/CourseLoop/CourseLoopContainer';
import PageContainer from './components/Page/PageContainer';
import MainPageContainer from './components/MainPage/MainPageContainer';
import YourDataContainer from './components/Account/YourData/YourDataContainer';
import YourFavoritesContainer from './components/Account/YourFavorites/YourFavoritesContainer';
import AddNewPostContainer from './components/Account/AddNewPost/AddNewPostContainer';
import SearchRequestBlockContainer from './components/Header/Search/SearchRequestBlock/SearchRequestBlockContainer';
import ProfileDataContainer from './components/Profile/ProfileData/ProfileDataContainer';
import AddNewVideoContainer from './components/Account/AddNewVideo/AddNewVideoContainer';
import AddNewVacancyContainer from './components/Account/AddNewVacancy/AddNewVacancyContainer';
import AddNewEventContainer from './components/Account/AddNewEvent/AddNewEventContainer';

class App extends React.Component {

  componentDidMount() {
    this.props.authThunk(localStorage.getItem('token'));    
  } 

  render() {
    return (
      <div className="wrap_main">
        <header className="header">
          <Header />
        </header>
        <div className="content">          
          <Route exact path="/" render={() => <MainPageContainer />} />
          <Route path="/experts" render={() => <ExpertsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/account/" render={() => <AccountContainer />} />
          <Route path="/posts/:catId?/:catName?" render={() => <PostLoopContainer />} />
          <Route path="/post/:postId?" render={() => <PostContainer />} />
          <Route path="/vacancies/" render={() => <VacancyLoopContainer />} />
          <Route path="/vacancy/:vacancyId?" render={() => <VacancyContainer />} />
          <Route path="/events_cat/" render={() => <EventLoopContainer />} />
          <Route path="/event/:eventId?" render={() => <EventContainer />} />
          <Route path="/course_cat/" render={() => <CourseLoopContainer />} />
          <Route path="/page/slug/:pageSlug?" render={() => <PageContainer />} />
          <Route path="/mydata/:dataType?/:userId?" render={() => <YourDataContainer />} />
          <Route path="/add/posts/:userId?" render={() => <AddNewPostContainer />} />
          <Route path="/add/tv_video/:userId?" render={() => <AddNewVideoContainer />} />
          <Route path="/add/vacancy/:userId?" render={() => <AddNewVacancyContainer />} />
          <Route path="/add/event/:userId?" render={() => <AddNewEventContainer />} />

          <Route path="/edit/posts/:itemsId?" render={() => <AddNewPostContainer />} />
          <Route path="/edit/tv_video/:itemsId?" render={() => <AddNewVideoContainer />} />
          <Route path="/edit/vacancy/:itemsId?" render={() => <AddNewVacancyContainer />} />
          <Route path="/edit/event/:itemsId?" render={() => <AddNewEventContainer />} />
          <Route path="/tv_video_cat/" render={() => <TVLoopContainer />} />
          <Route path="/tv_video/:videoId?" render={() => <TVItemContainer />} />
          <Route path="/search/:searchQuery?" render={() => <SearchRequestBlockContainer />} />
          <Route path="/profile_data/:profileId?/:dataName?" render={() => <ProfileDataContainer />} />
          <Route path="/my_favorites/:profileId?/:typeName?" render={() => <YourFavoritesContainer />} />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default connect(null, {authThunk})(App);