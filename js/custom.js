var ServerSiteUrl	=	'http://getalocalplumber.co.uk/';
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
				data:'?callback=jQuery21104583008158951998_1450717070358&data={"email":"pr%40pr.com":"password":"123456"}&_=1450717070359',
				aync:true,
				cache:false,
				dataType: "jsonp",
			   type: "GET",
			   url: url,
			   
			   
			   success: function(data)
			   {
				alert(data);
				  if(data.message == 'success'){
						var id	=	data.id;	
						location.href="main.html?id:"+id+"&page=dashboard";
				  }else{
					alert(data.message);
				  } 
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