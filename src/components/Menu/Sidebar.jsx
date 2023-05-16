import React from 'react';
import './sidebar.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import IndexComponent from "./Index/IndexComponent";
import StatsComponent from "./Index/StatsComponent";
import SignIn from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";

function App() {
    //States

    function handleLogout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.reload(false);
    }


    // Comportements


    //Rendu
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact path="/"
                        element={
                            <PrivateRoute>
                                <IndexComponent/>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        exact path="/stats"
                        element={
                            <PrivateRoute>
                                <StatsComponent/>
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<SignIn/>}/>
                    <Route path="/register" element={<SignUpComponent/>}/>
                </Routes>
                <nav>
                    <div className="logo">
                        {/*<img alt="Logo"*/}
                        {/*     src="https://cryptologos.cc/logos/ethereum-eth-logo.png"/>*/}
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to={"/"}>
                                    <svg version="1.1"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="17.6818" height="17.7074">
                                        <g>
                                            <rect height="17.7074"
                                                  opacity="0"
                                                  width="17.6818" x="0"
                                                  y="0"/>
                                            <path
                                                d="M1.6624 8.03057L6.33955 8.03057C7.4375 8.03057 8.00498 7.49033 8.00498 6.33447L8.00498 1.71494C8.00498 0.559083 7.4375 0.0255859 6.33955 0.0255859L1.6624 0.0255859C0.564454 0.0255859 0 0.559083 0 1.71494L0 6.33447C0 7.49033 0.564454 8.03057 1.6624 8.03057ZM1.68496 6.95029C1.26446 6.95029 1.07725 6.75937 1.07725 6.32539L1.07725 1.72403C1.07725 1.29678 1.26446 1.10586 1.68496 1.10586L6.31328 1.10586C6.73379 1.10586 6.92471 1.29678 6.92471 1.72403L6.92471 6.32539C6.92471 6.75937 6.73379 6.95029 6.31328 6.95029ZM11.346 8.03057L16.0164 8.03057C17.1144 8.03057 17.6818 7.49033 17.6818 6.33447L17.6818 1.71494C17.6818 0.559083 17.1144 0.0255859 16.0164 0.0255859L11.346 0.0255859C10.2413 0.0255859 9.67686 0.559083 9.67686 1.71494L9.67686 6.33447C9.67686 7.49033 10.2413 8.03057 11.346 8.03057ZM11.3686 6.95029C10.9413 6.95029 10.7571 6.75937 10.7571 6.32539L10.7571 1.72403C10.7571 1.29678 10.9413 1.10586 11.3686 1.10586L15.9969 1.10586C16.4174 1.10586 16.6016 1.29678 16.6016 1.72403L16.6016 6.32539C16.6016 6.75937 16.4174 6.95029 15.9969 6.95029ZM1.6624 17.7074L6.33955 17.7074C7.4375 17.7074 8.00498 17.1739 8.00498 16.0181L8.00498 11.3918C8.00498 10.2427 7.4375 9.70244 6.33955 9.70244L1.6624 9.70244C0.564454 9.70244 0 10.2427 0 11.3918L0 16.0181C0 17.1739 0.564454 17.7074 1.6624 17.7074ZM1.68496 16.6271C1.26446 16.6271 1.07725 16.4362 1.07725 16.009L1.07725 11.4076C1.07725 10.9736 1.26446 10.7827 1.68496 10.7827L6.31328 10.7827C6.73379 10.7827 6.92471 10.9736 6.92471 11.4076L6.92471 16.009C6.92471 16.4362 6.73379 16.6271 6.31328 16.6271ZM11.346 17.7074L16.0164 17.7074C17.1144 17.7074 17.6818 17.1739 17.6818 16.0181L17.6818 11.3918C17.6818 10.2427 17.1144 9.70244 16.0164 9.70244L11.346 9.70244C10.2413 9.70244 9.67686 10.2427 9.67686 11.3918L9.67686 16.0181C9.67686 17.1739 10.2413 17.7074 11.346 17.7074ZM11.3686 16.6271C10.9413 16.6271 10.7571 16.4362 10.7571 16.009L10.7571 11.4076C10.7571 10.9736 10.9413 10.7827 11.3686 10.7827L15.9969 10.7827C16.4174 10.7827 16.6016 10.9736 16.6016 11.4076L16.6016 16.009C16.6016 16.4362 16.4174 16.6271 15.9969 16.6271Z"
                                                fill="#ffffff"
                                                fill-opacity="0.85"/>
                                        </g>
                                    </svg>


                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stats">
                                    <svg version="1.1"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="20.4286" height="18.1072">
                                        <g>
                                            <rect height="18.1072"
                                                  opacity="0"
                                                  width="20.4286" x="0"
                                                  y="0"/>
                                            <path
                                                d="M0 17.5137C0 17.8562 0.27959 18.1072 0.599611 18.1072L19.8223 18.1072C20.149 18.1072 20.4286 17.8562 20.4286 17.5137C20.4286 17.1748 20.149 16.9171 19.8223 16.9171L0.599611 16.9171C0.27959 16.9171 0 17.1748 0 17.5137ZM0.593556 14.8268C0.593556 15.3073 0.903713 15.601 1.41358 15.601L3.74229 15.601C4.23262 15.601 4.55859 15.3073 4.55859 14.8268L4.55859 6.19356C4.55859 5.71973 4.23262 5.4126 3.74229 5.4126L1.41358 5.4126C0.903713 5.4126 0.593556 5.71973 0.593556 6.19356ZM5.67695 14.8268C5.67695 15.3073 5.99688 15.601 6.49697 15.601L8.82568 15.601C9.32578 15.601 9.64873 15.3073 9.64873 14.8268L9.64873 1.81973C9.64873 1.34219 9.32578 1.04854 8.82568 1.04854L6.49697 1.04854C5.99688 1.04854 5.67695 1.34219 5.67695 1.81973ZM10.7701 14.8268C10.7701 15.3073 11.0863 15.601 11.5804 15.601L13.9219 15.601C14.4152 15.601 14.7352 15.3073 14.7352 14.8268L14.7352 4.00479C14.7352 3.52051 14.4152 3.22686 13.9219 3.22686L11.5804 3.22686C11.0863 3.22686 10.7701 3.52051 10.7701 4.00479ZM15.8596 14.8268C15.8596 15.3073 16.1697 15.601 16.6796 15.601L19.0083 15.601C19.5054 15.601 19.8313 15.3073 19.8313 14.8268L19.8313 8.30791C19.8313 7.83037 19.5054 7.52998 19.0083 7.52998L16.6796 7.52998C16.1697 7.52998 15.8596 7.83037 15.8596 8.30791Z"
                                                fill="#ffffff"
                                                fill-opacity="0.85"/>
                                        </g>
                                    </svg>

                                </NavLink>
                            </li>
                            <li>
                                <a href="#">
                                    <svg version="1.1"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="16.8305" height="18.166">
                                        <g>
                                            <rect height="18.166"
                                                  opacity="0"
                                                  width="16.8305" x="0"
                                                  y="0"/>
                                            <path
                                                d="M2.10801 18.166L14.7194 18.166C16.1498 18.166 16.8305 17.7141 16.8305 16.7216C16.8305 14.1781 13.6223 10.5466 8.41709 10.5466C3.20518 10.5466 0 14.1781 0 16.7216C0 17.7141 0.677637 18.166 2.10801 18.166ZM1.80645 17.0214C1.36485 17.0214 1.20899 16.9137 1.20899 16.5996C1.20899 14.7498 3.82266 11.6912 8.41709 11.6912C13.0048 11.6912 15.6215 14.7498 15.6215 16.5996C15.6215 16.9137 15.4724 17.0214 15.0308 17.0214ZM8.42617 9.22061C10.705 9.22061 12.5299 7.2169 12.5299 4.72461C12.5299 2.28516 10.6905 0.34043 8.42617 0.34043C6.16924 0.34043 4.31641 2.31514 4.32246 4.73506C4.33828 7.22363 6.14736 9.22061 8.42617 9.22061ZM8.42617 8.07598C6.83692 8.07598 5.53145 6.61494 5.53145 4.73506C5.52237 2.92383 6.83555 1.48506 8.42617 1.48506C10.0175 1.48506 11.3209 2.90733 11.3209 4.72461C11.3209 6.60146 10.0222 8.07598 8.42617 8.07598Z"
                                                fill="#ffffff"
                                                fill-opacity="0.85"/>
                                        </g>
                                    </svg>

                                </a>
                            </li>
                            <li>
                                <button onClick={handleLogout}
                                        style={{
                                            cursor: "pointer",
                                            background: "none"
                                        }}>
                                    <svg version="1.1"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="22.1726" height="20.8188">
                                        <g>
                                            <rect height="20.8188"
                                                  opacity="0"
                                                  width="22.1726" x="0"
                                                  y="0"/>
                                            <path
                                                d="M2.85479 20.8188L13.2925 20.8188C15.1868 20.8188 16.1473 19.8516 16.1473 17.9437L16.1473 13.243L14.9383 13.243L14.9383 17.9175C14.9383 19.0182 14.3602 19.6098 13.2325 19.6098L2.91475 19.6098C1.78711 19.6098 1.20899 19.0182 1.20899 17.9175L1.20899 2.91338C1.20899 1.8127 1.78711 1.21436 2.91475 1.21436L13.2325 1.21436C14.3602 1.21436 14.9383 1.8127 14.9383 2.91338L14.9383 7.5751L16.1473 7.5751L16.1473 2.88711C16.1473 0.986035 15.1868 0.00537097 13.2925 0.00537097L2.85479 0.00537097C0.96045 0.00537097 0 0.986035 0 2.88711L0 17.9437C0 19.8516 0.96045 20.8188 2.85479 20.8188ZM8.56094 10.9974L19.0746 10.9974L20.494 10.9539L19.5948 11.8299L17.8772 13.4861C17.7573 13.5926 17.6913 13.7522 17.6913 13.8954C17.6913 14.2057 17.917 14.4448 18.2235 14.4448C18.3802 14.4448 18.5001 14.3849 18.62 14.2717L21.9792 10.8377C22.1261 10.6908 22.1726 10.5544 22.1726 10.4045C22.1726 10.2479 22.1261 10.1151 21.9792 9.97129L18.62 6.53428C18.5001 6.42109 18.3802 6.35439 18.2235 6.35439C17.917 6.35439 17.6913 6.58076 17.6913 6.89404C17.6913 7.04395 17.7573 7.20362 17.8772 7.31309L19.5948 8.97305L20.4971 9.85205L19.0746 9.80185L8.56094 9.80185C8.2416 9.80185 7.97852 10.0814 7.97852 10.4045C7.97852 10.7275 8.2416 10.9974 8.56094 10.9974Z"
                                                fill="#ffffff"
                                                fill-opacity="0.85"/>
                                        </g>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="profile">
                        {/*<img alt="Photo de profil"*/}
                        {/*     src="http://via.placeholder.com/50x50"/>*/}
                    </div>
                </nav>

            </BrowserRouter>
        </div>
    );
}

export default App;