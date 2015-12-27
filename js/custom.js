 if(window.location.hostname	==	'localhost'){
	var SiteUrl			=	'http://localhost/projects/washington/';
	var ServerSiteUrl	=	'http://localhost/projects/getaplumber/';
}else{
	var SiteUrl			=	'http://localhost/projects/washington/';
	var ServerSiteUrl	=	'http://getalocalplumber.co.uk/';
} 

$(".ajax_link").click(function(){
		$('.loading-mask').addClass('stop-loading');
		$.ajax({
				type:'post',
				data:'',
				aync:true,
				cache:false,
				url: 'response.html',
				success: function(response){
					if(response != ''){
						$(".update_div").html(response);
							
					}
				}
			});
	});
	
	var url = 	ServerSiteUrl+'webservices/login';
	$("#submit-login-form").submit(function(e) {
	
		 $.ajax({
			   type: "POST",
			   url: url,
			   dataType: "json",
			   data: $("#submit-login-form").serialize(), // serializes the form's elements.
			   success: function(data)
			   {
				  if(data.message == 'success'){
						var id	=	data.id;	
						location.href="main.html?id:"+id+"&page=dashboard";
				  }else{
					alert(data.message);
				  } 
			   },
			   error: function(xhr, textStatus, error){
					  alert(xhr.statusText);
					  alert(textStatus);
					  alert(error);
				  }
			 }); 

		e.preventDefault(); // avoid to execute the actual submit of the form.
	});

function dashboard(){
	//var url = "dashboard.html";
	var url = ServerSiteUrl+'mobiles/dashboard/';
	
	$.ajax({
			type:'post',
			data:'',
			aync:true,
			cache:false,
			crossDomain: true,
			url: url,
			success: function(response){
				if(response != ''){
					$(".update_div").html(response);
						
				}
			}
		});
		
		
}

function manageLeads(){
	var url = "manage_leads.html";
	var url = ServerSiteUrl+"mobiles/manage_leads/";
	$.ajax({
			type:'post',
			data:'',
			aync:true,
			cache:false,
			url: url,
			success: function(response){
				if(response != ''){
					$(".update_div").html(response);
						
				}
			}
		});
}



function getContent(url){
	$.ajax({
			type:'post',
			data:'',
			aync:true,
			cache:false,
			url: url,
			success: function(response){
				if(response != ''){
					$(".update_div").html(response);
						
				}
			}
		});
}

function getEditProfileData(id){
	var url = ServerSiteUrl+"mobiles/edit_profile/"+id;
	$.ajax({
			type:'post',
			data:'',
			aync:true,
			cache:false,
			url: url,
			success: function(response){
				if(response != ''){
					alert(response);
						
				}
			}
		});
}	