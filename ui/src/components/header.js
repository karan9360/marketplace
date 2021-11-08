import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Store from "../stores/store";
const store = Store.store;
const emitter = Store.emitter;
const dispatcher = Store.dispatcher;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountFmt: null,
    };
  }

  getCompressed(addr) {
    const len = addr.length;
    return addr.substring(0, 6) + "..." + addr.substring(len - 5, len);
  }

  //   storeUpdated() {
  //     let accountAddress = store.getStore().account;
  //     console.log(accountAddress);
  //     if (accountAddress) {
  //       this.setState({ accountFmt: this.getCompressed(accountAddress) });
  //     }
  //   }

  async componentWillMount() {
    // console.log("Header ", this.props);
    const storeUpdated = async () => {
      let accountAddress = store.getStore().account;
      if (accountAddress) {
        this.setState({ accountFmt: this.getCompressed(accountAddress) });
        let contract = store.getStore().dapp_contract;
        if (contract) {
          //   var balance = await contract.methods.balanceOf(accountAddress).call();
          //   console.log("bal ", balance);
        }
      }
    };
    emitter.on("StoreUpdated", storeUpdated);
  }

  render() {
    return (
      <nav
        className={"flex items-center justify-between flex-wrap p-2 myHeader"}
      >
        <div class="flex flex-row items-center mr-6">
          <svg
            width="190"
            height="52"
            viewBox="0 0 190 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.7956 25.252C56.4636 25.252 55.2636 24.97 54.1956 24.406C53.1396 23.842 52.3056 23.062 51.6936 22.066C51.0936 21.07 50.7936 19.948 50.7936 18.7C50.7936 17.452 51.0936 16.33 51.6936 15.334C52.3056 14.338 53.1396 13.558 54.1956 12.994C55.2636 12.43 56.4636 12.148 57.7956 12.148C59.1276 12.148 60.3216 12.43 61.3776 12.994C62.4456 13.558 63.2796 14.338 63.8796 15.334C64.4916 16.33 64.7976 17.452 64.7976 18.7C64.7976 19.948 64.4916 21.07 63.8796 22.066C63.2796 23.062 62.4456 23.842 61.3776 24.406C60.3216 24.97 59.1276 25.252 57.7956 25.252ZM57.7956 22.3C58.4316 22.3 59.0076 22.15 59.5236 21.85C60.0396 21.55 60.4476 21.13 60.7476 20.59C61.0476 20.038 61.1976 19.408 61.1976 18.7C61.1976 17.992 61.0476 17.368 60.7476 16.828C60.4476 16.276 60.0396 15.85 59.5236 15.55C59.0076 15.25 58.4316 15.1 57.7956 15.1C57.1596 15.1 56.5836 15.25 56.0676 15.55C55.5516 15.85 55.1436 16.276 54.8436 16.828C54.5436 17.368 54.3936 17.992 54.3936 18.7C54.3936 19.408 54.5436 20.038 54.8436 20.59C55.1436 21.13 55.5516 21.55 56.0676 21.85C56.5836 22.15 57.1596 22.3 57.7956 22.3ZM78.6523 12.4V25H75.7183L70.1563 18.286V25H66.6643V12.4H69.5983L75.1603 19.114V12.4H78.6523ZM91.2823 22.246V25H81.1663V12.4H91.0483V15.154H84.6943V17.278H90.2923V19.942H84.6943V22.246H91.2823ZM37.7545 27.4L33.6685 40H29.8525L27.4405 32.332L24.9205 40H21.1045L17.0185 27.4H20.6905L23.2285 35.446L25.8925 27.4H29.1685L31.7065 35.518L34.3525 27.4H37.7545ZM45.2097 40.252C43.8777 40.252 42.6777 39.97 41.6097 39.406C40.5537 38.842 39.7197 38.062 39.1077 37.066C38.5077 36.07 38.2077 34.948 38.2077 33.7C38.2077 32.452 38.5077 31.33 39.1077 30.334C39.7197 29.338 40.5537 28.558 41.6097 27.994C42.6777 27.43 43.8777 27.148 45.2097 27.148C46.5417 27.148 47.7357 27.43 48.7917 27.994C49.8597 28.558 50.6937 29.338 51.2937 30.334C51.9057 31.33 52.2117 32.452 52.2117 33.7C52.2117 34.948 51.9057 36.07 51.2937 37.066C50.6937 38.062 49.8597 38.842 48.7917 39.406C47.7357 39.97 46.5417 40.252 45.2097 40.252ZM45.2097 37.3C45.8457 37.3 46.4217 37.15 46.9377 36.85C47.4537 36.55 47.8617 36.13 48.1617 35.59C48.4617 35.038 48.6117 34.408 48.6117 33.7C48.6117 32.992 48.4617 32.368 48.1617 31.828C47.8617 31.276 47.4537 30.85 46.9377 30.55C46.4217 30.25 45.8457 30.1 45.2097 30.1C44.5737 30.1 43.9977 30.25 43.4817 30.55C42.9657 30.85 42.5577 31.276 42.2577 31.828C41.9577 32.368 41.8077 32.992 41.8077 33.7C41.8077 34.408 41.9577 35.038 42.2577 35.59C42.5577 36.13 42.9657 36.55 43.4817 36.85C43.9977 37.15 44.5737 37.3 45.2097 37.3ZM59.5864 36.652H57.6424V40H54.0784V27.4H59.8384C60.9784 27.4 61.9684 27.592 62.8084 27.976C63.6484 28.348 64.2964 28.888 64.7524 29.596C65.2084 30.292 65.4364 31.114 65.4364 32.062C65.4364 32.974 65.2204 33.772 64.7884 34.456C64.3684 35.128 63.7624 35.656 62.9704 36.04L65.6884 40H61.8724L59.5864 36.652ZM61.8364 32.062C61.8364 31.474 61.6504 31.018 61.2784 30.694C60.9064 30.37 60.3544 30.208 59.6224 30.208H57.6424V33.898H59.6224C60.3544 33.898 60.9064 33.742 61.2784 33.43C61.6504 33.106 61.8364 32.65 61.8364 32.062ZM67.4026 27.4H70.9666V37.174H76.9786V40H67.4026V27.4ZM78.3889 27.4H84.3469C85.7269 27.4 86.9509 27.658 88.0189 28.174C89.0869 28.69 89.9149 29.422 90.5029 30.37C91.0909 31.318 91.3849 32.428 91.3849 33.7C91.3849 34.972 91.0909 36.082 90.5029 37.03C89.9149 37.978 89.0869 38.71 88.0189 39.226C86.9509 39.742 85.7269 40 84.3469 40H78.3889V27.4ZM84.2029 37.156C85.2829 37.156 86.1469 36.85 86.7949 36.238C87.4549 35.626 87.7849 34.78 87.7849 33.7C87.7849 32.62 87.4549 31.774 86.7949 31.162C86.1469 30.55 85.2829 30.244 84.2029 30.244H81.9529V37.156H84.2029Z"
              fill="white"
            />
            <path
              d="M128.648 10.9V41H121.639L108.352 24.961V41H100.01V10.9H107.019L120.306 26.939V10.9H128.648ZM143.168 17.479V24.101H156.455V30.68H143.168V41H134.654V10.9H158.261V17.479H143.168ZM168.859 17.651H159.614V10.9H186.575V17.651H177.373V41H168.859V17.651Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-row">
          {this.state.accountFmt && (
            <span className="p-2 font-bold text-white">
              {this.state.accountFmt}
            </span>
          )}
          {!this.state.accountFmt && (
            <span className="p-2 font-bold text-white">
              No account detected!
            </span>
          )}
          <Link to={`/`} className="p-2 px-4 text-white rounded bg-indigo-600">
            Home
          </Link>
          <Link
            to={`/about`}
            class="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            About
          </Link>
        </div>
      </nav>
    );
  }
}

export default Header;