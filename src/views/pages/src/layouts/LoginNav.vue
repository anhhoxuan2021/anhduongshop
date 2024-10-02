<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm" style="height: 80px;">
            <div class="container">
                <a class="navbar-brand" href="http://shop:8000">
                    <img class="w-167" src="../assets/images/logo_3.png" >
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto">
                        <!-- Authentication Links -->
                        <li class="nav-item">
                            <RouterLink to="/login" class="nav-link">Login</RouterLink>
                        </li>
                    
                        <li class="nav-item">
                            <RouterLink to="/register" class="nav-link">Register</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>