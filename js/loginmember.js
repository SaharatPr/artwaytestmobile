/* Float Label Pattern Plugin for Bootstrap 3.1.0 by Travis Wilson
**************************************************/

(function ($) {
    $.fn.floatLabels = function (options) {

        // Settings
        var self = this;
        var settings = $.extend({}, options);


        // Event Handlers
        function registerEventHandlers() {
            self.on('input keyup change', 'input, textarea', function () {
                actions.swapLabels(this);
            });
        }


        // Actions
        var actions = {
            initialize: function() {
                self.each(function () {
                    var $this = $(this);
                    var $label = $this.children('label');
                    var $field = $this.find('input,textarea').first();

                    if ($this.children().first().is('label')) {
                        $this.children().first().remove();
                        $this.append($label);
                    }

                    var placeholderText = ($field.attr('placeholder') && $field.attr('placeholder') != $label.text()) ? $field.attr('placeholder') : $label.text();

                    $label.data('placeholder-text', placeholderText);
                    $label.data('original-text', $label.text());

                    if ($field.val() == '') {
                        $field.addClass('empty')
                    }
                });
            },
            swapLabels: function (field) {
                var $field = $(field);
                var $label = $(field).siblings('label').first();
                var isEmpty = Boolean($field.val());

                if (isEmpty) {
                    $field.removeClass('empty');
                    $label.text($label.data('original-text'));
                }
                else {
                    $field.addClass('empty');
                    $label.text($label.data('placeholder-text'));
                }
            }
        }


        // Initialization
        function init() {
            registerEventHandlers();

            actions.initialize();
            self.each(function () {
                actions.swapLabels($(this).find('input,textarea').first());
            });
        }
        init();


        return this;
    };

    $(function () {
        $('.float-label-control').floatLabels();
    });
})(jQuery);

function onChangeValue(value,type) {
    if(type==1){
        if(value != " "){
            document.getElementById("lable_username").style.display="none";
        }
        if(value == ""){
            document.getElementById("lable_username").style.display="inline";
        }
      
    }

    else if(type ==2){
        if(value != " "){
            document.getElementById("lable_password").style.display="none";
        }        
        if(value == ""){
            document.getElementById("lable_password").style.display="inline";
        }
    }
}

function  focusValue(type) {
    if(type == 1){
        document.getElementById("lable_username").style.display="none";
    }

    if(type ==2){
        document.getElementById("lable_password").style.display="none";
    }
}

function onblurinput(type) {
    let temp = document.getElementById("name-field").value;
    if(type == 1){
       
        if(temp.length == 0){
            console.log("XXXXX");
            document.getElementById("lable_username").style.display="inline";
        }
        
    }

    if(type ==2){
        if(temp.length == 0){
                document.getElementById("lable_password").style.display="inline";
        }
    }
}