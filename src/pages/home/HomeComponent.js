import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          ‍<title>Abdullah Ch </title>‍
          <meta
            name="description"
            content="Abdullah Ch (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Abdullah is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta name="twitter:site" content="@MAbdullahCh10" />{" "}
          <meta name="twitter:creator" content="@MAbdullahCh10" />{" "}
          <meta name="twitter:title" content="Resume " />{" "}
          <meta property="twitter:url" content="https://abdullahch.dev/home" />
          <meta
            name="twitter:description"
            content="Abdullah Ch (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Abdullah is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta property="og:title" content="Abdullah Ch " />{" "}
          <meta
            property="og:description"
            content="Abdullah Ch (therealmvp) is a Full Stack Developer, Public Speaker, and a student mentor. Abdullah is also an AWS Educate Cloud Ambassador, Microsoft Learn Student Ambassador and former Google Developers Student Club Lead at NUST"
          />
          <meta property="og:url" content="https://abdullahch.dev/" />
          <meta property="og:site_name" content="Abdullah Ch " />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
        </Helmet>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
