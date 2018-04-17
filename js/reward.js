(function ($) {
    var rewardCode = $('#rewardCode'),
        rewardCheck = $('.reward-item');

    rewardCheck.click(function () {
        $(this).addClass('checked').siblings(rewardCheck).removeClass('checked');
        rewardCode.attr('src', '/images/alipay_code.jpg');
        
    });
})(jQuery);
