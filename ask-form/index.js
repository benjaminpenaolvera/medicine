$(document).ready(function(){
  console.log('AQUI');

  var form_step = 1;
  const STEP_NUMBERS = [
    '#step-number-1',
    '#step-number-2',
    '#step-number-3',
    '#step-number-4'
  ];
  const STEP_CONTAINERS = [
    '#form-s1',
    '#form-s2',
    '#form-s3',
    '#form-s4'
  ];

  // STEP 1
  // Display 'Continue' after option selected
  // and Procedure Name entered (if 'Other especialties' checked)
  $("input[name='procedure']").change(function() {
    var procedure = $(this);
    if (procedure[0].id === 's1-otherSpecialties') {
      $('#s1-otherInputContainer').removeClass('d-none');
      if ($("#s1-otherInput")[0].value === '') {
        $('#s1-continue').addClass('d-none');
      }
      else {
        $('#s1-continue').removeClass('d-none');
      }
    }
    else if (procedure.length > 0) {
      $('#s1-continue').removeClass('d-none');
      $('#s1-otherInputContainer').addClass('d-none');
    }
  });

  $("#s1-otherInput").keyup(function() {
    var procedureNameInput = $(this);
    if (procedureNameInput[0].value !== '') {
      $('#s1-continue').removeClass('d-none');
    }
    else {
      $('#s1-continue').addClass('d-none');
    }
  });

  // STEP 1 - 'I am not sure' option
  $('#s1-dontknow').click(function() {
    $('#form-s1').addClass('d-none');
    $('#form-s2').removeClass('d-none');
    $('#step-1').removeClass('active');
    $('#step-2').addClass('active');
  });

  // STEP 2
  // Do not display the continue button unless:
  // Input text is filled, option selected (TO DO: and file submitted)s
  $('form#s2-stepForm').on('keyup change', 'input, #inputGroupFile01', function(){
    var procedureInputFilled = $("#s2-procedureInput")[0].value !== '';
    var verifiedOptionSelected = $("input[name='verified']:checked").length > 0;
    // var fileUploaded = $("input[type=file]")[0].files.length > 0;
    if(procedureInputFilled && verifiedOptionSelected) {
      $('#s2-continue').removeClass('d-none');
    }
    else {
      $('#s2-continue').addClass('d-none');
    }
  });

  // STEP 3
  $('form#s3-stepForm').on('keyup change', 'input', function(){
    var lastName = $("#s3-last_name")[0].value !== '';
    var firstName = $("#s3-first_name")[0].value !== '';
    var phone = $("#s3-phone_number")[0].value !== '';
    var email = $("#s3-email")[0].value !== '';
    var nationality = $("#s3-nationality")[0].value !== '';
    var birth_date = $("#s3-birth_date")[0].value !== '';
    var address = $("#s3-address")[0].value !== '';
    var postal_code = $("#s3-postal_code")[0].value !== '';
    var city = $("#s3-city")[0].value !== '';
    // var fileUploaded = $("input[type=file]")[0].files.length > 0;
    if(lastName && firstName && phone && email && nationality && birth_date && address && postal_code && city) {
      $('#s3-continue').removeClass('d-none');
    }
    else {
      $('#s3-continue').addClass('d-none');
    }
  });

  // STEP 4
  $('form#s4-stepForm').on('change', 'input', function(){
    var destinationSelected = $("input[name='destination']:checked").length > 0;
    var dateSelected = $("input[name='date']:checked").length > 0;
    if(destinationSelected && dateSelected) {
      $('#s4-submit').removeClass('d-none');
    }
    else {
      $('#s4-submit').addClass('d-none');
    }
  });


  // Continue buttons
  $('#s1-continue').click(function() {
    $('#form-s1').addClass('d-none');
    $('#form-s2').removeClass('d-none');
    $('#step-1').removeClass('active');
    $('#step-2').addClass('active');
  });
  $('#s2-continue').click(function() {
    $('#form-s2').addClass('d-none');
    $('#form-s3').removeClass('d-none');
    $('#step-2').removeClass('active');
    $('#step-3').addClass('active');
  });
  $('#s3-continue').click(function() {
    $('#form-s3').addClass('d-none');
    $('#form-s4').removeClass('d-none');
    $('#step-3').removeClass('active');
    $('#step-4').addClass('active');
  });
  $('#s4-submit').click(function() {
    $('#form-s4').addClass('d-none');
    $("#submitted-message").removeClass('d-none');
    // $('#form-s4').removeClass('d-none');
  });

  // Return buttons
  $('#s2-return').click(function() {
    $('#form-s2').addClass('d-none');
    $('#form-s1').removeClass('d-none');
    $('#step-2').removeClass('active');
    $('#step-1').addClass('active');
  });
  $('#s3-return').click(function() {
    $('#form-s3').addClass('d-none');
    $('#form-s2').removeClass('d-none');
    $('#step-3').removeClass('active');
    $('#step-2').addClass('active');
  });
  $('#s4-return').click(function() {
    $('#form-s4').addClass('d-none');
    $('#form-s3').removeClass('d-none');
    $('#step-4').removeClass('active');
    $('#step-3').addClass('active');
  });
});
