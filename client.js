$(function(){
    $(document).on('keydown', function(e) {
        if (e.keyCode == 27) {
            $('#liveToast').toast('hide')
        }
    });
    // preload audio
    var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        //display selected product info
        const name = $(this).data('product');
        const code = $(this).data('code'); //code in place of product to show discount code.
        $('#name').html(name);
        $('#code').html(code);

        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
});