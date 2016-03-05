
(function($){
    $(function(){
        var counter=0;
        $('input[type="checkbox"]').each(function(){
            var id=$(this).id;
            if(id==undefined) {
                id="checkbox-" + counter++;
                $(this).attr('id',id);
                $(this).css('display',"none");
            }
            var label =  $("<label class='pseudo-checkbox' id='pseudo-"+id+"' for='"+id+"'><span></span></label>");
            $(this).before(label).change(function(){
                if ($(this).is(":checked")) {
                    label.addClass('checked');
                } else {
                    label.removeClass('checked');
                }
            })
        });
    });
})(jQuery);
