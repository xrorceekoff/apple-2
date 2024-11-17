
let mac = document.getElementById('mac');
let store = document.getElementById('store');
let ipad = document.getElementById('ipad');
let iphone = document.getElementById('iphone');
let watch = document.getElementById('watch');
let vision = document.getElementById('vision');
let airpods = document.getElementById('airpods');
let home = document.getElementById('home');
let enter = document.getElementById('enter');
let acc = document.getElementById('acc');
let support = document.getElementById('support');
let suppor = document.getElementById('img');
let suppo = document.getElementById('svg');
let supp = document.getElementById('svp');
let images = document.getElementById('images');
let web = document.getElementById('sayt');

card.style.height = '0px';
card.style.transition = ' 0.5s ease-in-out, opacity 0.5s ease-in-out';






store.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';


    setTimeout(() => {
        card.style.height = '400px';
        card.style.backgroundImage = "url('hover.png')"
        card.innerHTML = `
        <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px; margin-top: 70px;">
        <span class="gray" style="color: gray; font-size: 20px;">Shop</span> <br>
        <span style="margin-top: -15px;">Shop the Latest</span>
        <span>Mac</span>
        <span>iPad</span>
        <span>iPhone</span>
        <span>Apple Watch</span>
        <span>Apple Vision</span>
        <span>Accessories</span>
        </div><br>
        <div  style="font-size: 20px; display: flex; flex-direction: column;margin-top: 70px;">
        <span class="gray" style="color: gray; font-size: 20px; ">Quick I links</span> <br>
            <span>Find a Store</span>
            <span>Order Status</span>
            <span>Aplle Trade in</span>
            <span>Finacing</span>
        </div><br>
        <div style="font-size: 20px; display: flex; flex-direction: column;margin-top: 70px;">
            <span  style="color: gray; font-size: 20px; ">Shop Special Stores</span> <br>
            <span>Certfied Refurbished</span>
            <span>Education</span>
            <span>Business</span>
            <span>Veterans and Military</span>
            <span> Government</span>
        </div>`
        card.style.zIndex = '100'





    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';





});
mac.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '480px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore Mac</span> <br>
                        <span style="margin-top:-15px;">Explore All Mac</span>
                        <span>MacBook Air</span>
                        <span>MacBook Pro</span>
                        <span>iMac</span>
                        <span>Mac mini</span>
                        <span>Mac Studio</span>
                        <span>Displays</span> 
                        <span style="color: rgb(129, 126, 126); font-size: 20px; margin-top: 10px;">Compare Mac</span>
                        <span style="color: rgb(129, 126, 126); font-size: 20px;">Switch from PC to Mac</span>
                    </div> <br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;
                    margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Shop Mac</span> <br>
                        <span>Shop Mac</span>
                        <span>Help me Choose</span>
                        <span>Mac Accessories</span>
                        <span>Apple Trade In</span>
                        <span>Financing</span>
                    </div><br><br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">More from Mac</span> <br>
                        <span>Mac Support</span>
                        <span>AppleCare+ for Mac</span>
                        <span>macOS Sequoia</span>
                        <span>Apps by Apple</span>
                        <span>Continuity</span>
                        <span>iCloud+</span>
                        <span>Mac for Business</span>
                        <span>Education</span>
                    </div>
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
ipad.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '470px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore iPad</span> <br>
                        <span style="margin-top:-15px;">Explore All iPad</span>
                        <span>iPad Pro</span>
                        <span>iPad Air</span>
                        <span>iPad</span>
                        <span>iPad mini</span>
                        <span>Apple Pencil</span>
                        <span>Keyboards</span> 
                        <span style="color: rgb(129, 126, 126); font-size: 20px; margin-top: 10px;">Compare iPad</span>
                        <span style="color: rgb(129, 126, 126); font-size: 20px;">Why ipad</span>
                    </div> <br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;
                    margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Shop iPad</span> <br>
                        <span>Shop iPad</span>
                        <span>iPad Accessories</span>
                    
                        <span>Apple Trade In</span>
                        <span>Financing</span>
                    </div><br><br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">More from iPad</span> <br>
                        <span>iPad Support</span>
                        <span>AppleCare+ for iPad</span>
                        <span>iPadOS 18</span>
                        <span>Apple Intelligence</span>
                        <span>Apps by Apple</span>
                        <span>iCloud+</span>
                        <span>Education</span>
                    </div>
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
iphone.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '430px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore iPhone</span> <br>
                        <span style="margin-top:-15px;">Explore All iPhone</span>
                        <span> iPhone 16 pro</span>
                        <span> iPhone 16</span>
                        <span> iPhone15</span>
                        <span> iPhone14</span>
                        <span> iPhone SE</span>
                       
                        <span style="color: rgb(129, 126, 126); font-size: 20px; margin-top: 10px;">Compare iPhone</span>
                        <span style="color: rgb(129, 126, 126); font-size: 20px;">Switch from Android</span>
                    </div> <br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;
                    margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Shop iPhone</span> <br>
                        <span>Shop  iPhone</span>
                        <span> iPhone Accessories</span>
                         <span>Apple Trade In</span>
                        <span>Carrier Deals at Apple</span>
                        <span>Financing</span>
                    </div><br><br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">More from iPhone</span> <br>
                        <span>iPhone Support</span>
                        <span>AppleCare+ for iPhone</span>
                        <span>iOS 18</span>
                        <span>Apple Intelligence</span>
                        <span>Apps by Apple</span>
                        <span>iPhone Privacy</span>
                        <span>iCloud+</span>
                        <span>Wollet, pay, Card</span>
                        <span>Siri</span>
                    </div>
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
watch.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '440px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore Wath</span> <br>
                        <span style="margin-top:-15px;">Explore All Apple Watch</span>
                        <span> Apple Watch Series 10</span>
                        <span> Apple Watch Ultra 2</span>
                        <span> Apple Watch SE</span>
                        <span> Apple Watch Nike</span>
                        <span> Apple Watch Hermes</span>
                       
                        <span style="color: rgb(129, 126, 126); font-size: 20px; margin-top: 10px;">Compare  Watch</span>
                        <span style="color: rgb(129, 126, 126); font-size: 20px;">Why Apple Watch</span>
                    </div> <br>
                         <div style="display: flex; flex-direction: column; margin-top:70px;width:150px; font-size:20px">
                          <span style="color: gray; font-size: 20px;">Shop Watch</span> <br>
                        <span>Shop Apple Watch<span>
                        <span>Apple Watch Studio</span>
                        <span>Apple Watch Bands</span>
                        <span>Apple Watch Accessories</span>
                        <span>Apple Trade In</span>
                        <span>Financing</span>
                         </div> <br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">More from Watch</span> <br>
                        <span>Apple Watch Support</span>
                        <span>AppleCare+ </span>
                        <span>watchOS 11</span>
                        <span>Apple Watch For Your Kids</span>
                        <span>Apps by Apple</span>
                        <span>Apple Fitness+</span>

                    </div>
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
vision.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '300px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore Wath</span> <br>
                        <span style="margin-top:-15px;">Explore Vision</span>
                      
                       
                        <span style="color: rgb(129, 126, 126); font-size: 20px; margin-top: 10px;">Guided Tour</span>
                        <span style="color: rgb(129, 126, 126); font-size: 20px;">Tech Specs</span>
                    </div> <br>
                         <div style="display: flex; flex-direction: column; margin-top:70px;width:150px; font-size:20px">
                          <span style="color: gray; font-size: 20px;">Shop Vision</span> <br>
                        <span>Shop Apple Vision Pro<span>
                        <span>Apple Vision Pro Accessories</span>
                        <span>Book a Demo</span>
                     <span>Financing</span>
                         </div> <br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">More from Vision</span> <br>
                        <span>Apple Vision Pro Support</span>
                        <span>AppleCare+ </span>
                        <span>visionOS 2</span>
                     

                    </div>
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
airpods.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '330px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore AirPods</span> <br>
                        <span style="margin-top:-15px;">Explore All AirPods</span>
                        <span> All AirPods 4</span>
                        <span> All AirPods Pro 2</span>
                        <span> All AirPods Max</span>


                      
                       
                        <span style="color: rgb(129, 126, 126); font-size: 20px; margin-top: 10px;">Compare AirPods</span>
                    </div> <br>
                         <div style="display: flex; flex-direction: column; margin-top:70px;width:150px; font-size:20px">
                          <span style="color: gray; font-size: 20px;">Shop AirPods</span> <br>
                        <span>Shop AirPods Pro<span>
                        <span>AirPods Accessories</span>

                         </div> <br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">More from  AirPods</span> <br>
                        <span>  AirPods Support</span>
                        <span>AppleCare+ for Headphones </span>
                        <span>Hearing Health</span>
                        <span>Apple Music</span>
                     

                    </div>
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
home.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '350px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore TV & Home</span> <br>
                        <span style="margin-top:-15px;">Explore TV & Home</span>
                        <span> Apple TV 4K</span>
                        <span> HomePod</span>
                        <span> HomePod mino</span>


                      
                       
                        <span style="color: rgb(129, 126, 126); font-size: 20px; margin-top: 10px;">Compare AirPods</span>
                    </div> <br>
                         <div style="display: flex; flex-direction: column; margin-top:70px;width:170px; font-size:20px">
                          <span style="color: gray; font-size: 20px;">Shop TV & Home</span> <br>
                        <span>Shop Apple TV 4K<span>
                        <span>Shop HomePod<span>
                        <span>Shop HomePod mini<span>
                        <span>Shop Siri Remote<span> <br>
                        <span>TV & Home Accessories</span>

                         </div> <br>
                    <div style="font-size: 20px; display: flex; flex-direction: column;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">More from  TV & Home</span> <br>
                        <span> Aplle TV Support</span>
                        <span>HomePod Support</span>
                        <span>Apple TV app</span>
                        <span>Apple TV+</span>
                        <span>Home app</span>
                        <span>Apple Music</span>
                        <span>Siri</span>
                        <span>AirPlay</span>
                     

                    </div>
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
enter.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '530px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore Entertainment</span> <br>
                        <span style="margin-top:-15px;">Explore Entertainment</span>
                        <span> Apple One</span>
                        <span> Apple TV+</span>
                        <span>Apple Music</span>
                        <span>Apple Arcade </span>
                        <span>Apple Fitness+ </span>
                        <span>Apple News+ </span>
                        <span>Apple Podcasts </span>
                        <span>Apple Books </span>
                        <span>App Store </span>

                      
                       
                    </div> <br>
                         <div style="display: flex; flex-direction: column; margin-top:70px;width:190px; font-size:20px">
                          <span style="color: gray; font-size: 20px;">Support</span> <br>
                               <span>Apple TV+ Support </span>
                        <span>Apple Music Support </span>
                         </div> <br>
                 
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
acc.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '450px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 140px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Shop Accessories</span> <br>
                        <span style="margin-top:-15px;">Shop All Accessories</span>
                        <span> Mac</span>
                        <span> iPad</span>
                        <span>iPhone</span>
                        <span>Apple Watch </span>
                        <span>Apple Vision Pro</span>
                        <span>AirPods </span>
                        <span>Tv & Home</span>
                      

                      
                       
                    </div> <br>
                         <div style="display: flex; flex-direction: column; margin-top:70px;width:170px; font-size:20px">
                          <span style="color: gray; font-size: 20px;">Explore Accesories</span> <br>
                               <span>Made by Apple</span>
                        <span>Beats by Dr.Dre</span>
                        <span>AirTag</span>
                         </div> <br>
                 
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
support.addEventListener('mouseenter', () => {
    web.style.filter = 'blur(10px)';
    setTimeout(() => {
        card.style.height = '450px';


        card.innerHTML = `
                <div style="display: flex; gap: 60px;">
                    <div style="font-size: 30px; display: flex; flex-direction: column; margin-left: 145px;margin-top:70px;">
                        <span style="color: gray; font-size: 20px;">Explore Support</span> <br>
                        <span style="margin-top:-15px;">iPhone</span>
                        <span> Mac</span>
                        <span> iPad</span>
                        <span>Watch</span>
                        <span>Apple Vision Pro</span>
                   
                        <span>AirPods </span>
                        <span>Music</span>
                        <span>TV</span>
                      

                                              <span style="color: rgb(129, 126, 126); font-size: 20px; margin-top: 10px;">Explore Support</span>

                       
                    </div> <br>
                         <div style="display: flex; flex-direction: column; margin-top:70px;width:170px; font-size:20px">
                          <span style="color: gray; font-size: 20px;">Get Help</span> <br>
                               <span>Community</span>
                        <span>Chek Coverage</span>
                        <span>Repair</span>
                        <span>Contact Us</span>
                         </div> <br>
                         <div style="display: flex; flex-direction: column; margin-top:70px;width:170px; font-size:20px">
                          <span style="color: gray; font-size: 20px;">Helpful Topics</span> <br>
                               <span>Get AppleCare</span>
                        <span>Apple Account and Password</span>
                        <span>Biling & Subscribtions</span>
                        <span>Accessibility</span>
                         </div> <br>
                 
                </div>
            `;
        card.style.zIndex = '100';

        hammasi.style.opacity = '2'
        hammasi.style.transition = '1.5s '

    }, 10);
});

card.addEventListener('mouseleave', () => {
    web.style.filter = 'blur(0px)';
    card.style.height = '0px';

});
let dum = document.getElementById('dumaloq');
let duma = document.getElementById('dumalo');
let ong = document.getElementById('arrowong');
let chap = document.getElementById('arrowchap');


let abdo = 1;

function chapga() {
 
    images.style.backgroundImage = 'url("https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-2-202409_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=aWs5czA5aDFXU0FlMGFGRlpYRXk2UWFRQXQ2R0JQTk5udUZxTkR3ZVlpSlo4cUtOVXZ0VkpGRlBQT0VQc1Qrd0lYUWYrQkRLNitCbE9QRVRqNHErMkE3b3pFWnhZZ2g0M0pRR0pEdHVSRUduT0czaHArUlZLcEtOcW5GMm05cGpjZEdRU1pKUzFhYUR2UXFULzFGNGpB&traceId=1")';

    dum.style.backgroundColor = 'black';
    duma.style.backgroundColor = 'rgb(215, 215, 215)';
  
  
    chap.style.visibility = 'hidden' 
    ong.style.visibility = 'visible'  
}

function onga() {

    images.style.backgroundImage = 'url("https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-model-unselect-gallery-1-202409?wid=5120&hei=2880&fmt=webp&qlt=70&.v=aWs5czA5aDFXU0FlMGFGRlpYRXk2UWFRQXQ2R0JQTk5udUZxTkR3ZVlpTEJnOG9obkp6NERCS3lnVm1tcnlVUjBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0NuWUpOMGpEMHVTZEtYYVA3c1B3UzVmbW94YnYxc1YvNXZ4emJGL0IxNFp3&traceId=1")';

    dum.style.backgroundColor = 'rgb(215, 215, 215)';
    duma.style.backgroundColor = 'black';

    chap.style.visibility = 'visible'
    ong.style.visibility = 'hidden' 
}

let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let d = document.getElementById('d')
let e = document.getElementById('e')
let f = document.getElementById('f')
let q = document.getElementById('q')
let url = document.getElementById('image')


function chapgatwo() {

    if (url.style.backgroundImage === 'url("https://media.wired.com/photos/66df337dfb7d4953b6dc5f31/master/w_1920,c_limit/Screenshot%202024-09-09%20at%2010.42.09%E2%80%AFAM.png")') {
        url.style.backgroundImage = 'url("https://i.ytimg.com/vi/f13XTEQLBMQ/maxresdefault.jpg")';
        q.style.backgroundColor = 'rgb(215, 215, 215)'
        a.style.backgroundColor = 'black'
        b.style.backgroundColor = 'rgb(215, 215, 215)'
        c.style.backgroundColor = 'rgb(215, 215, 215)'
        d.style.backgroundColor = 'rgb(215, 215, 215)'
        e.style.backgroundColor = 'rgb(215, 215, 215)'
        f.style.backgroundColor = 'rgb(215, 215, 215)'

    } else if (url.style.backgroundImage === 'url("https://i.ytimg.com/vi/f13XTEQLBMQ/maxresdefault.jpg")') {
        url.style.backgroundImage = 'url("https://assets-prd.ignimgs.com/2024/09/09/iphone-16-1725907921710.jpg")';
        q.style.backgroundColor = 'rgb(215, 215, 215)'
        a.style.backgroundColor = 'rgb(215, 215, 215)'
        b.style.backgroundColor = 'black'
        c.style.backgroundColor = 'rgb(215, 215, 215)'
        d.style.backgroundColor = 'rgb(215, 215, 215)'
        e.style.backgroundColor = 'rgb(215, 215, 215)'
        f.style.backgroundColor = 'rgb(215, 215, 215)'

    } else if (url.style.backgroundImage === 'url("https://assets-prd.ignimgs.com/2024/09/09/iphone-16-1725907921710.jpg")') {
        url.style.backgroundImage = 'url("https://www.androidauthority.com/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-and-iPhone-16-availability.jpg")';
        q.style.backgroundColor = 'rgb(215, 215, 215)'
        a.style.backgroundColor = 'rgb(215, 215, 215)'
        b.style.backgroundColor = 'rgb(215, 215, 215)'
        c.style.backgroundColor = 'black'
        d.style.backgroundColor = 'rgb(215, 215, 215)'
        e.style.backgroundColor = 'rgb(215, 215, 215)'
        f.style.backgroundColor = 'rgb(215, 215, 215)'
    } else if (url.style.backgroundImage === 'url("https://www.androidauthority.com/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-and-iPhone-16-availability.jpg")') {

        url.style.backgroundImage = 'url("https://149426355.v2.pressablecdn.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg")';

        q.style.backgroundColor = 'rgb(215, 215, 215)'
        a.style.backgroundColor = 'rgb(215, 215, 215)'
        b.style.backgroundColor = 'rgb(215, 215, 215)'
        c.style.backgroundColor = 'rgb(215, 215, 215)'
        e.style.backgroundColor = 'black'
        f.style.backgroundColor = 'rgb(215, 215, 215)'
    } else if (url.style.backgroundImage === 'url("https://149426355.v2.pressablecdn.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg")'
    ) {
        url.style.backgroundImage = 'url("https://images.frandroid.com/wp-content/uploads/2024/09/apple-event-september-9-43-36-screenshot-1-scaled.jpg")';
        q.style.backgroundColor = 'rgb(215, 215, 215)'
        a.style.backgroundColor = 'rgb(215, 215, 215)'
        b.style.backgroundColor = 'rgb(215, 215, 215)'
        c.style.backgroundColor = 'rgb(215, 215, 215)'
        e.style.backgroundColor = 'rgb(215, 215, 215)'
        f.style.backgroundColor = 'black'
        
    }
}
let right = document.getElementById('right')
let left = document.getElementById('left')
function ongatwo() {
    if (url.style.backgroundImage === 'url("https://images.frandroid.com/wp-content/uploads/2024/09/apple-event-september-9-43-36-screenshot-1-scaled.jpg")') {
        url.style.backgroundImage = 'url("https://149426355.v2.pressablecdn.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg")';
        e.style.backgroundColor = 'black'
        f.style.backgroundColor = 'rgb(215,215,215)';
    } else if (url.style.backgroundImage === 'url("https://149426355.v2.pressablecdn.com/wp-content/uploads/2024/10/iphone16-pro-6c.jpg")') {
        url.style.backgroundImage = 'url("https://www.androidauthority.com/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-and-iPhone-16-availability.jpg")';
        e.style.backgroundColor = 'rgb(215,215,215)'
        c.style.backgroundColor = 'black'
        f.style.backgroundColor = 'rgb(215,215,215)'

        f.style.backgroundColor = 'rgb(215,215,215)';
        } else if (url.style.backgroundImage === 'url("https://www.androidauthority.com/wp-content/uploads/2024/09/Apple-iPhone-16-Pro-and-iPhone-16-availability.jpg")') {

        url.style.backgroundImage = 'url("https://assets-prd.ignimgs.com/2024/09/09/iphone-16-1725907921710.jpg")';

        e.style.backgroundColor = 'rgb(215,215,215)'
        c.style.backgroundColor = 'rgb(215,215,215)'
        f.style.backgroundColor = 'rgb(215,215,215)'
        b.style.backgroundColor = 'black'
    } else if (url.style.backgroundImage === 'url("https://assets-prd.ignimgs.com/2024/09/09/iphone-16-1725907921710.jpg")') {
        url.style.backgroundImage = 'url("https://i.ytimg.com/vi/f13XTEQLBMQ/maxresdefault.jpg")';
        e.style.backgroundColor = 'rgb(215,215,215)'
        c.style.backgroundColor = 'rgb(215,215,215)'
        f.style.backgroundColor = 'rgb(215,215,215)'
        b.style.backgroundColor = 'rgb(215,215,215)'
        a.style.backgroundColor = 'black'
    } else if (url.style.backgroundImage = 'url("https://i.ytimg.com/vi/f13XTEQLBMQ/maxresdefault.jpg")'
        ) {
            
            url.style.backgroundImage = 'url("https://media.wired.com/photos/66df337dfb7d4953b6dc5f31/master/w_1920,c_limit/Screenshot%202024-09-09%20at%2010.42.09%E2%80%AFAM.png")';
            e.style.backgroundColor = 'rgb(215,215,215)'
        c.style.backgroundColor = 'rgb(215,215,215)'
        f.style.backgroundColor = 'rgb(215,215,215)'
        b.style.backgroundColor = 'rgb(215,215,215)'
        a.style.backgroundColor = 'rgb(215,215,215)'
        q.style.backgroundColor = 'black'
        }
        }
    
        setTimeout(ongatwo, 1)
        let funk = document.getElementById('funk');
        let hammas = document.getElementById('hammas');
        let axror = 1;
         hammas.style.transition = 'max-height 1s ease-out';  
        
    
        hammas.style.maxHeight = '0px';
        
        function span() {
            axror = Number(axror) + 1;
        
            if (axror % 2 == 0) {
                
                hammas.style.maxHeight = '3127px';
         
        
                funk.style.cssText = `
                    transform: rotateX(180deg);
                    transition: 0.8s;
                `;
            } else {
             
                hammas.style.maxHeight = '0px';
        
                funk.style.cssText = `
                    transform: rotateX(0deg);
                    transition: 0.8s;
                `;
            }
        }
        
    
let axro = 1;
let fk = document.getElementById('funkdo')
let kf = document.getElementById('paskud')
kf.style.transition = 'height 0.5s'
kf.style.height = '50px'

function hop() {
    axro = Number(axro) + 1;
    if (axro % 2 == 0) {
        hammas.style.marginTop = '0px'
        kf.style.height = '200px';
        fk.style.cssText = `
      
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kf.style.height = '50px'
        fk.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}
let axr = 1;
let fkf = document.getElementById('jalla')
let kfk = document.getElementById('djalla')
kfk.style.transition = 'height 0.5s'
kfk.style.height = '50px'

function utadi() {
    axr = Number(axr) + 1;
    if (axr % 2 == 0) {
        kfk.style.height = '130px';
        fkf.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfk.style.height = '50px'
        fkf.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}
let ax = 1;
let fkfk = document.getElementById('jala')
let kfkf = document.getElementById('djala')
kfkf.style.transition = 'height 0.5s'
kfkf.style.height = '50px'

function utadimi() {
    ax = Number(ax) + 1;
    if (ax % 2 == 0) {
        kfkf.style.height = '200px';
        fkfk.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkf.style.height = '50px'
        fkfk.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}
let axax = 1;
let fkfkf = document.getElementById('jall')
let kfkfk = document.getElementById('djall')
kfkfk.style.transition = 'height 0.5s'
kfkfk.style.height = '50px'

function juma() {
    axax = Number(axax) + 1;
    if (axax % 2 == 0) {
        kfkfk.style.height = '200px';
        fkfkf.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkfk.style.height = '50px'
        fkfkf.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}




let axaxa = 1;
let fkfkfk = document.getElementById('jalll')
let kfkfkf = document.getElementById('djalll')
kfkfkf.style.transition = 'height 0.5s'
kfkfkf.style.height = '50px'

function payshanba() {
    axaxa = Number(axaxa) + 1;
    if (axaxa % 2 == 0) {
        kfkfkf.style.height = '250px';
        fkfkfk.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkfkf.style.height = '50px'
        fkfkfk.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}
let axaxax = 1;
let fkfkfkf = document.getElementById('jallll')
let kfkfkfk = document.getElementById('djallll')
kfkfkfk.style.transition = 'height 0.5s'
kfkfkfk.style.height = '50px'

function shanba() {
    axaxax = Number(axaxax) + 1;
    if (axaxax % 2 == 0) {
        kfkfkfk.style.height = '160px';
        fkfkfkf.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkfkfk.style.height = '50px'
        fkfkfkf.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}
let axaxaxa = 1;
let fkfkfkfk = document.getElementById('jalllll')
let kfkfkfkf = document.getElementById('djalllll')
kfkfkfkf.style.transition = 'height 0.5s'
kfkfkfkf.style.height = '50px'

function dushanba() {
    axaxaxa = Number(axaxaxa) + 1;
    if (axaxaxa % 2 == 0) {
        kfkfkfkf.style.height = '130px';
        fkfkfkfk.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkfkfkf.style.height = '50px'
        fkfkfkfk.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}
let axaxaxax = 1;
let fkfkfkfkf = document.getElementById('jallllll')
let kfkfkfkfk = document.getElementById('djallllll')
kfkfkfkfk.style.transition = 'height 0.5s'
kfkfkfkfk.style.height = '50px'

function seshanba() {
    axaxaxax = Number(axaxaxax) + 1;
    if (axaxaxax % 2 == 0) {
        kfkfkfkfk.style.height = '370px';
        fkfkfkfkf.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkfkfkfk.style.height = '50px'
        fkfkfkfkf.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}
let axaxaxaxa = 1;
let fkfkfkfkfk = document.getElementById('jalllllll')
let kfkfkfkfkf = document.getElementById('djalllllll')
kfkfkfkfkf.style.transition = 'height 0.5s'
kfkfkfkfkf.style.height = '50px'

function chorshanba() {
    axaxaxaxa = Number(axaxaxaxa) + 1;
    if (axaxaxaxa % 2 == 0) {
        kfkfkfkfkf.style.height = '150px';
        fkfkfkfkfk.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkfkfkfkf.style.height = '50px'
        fkfkfkfkfk.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}
let axaxaxaxax = 1;
let fkfkfkfkfkf = document.getElementById('jallllllll')
let kfkfkfkfkfk = document.getElementById('djallllllll')
kfkfkfkfkfk.style.transition = 'height 0.5s'
kfkfkfkfkfk.style.height = '50px'

function yakshanba() {
    axaxaxaxax = Number(axaxaxaxax) + 1;
    if (axaxaxaxax % 2 == 0) {
        kfkfkfkfkfk.style.height = '250px';
        fkfkfkfkfkf.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkfkfkfkfk.style.height = '50px'
        fkfkfkfkfkf.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }

}
let axaxaxaxaxa = 1;
let fkfkfkfkfkfk = document.getElementById('jalllllllll')
let kfkfkfkfkfkf = document.getElementById('djalllllllll')
kfkfkfkfkfkf.style.transition = 'height 0.5s'
kfkfkfkfkfkf.style.height = '50px'

function bmw() {
    axaxaxaxaxa = Number(axaxaxaxaxa) + 1;
    if (axaxaxaxaxa % 2 == 0) {
        kfkfkfkfkfkf.style.height = '310px';
        fkfkfkfkfkfk.style.cssText = `
                   transform: rotateX(180deg);
                  transition:0.8s;
                            `

    } else {
        kfkfkfkfkfkf.style.height = '50px'
        fkfkfkfkfkfk.style.cssText = `
                   transform: rotateX(0deg);
                  transition:0.8s;
                            `


    }
}



let axaxaxaxaxax = 1;
let fkfkfkfkfkfkf = document.getElementById('jallllllllll')
let kfkfkfkfkfkfk = document.getElementById('djallllllllll')
kfkfkfkfkfkfk.style.transition = 'height 0.5s'
kfkfkfkfkfkfk.style.height = '50px'

function mers() {
    axaxaxaxaxax = Number(axaxaxaxaxax) + 1;
    if (axaxaxaxaxax % 2 == 0) {
        kfkfkfkfkfkfk.style.height = '270px';
        fkfkfkfkfkfkf.style.cssText = `
      transform: rotateX(180deg);
      transition:0.8s;
                            `

    } else {
        kfkfkfkfkfkfk.style.height = '50px'
        fkfkfkfkfkfkf.style.cssText = `
      transform: rotateX(0deg);
                  transition:0.8s;
                  `


    }
}

let axaxaxaxaxaxa = 1;
let fkfkfkfkfkfkfk = document.getElementById('jalllllllllll')
let kfkfkfkfkfkfkf = document.getElementById('djalllllllllll')
kfkfkfkfkfkfkf.style.transition = 'height 0.5s'
kfkfkfkfkfkfkf.style.height = '50px'

function porsh() {
    axaxaxaxaxaxa = Number(axaxaxaxaxaxa) + 1;
    if (axaxaxaxaxaxa % 2 == 0) {
        kfkfkfkfkfkfkf.style.height = '150px';
        fkfkfkfkfkfkfk.style.cssText = `
                                     transform: rotateX(180deg);
                                    transition:0.8s;
                                              `

    } else {
        kfkfkfkfkfkfkf.style.height = '50px'
        fkfkfkfkfkfkfk.style.cssText = `
                                     transform: rotateX(0deg);
                                    transition:0.8s;
                                              `


    }
}

let axaxaxaxaxaxax = 1;
let fkfkfkfkfkfkfkf = document.getElementById('jallllllllllll')
let kfkfkfkfkfkfkfk = document.getElementById('djallllllllllll')
kfkfkfkfkfkfkfk.style.transition = 'height 0.5s'
kfkfkfkfkfkfkfk.style.height = '50px'

function aventador() {
    axaxaxaxaxaxax = Number(axaxaxaxaxaxax) + 1;
    if (axaxaxaxaxaxax % 2 == 0) {
        kfkfkfkfkfkfkfk.style.height = '200px';
        fkfkfkfkfkfkfkf.style.cssText = `
                                     transform: rotateX(180deg);
                                    transition:0.8s;
                                              `

    } else {
        kfkfkfkfkfkfkfk.style.height = '50px'
        fkfkfkfkfkfkfkf.style.cssText = `
                                     transform: rotateX(0deg);
                                    transition:0.8s;
                                              `


    }
}
