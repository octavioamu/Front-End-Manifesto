/*
*     Author:       Gabriel Mateu's
*     Github:       git.io/gabrielmateus
*     Project:      Front End Manisfesto
*     Date:         05/06/2012
*/

/* ==========>> Summary
    =Login
    =Home
    =Slider
    =Modal
============================================================= */

/* ==========>> =Tabs
============================================================= */

(function ($) {

    var $folderLink = $('.folder', '#folders'),
        $folderFiles = $('.files', '#folders'),
        $codeContentTab = $('.tabs, #code-content'),
        $fileOpen = $('#file-open, #folders .files');

        // Open Files
        $('a').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
        });

        // Headeer Nav
        $('header nav a').on('click', function(e){
            $(this).addClass('current').parent().siblings().children().removeClass('current');
        });

        function match() {
            // If Match with the tab with same href and then close the mothafoca
            var name = $(this).parent().attr('href'),
               nameTab = $codeContentTab.find('li a').attr('href');

            if(name == nameTab){
                var same = name;
            }

            if($codeContentTab.find('li a[href^="'+ name+'"]')){
                $codeContentTab.find('li a[href^="'+ name+'"]').parent().addClass('hide');
            };
        }

        // List of open files
        $fileOpen.find('span').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            $(this).parent().toggleClass('hide');

            match();

        });

        // List of open files A
        $fileOpen.find('a').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            $(this).toggleClass('active').parent().siblings().children().removeClass('active');
            $(this).parent().parents('li').siblings().children().find('a').removeClass('active');

            // If Match with the tab with same href
            var name = $(this).attr('href'),
               nameTab = $codeContentTab.find('li a').attr('href');

            if(name == nameTab){
                var same = name;
            }

            if($codeContentTab.find('li a[href^="'+ name+'"]')){
                $codeContentTab.find('li a[href^="'+ name+'"]').parent().addClass('current').siblings().removeClass('current');
            };

        });

        $folderFiles.addClass('hide');

        // Link of the Folder (Folder Nest)
        $folderLink.on('click', function(e){
            $(this).next($folderFiles).slideToggle(80).toggleClass('hide');
            $(this).toggleClass('active').siblings().children().find('a').removeClass('active');

            console.log($(this).siblings().children().find('a'));            

        });

        // Tab of each open file in the code content
        $codeContentTab.find('li a').on('click', function(){

            $(this).parent().addClass('current').siblings().removeClass('current');

            // If Match with the open file List
            var nameTab = $(this).attr('href'),
                name = $fileOpen.find('a').attr('href');

            if(name == nameTab){
                var same = nameTab;
            }

            if($fileOpen.find('a[href^="'+ nameTab +'"]')){
                $fileOpen.find('a[href^="'+ nameTab +'"]').addClass('active').parent().siblings().children().removeClass('active');

            };
        });

        //Close Tab Code Content
        $codeContentTab.find('li span').on('click', function(){
            $(this).closest('li').addClass('hide');

            // If Match with the open file List
            var nameTab = $(this).parent().attr('href'),
                name = $fileOpen.find('a').attr('href');

            if(name == nameTab){
                var same = nameTab;
            }

            if($fileOpen.find('a[href^="'+ nameTab +'"]')){
                $fileOpen.find('a[href^="'+ nameTab +'"]').parent().addClass('hide');
            };

        });

        // Function for style the conversions of CSS
        $(document).ready(function(){

            $('.cm-number').each(function(){
                var pattern    = [ 'px', 'em', 'rem', 'pt'],
                    newSpartan = $(this).html();


                for (var i = 0; i < pattern.length; i++) {
                    newSpartan = newSpartan.replace(pattern[i], '<strong>' + pattern[i] + '</strong>');
                };

                $(this).html(newSpartan);
            });
        });

})(jQuery);