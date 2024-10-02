<template>
    <div class="carousel" role="group" aria-roledescription="carousel" data-carousel aria-label="anh ho" style="cursor: pointer;">
        <div class="carousel-buttons">
            <button class="carousel-button carousel-button_previous"
                aria-label="Previous slide"
                data-carousel-button-previous
                >
                <font-awesome-icon :icon="['fas', 'fa-chevron-circle-left']" /> 
            </button>
            <button class="carousel-button carousel-button_next"
                aria-label="Next slide"
                data-carousel-button-next
                >
                <font-awesome-icon :icon="['fas', 'fa-chevron-circle-right']" /> 
            </button>
        </div>
        <div class="slides"
            aria-live="polite"
            data-carousel-slides-container >

            <div class="slide"
                role="group"
                aria-roledescription="slide"
                aria-hidden="true"
                v-for="(slice_img, index) in libraryImagesFunc" :key="slice_img" >
                <div class="content">
                    <div class="img-div h-900">
                        <img :src="`${path_img1}/${slice_img}`" alt="Anh Ho" />
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!--libraryImages-->
    <div  class="d-flex flex-column fit-box left-absolute" id="fashion-libray-img-left" >
        <span  class="fashion-libray-img prd-img-page mb-2" v-for="(libryImg, index ) in libraryImagesFunc" :key="libryImg" style="cursor: pointer;"
        :slide_index="index" >            
            <img 
            v-bind:class="['img-thumbnail product-libary-img',{'selected':index==0}]" 
            :src="`${path_img1}/${libryImg}`" alt="Thiet ke web Anh Ho">
        </span>
    </div>

</template>
<script lang="ts">
    import { api_img_path } from '@/services/pathFile'
    const config = api_img_path
    export default{
        props:{
            proplibraryImages:String,
        },
        data(){
            return{
                images:<String[]>([]),
                libraryImages:<String[]>([]),
                path_img1:config,
            }            
        },
        methods:{
                //--carousel--
                modulo(number:number, mod:number):number {
                let result = number % mod;
                if (result < 0) {
                    result += mod;
                }
                return result;
            },

                setUpCarousel(carousel:any) {
                let $this = this
                function handleNext() {
                    let slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                   let numSlides = slidesContainer.children.length;
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',true) 
                    currentSlide = $this.modulo(currentSlide + 1, numSlides);
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',false)

                    selectedLibaryImgByCurrentSlice(currentSlide)
                    changeSlide(currentSlide);
                }

                function handlePrevious() {
                    let slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                   let numSlides = slidesContainer.children.length;
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',true)
                    currentSlide = $this.modulo(currentSlide - 1, numSlides);
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',false)

                    selectedLibaryImgByCurrentSlice(currentSlide)
                    changeSlide(currentSlide);
                }

                function changeSlide(slideNumber:number) {
                    let slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                   let numSlides = slidesContainer.children.length;
                    // change current slide
                    carousel.style.setProperty('--current-slide', slideNumber);

                    // handle screen reader accessibility
                    const previousSlideNumber = $this.modulo(slideNumber - 1, numSlides);
                    const nextSlideNumber = $this.modulo(slideNumber + 1, numSlides);
                    const previousSlide = slidesContainer.children[previousSlideNumber];
                    const currentSlideElement = slidesContainer.children[slideNumber];
                    const nextSlide = slidesContainer.children[nextSlideNumber];

                    previousSlide.setAttribute('aria-hidden', true);
                    nextSlide.setAttribute('aria-hidden', true);
                    currentSlideElement.setAttribute('aria-hidden', false);
                }

                function slectedSlice(currentSlide:number){
                    let slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                    let numSlides = slidesContainer.children.length;
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',true)
                    slidesContainer.children[currentSlide].setAttribute('aria-hidden',false)
                    changeSlide(currentSlide);
                }

                function selectedLibaryImgByCurrentSlice(currentSlide:number){
                    $('#fashion-libray-img-left .fashion-libray-img').each(function(index,item){
                        if(index==currentSlide){
                            $('.product-libary-img.selected').removeClass('selected')
                            $(this).find('.product-libary-img').addClass('selected')
                        }
                        //console.log(index)
                        //console.log(item)
                    })
                
                }

                // get elements
                const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
                const buttonNext = carousel.querySelector('[data-carousel-button-next]');
                //const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
                

                let currentSlide = 0;
                //const numSlides = slidesContainer.children.length;

                // set up events
                buttonPrevious.addEventListener('click', handlePrevious);
                buttonNext.addEventListener('click', handleNext);
                //review library image
                $('.normal-id').on('click','.fashion-libray-img',function(){
                $('.product-libary-img.selected').removeClass('selected')
                $(this).find('.product-libary-img').addClass('selected')
                   // console.log($(this).attr('slide_index'))
                   let sliceIndex = parseInt($(this).attr('slide_index')!)
                   slectedSlice(sliceIndex)

                });
            }

        },
        computed:{
            libraryImagesFunc(){
            let imagesTempLibrary = this.proplibraryImages
           
            if(imagesTempLibrary !='' && imagesTempLibrary?.includes(",")){
                return imagesTempLibrary.split(",")  
            }else{
                return  this.libraryImages.push(imagesTempLibrary!)
            }
            }
        },
        created(){
            // console.log(this.proplibraryImages)
            // let imagesTempLibrary = this.proplibraryImages
           
            // if(imagesTempLibrary !='' && imagesTempLibrary?.includes(",")){
            //     this.libraryImages = imagesTempLibrary.split(",")  
            // }else{
            //     this.libraryImages.push(imagesTempLibrary!)
            // }

        },
        mounted() {            
            let $this = this
                const carousels = document.querySelectorAll('[data-carousel]');
            carousels.forEach(function(item){
                $this.setUpCarousel(item)
               
            });

            $('.specific-product .product-images').off('click').on('click',function(){
                $('.specific-product .prd-size.selected').removeClass('selected')
                $('.specific-product .prd-size:first-child').addClass('selected')
            })
        }
    }
</script>

<style scoped>
.carousel {
    --current-slide: 0;  /*use css to avoid javasctipt broken*/
    /* we set position relative so absolute position works properly for the buttons */
    position: relative;
    overflow: hidden;

}

.carousel-buttons{
    display: none;
}

.carousel:hover .carousel-buttons{
    display: block;
}

.carousel-button {
    /* vertically centering the buttons */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;

    /* basic styling */
    padding: 0;
    margin: 0.5rem;
    border-radius: 50%;
    background-color: transparent;
    border: none;

    font-size: 1.5rem;
    cursor: pointer;

    transition: color 0.1s;
}

.carousel-button:hover {
    color: rgba(0, 0, 0, 0.5);
}

.carousel-button_next {
    /* The "next slide button" will be at the right */
    right: 0;
}

.carousel-button_previous{
  left: 0;
}

.slides {
    display: flex;
   /* transition: transform 0.5s;  don't want use transition, USE ABSOLUTE*/
    /*transform: translateX(calc(-100%);*/
    /*don't want use transition, USE ABSOLUTE and left -100%*/
   /* position: absolute;
    left:-100%*/
    /*use --current-slide */
    width: 100%;
    transition: transform 0.5s;
    transform: translateX(calc(-100% * var(--current-slide)));
}

.slide {
    flex: 0 0 100%;
}

.content {
    width: 100%;
    margin: auto;
    /*padding: 5rem;*/

    background-size: cover;
    background-position: center;

    font-size: 1.5rem;
    color: white;
    text-align: left;
}


/*.text-container {
    max-width: 50ch;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
}*/

.left-absolute{
        position: absolute;
        left: -80px;
        top:0
    }

@media screen and (min-width: 768px) {
    .carousel-button {
        font-size: 2rem;
        margin: 1rem;
    }
}
</style>
