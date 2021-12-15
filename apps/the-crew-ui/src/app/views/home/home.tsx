import './homeStyles.scss';

import { Autocomplete, Slide, TextField } from '@mui/material';
import { ServiceLocation, Role } from '@the-crew/common/enums';
import { useHistory } from 'react-router';

import { assured, equipment, homeBanner, person, price } from '../../../assets/images/home';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelector } from '../../store/slices';

const whyTheCrewContent = [
  {
    img: price,
    heading: 'Transparent pricing',
    desc: 'See fixed prices before you book. No hidden charges.',
  },
  {
    img: person,
    heading: 'Experts only',
    desc: 'Our professionals are well trained and have on-job expertise.',
  },
  {
    img: equipment,
    heading: 'Fully equipped',
    desc: 'We bring everything needed to get the job done well.',
  },
];

export default function Home() {
  const history = useHistory();
  const user = useSelector(authSelector).user;

  useEffect(() => {
    user && user.role[0] === Role.HANDYMAN && history.push('/bookings');
  }, [history, user]);

  const renderWhyTheCrewHtml = () => {
    return (
      <ul>
        {whyTheCrewContent.map((x, i) => {
          return (
            <li key={i}>
              <div className="whyTheCrewImgContainer">
                <div className="whyTheCrewImgTemplate">
                  <img className="whyTheCrewImg" src={x.img} alt="" />
                </div>
              </div>
              <section className="whyTheCrewInfo">
                <h3 className="WhyTheCrew__heading">{x.heading}</h3>
                <p className="WhyTheCrew__desc">{x.desc}</p>
              </section>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="homeRoot">
      <div className="homePageImgContainer">
        <div className="homePageImgTemplate">
          <img className="homePageImg" src={homeBanner} alt="" />
        </div>
        <div className="homeScreenTitleRoot">
          <div className="homeScreenTitleContainer">
            <Slide direction="up" in={true} timeout={1000}>
              <div className="titleRoot">
                <span className="title">THE CREW</span>

                <h1 className="typingEffect">Quality home services, on demand</h1>
                <p className="titleDesc">
                  Experienced, hand-picked Professionals to serve you at your doorstep
                </p>
                <div className="homeScreenAutoSearchDiv">
                  <p>Where do you need a service?</p>
                  <Autocomplete
                    options={Object.values(ServiceLocation).map(city => ({ city }))}
                    getOptionLabel={option => option.city}
                    style={{ width: 300, overflow: 'hidden' }}
                    renderInput={params => (
                      <TextField
                        style={{ overflow: 'hidden' }}
                        {...params}
                        placeholder="Select your city"
                        variant="outlined"
                      />
                    )}
                    onChange={(evt, value: { city: ServiceLocation }) => {
                      history.push({
                        pathname: 'search',
                        search: `city=${value.city}`,
                      });
                    }}
                  />
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="homePageContent">
        <div className="whyTheCrewDiv">
          <h2>Why The Crew?</h2>
          {renderWhyTheCrewHtml()}
        </div>
        <div className="qualityAssuredRoot">
          <div className="qualityAssuredImgContainer">
            <img className="qualityAssuredImg" src={assured} alt="" />
          </div>
          <h3 className="qualityAssuredHeading">100% Quality Assured</h3>
          <p className="qualityAssuredDesc">
            If you don’t love our service, we will make it right.
          </p>
        </div>
      </div>
    </div>
  );
}
