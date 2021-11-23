import './homeStyles.scss';

import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { Component } from 'react';

import assured from '../../images/home/assured.png';
import equipment from '../../images/home/equipment.png';
import home from '../../images/home/home.jpeg';
import person from '../../images/home/person.png';
import price from '../../images/home/price.png';

export default function Home() {
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
          <img className="homePageImg" src={home} alt="" />
        </div>
        <div className="homeScreenTitleRoot">
          <div className="homeScreenTitleContainer">
            <div className="titleRoot">
              <span className="title">THE CREW</span>
              <h1 className="typingEffect">Quality home services, on demand</h1>
              <p className="titleDesc">
                Experienced, hand-picked Professionals to serve you at your doorstep
              </p>
              <div className="homeScreenAutoSearchDiv">
                <p>Where do you need a service?</p>
                <Autocomplete
                  id="combo-box-demo"
                  options={[
                    { city: 'Bangalore' },
                    { city: 'Delhi' },
                    { city: 'Chandigarh' },
                    { city: 'Jaipur' },
                    { city: 'Visakhapatnam' },
                  ]}
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
                />
              </div>
            </div>
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
