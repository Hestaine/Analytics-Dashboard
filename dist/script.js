const lightModeBtn = document.querySelector('.bright');
const darkModeBtn = document.querySelector('.dark');
const bars = document.querySelectorAll('.bar');
const span = document.querySelectorAll('.spantext');
const body = document.querySelector('body');
const slideBar = document.querySelector('.slidebar');
const salesTrend = document.querySelector('.sales-trend');
const totalOrder = document.querySelectorAll('.total-order');
const lastOrder = document.querySelector('.last-orders');
const topPlatform = document.querySelector('.top-platform');
const nav = document.querySelector('.nav');
const theme = document.querySelector('.theme');
const mailText = document.querySelector('.mailtext')
const chartAmt = document.querySelectorAll('.amt');
const totalText = document.querySelectorAll('.totaltext');
const totalNumber = document.querySelectorAll('.totalnumber');
const details = document.querySelectorAll('.details');
const whiteSpace = document.querySelector('.whitespace');
                                               //Theme
lightModeBtn.addEventListener('click', (e)=>{
    body.classList.remove('bg-ash-700');
    body.classList.add('bg-ash-100');
    body.classList.remove('text-ash-100');
    body.classList.add('text-ash-700');
    nav.classList.remove('bg-ash-500');
    nav.classList.add('bg-ash-50');
    nav.classList.remove('text-ash-50');
    nav.classList.add('text-ash-700');
    slideBar.classList.remove('bg-ash-500');
    slideBar.classList.add('bg-ash-1000');
    theme.classList.remove('bg-ash-400');
    theme.classList.add('bg-white');
    whiteSpace.classList.remove('bg-ash-400');
    whiteSpace.classList.add('bg-white');
    salesTrend.classList.remove('bg-ash-400');
    salesTrend.classList.add('bg-white');
    salesTrend.classList.remove('text-ash-50');
    salesTrend.classList.add('text-ash-700');
    lastOrder.classList.remove('bg-ash-400');
    lastOrder.classList.add('bg-white');
    lastOrder.classList.remove('text-ash-50');
    lastOrder.classList.add('text-ash-700');
    topPlatform.classList.remove('bg-ash-400');
    topPlatform.classList.add('bg-white');
    topPlatform.classList.remove('text-ash-50');
    topPlatform.classList.add('text-ash-700');
    mailText.classList.remove('text-ash-100');
    mailText.classList.add('text-[#787486]');
    bars.forEach(bar =>{
        bar.classList.remove('bg-opaquegreen2');
        bar.classList.add('bg-opaquegreen');
    })
    totalOrder.forEach(order =>{
        order.classList.remove('bg-ash-400');
        order.classList.add('bg-white');
        order.classList.remove('text-ash-50');
        order.classList.add('text-ash-700');
    })
    chartAmt.forEach(amt =>{
        amt.classList.remove('text-ash-50');
        amt.classList.add('text-ash-700');
    });
    details.forEach(detail =>{
        detail.classList.remove('text-ash-100');
        detail.classList.add('text-[#9CA4AB]');
    });
    totalText.forEach(text =>{
        text.classList.remove('text-ash-100');
        text.classList.add('text-[#898989]');
    });
    totalNumber.forEach(number =>{
        number.classList.remove('text-ash-100');
        number.classList.add('text-[#3A3F51]');
    });
});
darkModeBtn.addEventListener('click', (e)=>{
    body.classList.remove('bg-ash-100');
    body.classList.add('bg-ash-700');
    body.classList.remove('text-ash-700');
    body.classList.add('text-ash-100');
    nav.classList.remove('bg-ash-50');
    nav.classList.add('bg-ash-500');
    nav.classList.remove('text-ash-700');
    nav.classList.add('text-ash-50');
    slideBar.classList.remove('bg-ash-50');
    slideBar.classList.add('bg-ash-500');
    theme.classList.remove('bg-white');
    theme.classList.add('bg-ash-400');
    whiteSpace.classList.remove('bg-white');
    whiteSpace.classList.add('bg-ash-400');
    salesTrend.classList.remove('bg-white');
    salesTrend.classList.add('bg-ash-400');
    salesTrend.classList.remove('text-ash-700');
    salesTrend.classList.add('text-ash-0');
    lastOrder.classList.remove('bg-white');
    lastOrder.classList.add('bg-ash-400');
    lastOrder.classList.remove('text-ash-700');
    lastOrder.classList.add('text-ash-0');
    topPlatform.classList.remove('bg-white');
    topPlatform.classList.add('bg-ash-400');
    topPlatform.classList.remove('text-ash-700');
    topPlatform.classList.add('text-ash-0');
    mailText.classList.remove('text-[#787486]');
    mailText.classList.add('text-ash-100');
    bars.forEach(bar =>{
        bar.classList.remove('bg-opaquegreen');
        bar.classList.add('bg-opaquegreen2');
    })
    totalOrder.forEach(order =>{
        order.classList.remove('bg-white');
        order.classList.add('bg-ash-400');
        order.classList.remove('text-ash-700');
        order.classList.add('text-ash-0');
    })
    chartAmt.forEach(amt => {
        amt.classList.remove('text-ash-700');
        amt.classList.add('text-ash-0');
    });
    details.forEach(detail =>{
        detail.classList.remove('text-[#9CA4AB]');
        detail.classList.add('text-ash-100');
    });
    totalText.forEach(text =>{
        text.classList.remove('text-[#898989]');
        text.classList.add('text-ash-100');
    });
    totalNumber.forEach(number =>{
        number.classList.remove('text-[#3A3F51]');
        number.classList.add('text-ash-100');
    });
    mailText.classList.remove('text-[#787486]');
    mailText.classList.add('text-ash-100');
})
                                               //Bar Span
bar.addEventListener('mou')