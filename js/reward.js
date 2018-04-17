(function ($) {
    var rewardCode = $('#rewardCode'),
        rewardCheck = $('.reward-item');

    rewardCheck.click(function () {
        $(this).addClass('checked').siblings(rewardCheck).removeClass('checked');
        alert($(this).attr('data-id') === 'wechat')
        rewardCode.attr('src', $(this).attr('data-id') === 'wechat' ? this.dataset.wechat : this.dataset.alipay);
        alert(rewardCode.attr('src'))
    });
})(jQuery);
