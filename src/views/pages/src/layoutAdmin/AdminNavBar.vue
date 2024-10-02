<template>
    <nav class="navbar navbar-expand-md navbar-light bg-color3 shadow-sm">
    <div class="container">
        <button class="navbar-toggler media-absolute top-end--75-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content">
                    <RouterLink to="/admin/products" class="nav-link nav-color box-size">
                        <span class="megamenu-item-inner child-box"> <span>Products</span> </span>
                    </RouterLink>

                    <div class="arrow"></div>
                    <div class="megamenu-dropdown" style="border-color: #FFFFFF">
                        <div class="block-main">
                            <div class="block-main-content">
                                <div class="block-main-content-link">
                                    <div class="grid-child col-md-12">
                                        <ul class="megamenu-sub-items">
                                            <li class="megamenu-sub-item">
                                                <RouterLink to="/admin/products" class="megamenu-item-link" style="--bgHover: rgba(255, 255, 255, 0);">
                                                    <span class="megamenu-item-inner"> <span>Products</span></span>
                                                </RouterLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="grid-child col-md-12">
                                        <ul class="megamenu-sub-items">
                                            <li class="megamenu-sub-item  ">
                                                <RouterLink to="/admin/laptops"  class="megamenu-item-link" style="--bgHover: rgba(255, 255, 255, 0);">
                                                    <span class="megamenu-item-inner">
                                                        <span>Laptops</span>
                                                    </span>
                                                </RouterLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content">
                    <RouterLink to="" class="nav-link nav-color box-size" >
                        <span class="megamenu-item-inner child-box"> <span>Product Type</span> </span>
                    </RouterLink>
                </li>
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content">
                    <RouterLink to="home" class="nav-link nav-color box-size" >
                        <span class="megamenu-item-inner child-box"> <span>Discount</span> </span>
                    </RouterLink>
                </li>
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content ">
                    <RouterLink to="home" class="nav-link nav-color box-size" >
                        <span class="megamenu-item-inner child-box"> <span>Panel</span> </span>
                    </RouterLink>
                </li>
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content ">
                    <RouterLink class="nav-link nav-color box-size" to="" >
                        <span class="megamenu-item-inner child-box"> <span>Logo</span> </span>
                    </RouterLink>
                </li>
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content ">
                    <RouterLink class="nav-link nav-color box-size" to="" >
                        <span class="megamenu-item-inner child-box"> <span>User</span> </span>
                    </RouterLink>
                </li>
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content ">
                    <RouterLink class="nav-link nav-color box-size" to="" >
                        <span class="megamenu-item-inner child-box"> <span>Report</span> </span>
                    </RouterLink>
                </li>
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content ">
                    <RouterLink class="nav-link nav-color box-size" to="" >
                        <span class="megamenu-item-inner child-box"> <span>Marketing</span> </span>
                    </RouterLink>
                </li>
                <li class="nav-item megamenu-item megamenu-item-not-dropdown has-content ">
                    <RouterLink class="nav-link nav-color box-size" to="" >
                        <span class="megamenu-item-inner child-box"> <span>System</span> </span>
                    </RouterLink>
                </li>
            </ul>

        </div>
    </div>
</nav>
</template>