import React from 'react';

const Header = () => {

    const header = document.getElementById("header");
    const nav_toggler = document.getElementById("nav-toggler");
    const nav = document.getElementById("nav");

    function  handleEvents() {
        nav_toggler.addEventListener('click', function () {
            this.classList.toggle('fa-xmark');
            nav.classList.toggle('collapse');
            header.classList.toggle('collapse-header');
        });
    }
    handleEvents();

    return (
        <div>
            <header id="header">
                <i class="fas fa-bars" id="nav-toggler"></i>
                <div>
                    <i class="fas fa-user-alt"></i>
                    <span>Jone doe</span>
                </div>
            </header>

            <nav id="nav">
                <div>
                    <div class="logo">
                        <i class="fab fa-gg-circle"></i>
                        <span>GG Crop</span>
                    </div>

                    <ul class="nav">
                        <li class="nav__item">
                            <a href="#" class="nav__item-link">
                                <i class="fas fa-home"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__item-link">
                                <i class="fa-brands fa-bitcoin"></i>
                                <span>Income</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__item-link">
                                <i class="fa-solid fa-user"></i>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li class="nav__item">
                            <a href="#" class="nav__item-link">
                                <i class="fa-solid fa-gear"></i>
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="" class="sign-out">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Sign Out</span>
                </a>
            </nav>
        </div>
    );
};

export default Header;