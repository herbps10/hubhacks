(function( $ ){
    // goto http://lazylinepainter.info to convert your svg into a svgData object.
    var svgData = {
        "skyline" :
        {
            "strokepath" :
            [
                {   "path": "M 0,136 96.1,136 96.1,131 97.8,131 97.8,125.9 98.7,125.9 98.7,121.5 100,121.5 100,125.9 101,125.9 101,131.2 102.7,131.2 102.7,136.9 105.1,136.9  105.1,128.5 108.3,128.5 108.3,125.1 116.1,125.1 116.1,78.3 115.3,74.6 118.1,74.6 118.1,68.6 120.5,68.6 120.5,47.1 125.4,35.2   129.5,46.9 129.5,68.5 131.5,68.5 131.5,74.5 134.2,74.5 132.7,79.3 132.7,125.5 138.5,125.5 138.5,83.2 168.8,83.2 173.9,85.2   173.9,104.2 180.9,104.2 180.9,90.8 182.9,90 182.9,83.6 184.6,81.1 185.7,64 184.6,63.5 184.6,60.3 187.3,60.3 187.3,63.5   186.3,64.1 187.3,81.3 188.9,84 188.9,90 190.7,90.7 190.7,104.6 201.2,104.6 201.2,103.3 203.7,103.3 203.7,97.7 205.7,97.7   205.7,88.4 210.2,88.4 210.2,82.8 212.5,82.8 212.5,81.3 210.2,81.3 210.2,79.3 217.8,79.3 217.8,81.4 215.4,81.4 215.4,83.1   217.8,83.1 217.8,88.6 223.1,88.6 223.1,96.9 226.2,96.9 226.2,102.6 229.2,102.6 229.2,107.7 231.6,107.7 231.6,110.9 233.1,110.9   233.1,113.6 234,113.6 234,134.8 236.2,134.8 236.2,35.9 247.7,35.9 247.7,30.1 262.5,30.1 262.5,35.7 273.3,35.7 273.3,93.6   286.8,105.4 286.8,35.7 289.7,35.7 289.7,33.9 288.4,33.9 288.4,29.5 286.8,29.5 286.8,27.9 292.7,27.9 292.7,24.7 301,24.7   301,0.1 304,0.1 304,24.7 309,24.7 309,12.9 312,12.9 312,24.8 313.6,24.8 313.6,27.8 319.5,27.8 319.5,28.9 318.3,28.9   318.3,33.5 316.7,33.5 316.7,35.7 320.4,35.7 320.4,107.9 325.5,107.9 325.5,91.5 332.1,76.9 335.4,61.1 346.7,61.1 349.8,76.5   356.3,92.4 356.3,131 371.4,131 371.4,105.8 373.2,102 377.6,102 379.9,99.7 395.8,99.7 395.8,102.4 402.1,102.8 402.1,134.8   404.2,136 499.6,136",
                    "duration" : 10000
                    }
            ],
            "dimensions" : { "width" : 500, "height" : 137 }
        }
    }

    $(document).ready(function(){

        // Setup your Lazy Line element
        $('#skyline').lazylinepainter({
                'svgData' : svgData,
                'strokeWidth' : 1,
                'delay' : 0,
                'strokeColor' : '#fff',
                'strokeCap' : 'round',
                'responsive' : true
            }
        )

        // Paint
        $(window).on('load', function(){
            var state = 'paint';
            $('#skyline').lazylinepainter(state);
        });
    })


})( jQuery );