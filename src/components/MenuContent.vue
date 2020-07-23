<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start main-menu">
                <a class="navbar-item">
                    <img src="../assets/icon-menu.png" alt="icon menu"/>
                    <div class="title-option vertical-line">
                        PUFI PUFF
                    </div>
                </a>
                <a class="navbar-item">
                    <img src="../assets/icon-menu.png" alt="icon menu"/>
                    <div class="title-option vertical-line">
                        PUFI RAIN
                    </div>
                </a>
                <a class="navbar-item">
                    <img src="../assets/icon-menu.png" alt="icon menu"/>
                    <div class="title-option vertical-line">
                        PUFI CART
                    </div>
                </a>
                <a class="navbar-item">
                    <img src="../assets/icon-menu.png" alt="icon menu"/>
                    <div class="title-option">
                        PUFI NAP
                    </div>
                </a>
            </div>

            <div class="navbar-end btn-users">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-text vertical-line">
                            MI CUENTA
                        </a>
                        <a class="button is-text">
                            MI COMPRA
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .navbar {
        position: absolute;
        width: 100%;
        padding-top: 30px;
        background: linear-gradient(rgba(37, 36, 64, 0.8), rgba(255, 255, 255, 0));
        align-items: flex-start;

        .navbar-brand {
            .navbar-item {
                padding-top: 0;
                align-items: flex-start;
            }
        }

        .vertical-line {
            margin-right: 0 !important;
            &:after {
                content: '';
                width: 0;
                height: 100%;
                position: absolute;
                border: 1px solid rgba(135, 135, 135, 0.4);
                top: 0;
                left: 100%;

            }
        }

        .navbar-menu {
            .main-menu {
                margin: auto;

                .navbar-item {
                    display: flex;
                    flex-direction: column;
                    padding: 0 15px;
                    color: white;

                    &:hover {
                        background-color: transparent;
                        text-shadow: 2px 2px 5px #888;
                    }

                    .title-option {
                        margin-top: 4px;
                        font-size: 0.8rem;
                        font-weight: bold;
                    }
                }
            }

            .btn-users {
                margin: 0;
                align-items: flex-start;

                .navbar-item {
                    padding-top: 0;

                    .buttons {
                        .button {
                            font-size: 0.6rem;
                            text-decoration: none;
                            color: white;
                            padding-top: 0;
                            &:hover {
                                background-color: transparent;
                                text-shadow: 2px 2px 5px #888;
                            }
                        }
                    }
                }
            }

        }

    }

</style>