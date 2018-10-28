$(document).ready(function() {
  AOS.init();
   AOS.refresh();
  let imgcard1 = `<div class="card-body card-overlay" style="color:white;">
					    	<h5 class="card-title" style="font-size: 1.6rem;">Name of speaker</h5>
					    	<p class="card-text text-center" style="font-size: 1.3rem;;">About the speaker</p>
					  	</div>`
  $("#speaker1").hover(function() {
  	$(this).html(imgcard1);
  }, function() {
  	$(this).empty();
  });

  let imgcard2 = `<div class="card-body card-overlay" style="color:white;">
					    	<h5 class="card-title" style="font-size: 1.6rem;">Name of speaker</h5>
					    	<p class="card-text text-center" style="font-size: 1.3rem;;">About the speaker</p>
					  	</div>`
  $("#speaker2").hover(function() {
  	$(this).html(imgcard2);
  }, function() {
  	$(this).empty();
  });

  let imgcard3 = `<div class="card-body card-overlay" style="color:white;">
					    	<h5 class="card-title" style="font-size: 1.6rem;">Name of speaker</h5>
					    	<p class="card-text text-center" style="font-size: 1.3rem;;">About the speaker</p>
					  	</div>`
  $("#speaker3").hover(function() {
  	$(this).html(imgcard3);
  }, function() {
  	$(this).empty();
  });

  let imgcard4 = `<div class="card-body card-overlay" style="color:white;">
					    	<h5 class="card-title" style="font-size: 1.6rem;">Name of speaker</h5>
					    	<p class="card-text text-center" style="font-size: 1.3rem;;">About the speaker</p>
					  	</div>`
  $("#speaker4").hover(function() {
  	$(this).html(imgcard4);
  }, function() {
  	$(this).empty();
  });
	
});
