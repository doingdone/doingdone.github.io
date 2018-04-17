(function ($) {
    var rewardCode = $('#rewardCode'),
        rewardCheck = $('.reward-item');

    rewardCheck.click(function () {
        $(this).addClass('checked').siblings(rewardCheck).removeClass('checked');
        rewardCode.attr('src', $(this).attr('data-id') === 'wechat' ? this.dataset.wechat : this.dataset.alipay);
    });
})(jQuery);
