window.addEventListener('scroll', function() {
    const siteInfo = document.querySelector('.site-info');
    const siteInfoPosition = siteInfo.getBoundingClientRect().top;
    
    if (siteInfoPosition < window.innerHeight) {
        siteInfo.style.display = 'block';  // 스크롤 시 소개가 보이도록 설정
    }
});
