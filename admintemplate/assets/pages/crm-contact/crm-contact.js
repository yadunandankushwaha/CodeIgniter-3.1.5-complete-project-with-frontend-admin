 "use strict";
 $(document).ready(function() {

     $('#crm-contact').DataTable({
         "paging": true,
         "ordering": false,
         "bLengthChange": true,
         "info": false

     });
     var simple = $('#crm-contact').DataTable();
     $('#crm-contact tfoot th').each(function() {
         var title = $(this).text();
         $(this).html('<div class="input-group"><input type="text" class="form-control" placeholder="Search ' + title + '" /></div>');
     });
     // Apply the search
     simple.columns().every(function() {
         var that = this;

         $('input', this.footer()).on('keyup change', function() {
             if (that.search() !== this.value) {
                 that
                     .search(this.value)
                     .draw();
             }
         });
     });

     // Minimum setup
     $('#datetimepicker1').datetimepicker({
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });
     // Using Locales
     $('#datetimepicker2').datetimepicker({
         locale: 'ru',
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });
     // Custom Formats
     $('#datetimepicker3').datetimepicker({
         format: 'LT',
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });
     // No Icon (input field only)
     $('#datetimepicker4').datetimepicker({
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });
     // Enabled/Disabled Dates
     $('#datetimepicker5').datetimepicker({
         defaultDate: "11/1/2013",
         disabledDates: [
             moment("12/25/2013"),
             new Date(2013, 11 - 1, 21),
             "11/22/2013 00:53"
         ],
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });
     // Linked Pickers
     $('#datetimepicker6').datetimepicker({
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });
     $('#datetimepicker7').datetimepicker({
         useCurrent: false, //Important! See issue #1075
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });
     $("#datetimepicker6").on("dp.change", function(e) {
         $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
     });
     $("#datetimepicker7").on("dp.change", function(e) {
         $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
     });

     // Custom icons
     $('#datetimepicker8').datetimepicker({
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down"
         }
     });

     // View Mode
     $('#datetimepicker9').datetimepicker({
         viewMode: 'years',
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });

     // Min View Mode
     $('#datetimepicker10').datetimepicker({
         viewMode: 'years',
         format: 'MM/YYYY',
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });
     // Disabled Days of the Week
     $('#datetimepicker11').datetimepicker({
         daysOfWeekDisabled: [0, 6],
         icons: {
             time: "icofont icofont-clock-time",
             date: "icofont icofont-ui-calendar",
             up: "icofont icofont-rounded-up",
             down: "icofont icofont-rounded-down",
             next: "icofont icofont-rounded-right",
             previous: "icofont icofont-rounded-left"
         }
     });

     $('input[name="daterange"]').daterangepicker();
     $(function() {
         $('input[name="birthdate"]').daterangepicker({
                 singleDatePicker: true,
                 showDropdowns: true
             },
             function(start, end, label) {
                 var years = moment().diff(start, 'years');
                 alert("You are " + years + " years old.");
             });

         $('input[name="datefilter"]').daterangepicker({
             autoUpdateInput: false,
             locale: {
                 cancelLabel: 'Clear'
             }
         });
         $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
             $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
         });

         $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
             $(this).val('');
         });

         var start = moment().subtract(29, 'days');
         var end = moment();

         function cb(start, end) {
             $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
         }

         $('#reportrange').daterangepicker({
             startDate: start,
             endDate: end,
             "drops": "up",
             ranges: {
                 'Today': [moment(), moment()],
                 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                 'This Month': [moment().startOf('month'), moment().endOf('month')],
                 'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
             }
         }, cb);

         cb(start, end);

         $('.input-daterange input').each(function() {
             $(this).datepicker();
         });
         $('#sandbox-container .input-daterange').datepicker({
             todayHighlight: true
         });
         $('.input-group-date-custom').datepicker({
             todayBtn: true,
             clearBtn: true,
             keyboardNavigation: false,
             forceParse: false,
             todayHighlight: true,
             defaultViewDate: {
                 year: '2017',
                 month: '01',
                 day: '01'
             }
         });
         $('.multiple-select').datepicker({
             todayBtn: true,
             clearBtn: true,
             multidate: true,
             keyboardNavigation: false,
             forceParse: false,
             todayHighlight: true,
             defaultViewDate: {
                 year: '2017',
                 month: '01',
                 day: '01'
             }
         });
         $('#config-demo').daterangepicker({
             "singleDatePicker": true,
             "showDropdowns": true,
             "timePicker": true,
             "timePicker24Hour": true,
             "timePickerSeconds": true,
             "showCustomRangeLabel": false,
             "alwaysShowCalendars": true,
             "startDate": "11/30/2016",
             "endDate": "12/06/2016",
             "drops": "up"
         }, function(start, end, label) {
             console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
         });
     });

     // Date-dropper js start

     $("#dropper-default").dateDropper({
         dropWidth: 200,
         dropPrimaryColor: "#1abc9c",
         dropBorder: "1px solid #1abc9c"
     })
 });


 
