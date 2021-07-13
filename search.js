var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/assets/plants.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

$('#search-form').keyup(function(){
            var searchField = $(this).val();
			if(searchField === '')  {
				$('#filter-records').html('');
				return;
			}
			
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row">';
            var count = 1;
			  $.each(data, function(key, val){
				if ((val.Name.search(regex) != -1) || (val.Scientific Name.search(regex) != -1) || (val.Description.search(regex) != -1) || || (val.Plant Type.search(regex) != -1) || (val.Lifespan.search(regex) != -1) || (val.Spread.search(regex) != -1) || (val.Toxicity.search(regex) != -1) {
				  output += '<div class="col-md-6 well">';
				  output += '<div class="col-md-3"><img class="img-responsive" src="'+val.profile_image+'" alt="'+ val.employee_name +'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5>' + val.employee_name + '</h5>';
				  output += '<p>' + val.employee_salary + '</p>'
				  output += '</div>';
				  output += '</div>';
				  if(count%2 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			  });
			  output += '</div>';
			  $('#filter-records').html(output);
        });