$(document).ready(function() {

	var language = 0;
	var lastClicked = "#home";
	var arr = [
		[
			'<a href="#home"><i class="fa fa-home"></i> Home</a>',
			'<a href="#samples"><i class="fa fa-microphone"></i> Samples</a>',
			'<a href="#contact"><i class="fa fa-envelope"></i> Contact</a>',
			'<a href="#about"><i class="fa fa-info-circle"></i> About</a>',
			'<a href="#language"><i class="fa fa-flag"></i> Change Language</a>',
			`<h2>Welcome to Albania Voice Recording!</h2>
          <div class="col-md-6">
    <h3>Would you like your ad to be heard beautifully?</h3>
    <h3>Would you like to hear your favorite book?</h3>
    <h3>Would you like the voice to be nice?</h3>
    <h3>Albania Voice Recording helps you with professionalism and competitive prices!</h3>
        <h3>You're welcome!</h3>
      </div>
      <div>
      </div class="col-md-6">
      <img id="why_us" src="http://static.builder-assets.com/var/m_c/cc/cc2/10108/200043-why-us.png"></img>
    </div>`,
			`<div class="fields">
      <h2 align="middle">Contact Us</h2>
      <h3>For more information please contact as at: <u>albaniavoicerecording@gmail.com</u></h3>
    </div>`,
			`Voice Samples`,
			`Male`,
			`Female`,
			`<div class="fields">
      <h2 align="middle">About Us</h2>
        <h3 align="middle">Albania Voice Recording is here to help you with all its voice over needs whether you’re a small or a large business.</h3>
        <h3 align="middle">Our professional voice production team is here to assist you with any type voice over and have the experience to get it done right.</h3>
        <h3 align="middle">Take a look at all the services we provide, from marketing messaging to any type of narration, we’re there for you.</h3>
<div class="details">
<div class="col-md-6">
  <h4>Narration</h4>
   <ul>
    <li>Audio Books</li>
    <li>Audio Manuals</li>
    <li>eLearning</li>
    <li>Product Demos</li>
    <li>Software Tutorials</li>
    <li>YouTube Videos</li>
    <li>PowerPoint Presentations</li>
    <li>Educational Videos</li>
    <li>Public Announcement Systems</li>
    <li>Web/Smartphone Applications</li>
  </ul>
</div>
<div class="col-md-6">
  <h4>Telephone Voice Overs</h4>
  <ul>
    <li>IVR Menus (Interactive Voice Response)</li>
    <li>Voice Prompts</li>
    <li>Voice Mail Recordings</li>
    <li>Auto Messages</li>
    <li>Announcement Messages</li>
    <li>Telephone Surveys</li>
    <li>Marketing Messages</li>
    <li>Phone Greetings</li>
    <li>Message On-Hold</li>
    <li>Digital Receptionist</li>
</ul>
</div>
</div>
<div class="details">
<div class="col-md-6">
  <h4>Broadcast</h4>
   <ul>
    <li>Radio Spots</li>
    <li>Satellite Spots</li>
    <li>Internet Ads</li>
    <li>TV Commercials</li>
    <li>Infommercials</li>
    <li>Public Service TV</li>
    <li>Public Service Radio</li>
    <li>Internet Video</li>
  </ul>
</div>
<div class="col-md-6">
  <h4>Other Services</h4>
   <ul>
    <li>Audio Design</li>
    <li>Audio Effects</li>
    <li>Audio Synchronization</li>
    <li>Translations and Redactions (English, Albanian)</li>
    <li>Sound Mixing and Mastering</li>
    <li>Full HD Video Recording</li>
    <li>Dubbed Movies and Documentaries</li>
  </ul>
</div>
</div>
    </div>`
		],
		[
			'<a href="#home"><i class="fa fa-home"></i> Shtepi</a>',
			'<a href="#samples"><i class="fa fa-microphone"></i> Shembuj</a>',
			'<a href="#contact"><i class="fa fa-envelope"></i> Na Kontaktoni</a>',
			'<a href="#about"><i class="fa fa-info-circle"></i> Rreth Nesh</a>',
			'<a href="#language"><i class="fa fa-flag"></i> Nderro Gjuhen</a>',
			`<h2>Miresevini ne Albania Voice Recording!</h2>
    <div class="col-md-6">
    <h3>Deshironi qe reklama juaj te degjohet bukur?</h3>
    <h3>Deshironi te degjoni librin tuaj te preferuar?</h3>
    <h3>Deshironi qe zeri te jete i pelqyeshem?</h3>
    <h3>Albania Voice Recording ju vjen ne ndihme me profesionalizem dhe cmime konkurruese!</h3>
    <h3>Jeni te mirepritur!</h3>
      </div>
      <div>
      </div class="col-md-6">
      <img id="why_us" src="http://static.builder-assets.com/var/m_c/cc/cc2/10108/200043-why-us.png"></img>
    </div>`,
			`<div class="fields">
      <h2 align="middle">Na Kontaktoni</h2>
      <h3>Per me teper informacion ju lutem kontaktoni ne: <u>albaniavoicerecording@gmail.com</u></h3>
    </div>`,
			`Shembuj Zerash`,
			`Mashkull`,
			`Femer`,
			`<div class="fields">
      <h2 align="middle">Rreth Nesh</h2>
        <h3 align="middle">Albania Voice Recoring eshte ketu per tju ndihmuar me te gjithe sherbimet e zerave pavaresisht nese jeni biznes i madh apo i vogel.</h3>
        <h3 align="middle">Ekipi yne profesional eshte i gatshem tju ndihmoje me cdo lloj zeri dhe te keni mundesine per ta bere ate sic duhet.</h3>
        <h3 align="middle">Hidhni nje veshtrim ne te gjitha sherbimet qe ofrojme, nga mesazhet e marketingut deri ne cdo lloj rrefimi, ne jemi ketu per ju.</h3>
<div class="details">
<div class="col-md-6">
  <h4>Rrefimet</h4>
   <ul>
    <li>Libra Audio</li>
    <li>Manuale Audio</li>
    <li>eLearning</li>
    <li>Demonstrim i Produktit</li>
    <li>Tutoriale Software</li>
    <li>Video Youtube</li>
    <li>Prezantime PowerPoint</li>
    <li>Video Edukative</li>
    <li>Njoftime per Sherbime Publike</li>
    <li>Programe Web/Smartphone</li>
  </ul>
</div>
<div class="col-md-6">
  <h4>Zera per Sherbime Telefonike</h4>
  <ul>
    <li>Menu Interaktive Zeri</li>
    <li>Asistime Zerash</li>
    <li>Mesazhe Audio</li>
    <li>Mesazhe Automatike</li>
    <li>Mesazhe Njoftimi</li>
    <li>Pyetesor Telefonik</li>
    <li>Mesazhe Marketingu</li>
    <li>Pershendetje Telefonike</li>
    <li>Mesazhe On-Hold</li>
    <li>Recepsionist Dixhital</li>
</ul>
</div>
</div>
<div class="details">
<div class="col-md-6">
  <h4>Reklamat</h4>
   <ul>
    <li>Reklama per Radio</li>
    <li>Reklama Satelitore</li>
    <li>Reklama Interneti</li>
    <li>Reklama per TV</li>
    <li>Informacione</li>
    <li>Sherbim Publik TV</li>
    <li>Sherbim Publik Radio</li>
    <li>Video Interneti</li>
  </ul>
</div>
<div class="col-md-6">
  <h4>Sherbime te tjera</h4>
   <ul>
    <li>Audio Dizajn</li>
    <li>Efekte Zeri</li>
    <li>Sinkronizim Zeri</li>
    <li>Perkthime dhe redaktime (Shqip, Anglisht)</li>
    <li>Miksime dhe Masterizime</li>
    <li>Regjistrime videosh Full HD</li>
    <li>Dublime Filmash dhe Dokumentare</li>
  </ul>
</div>
</div>
    </div>`
		]
	];

	$("#home").on("click", function() {
		$("#contain").html(arr[language][5]);
		lastClicked = "#home";
	});

	$("#samples").on("click", function() {
		lastClicked = "#samples";
		$("#contain").html(`<div class="fields">
      <h2 align="middle">` + arr[language][7] + `</h2>
      <div>
       <div class="col-md-6">
          <h3 align="middle">` + arr[language][8] + `</h3>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/vw2loomf/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/ke0lrmjg/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/vdnfs3pq/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/dbpz4axj/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/lmm4zprn/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/0avlql4b/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/3r4yuoyb/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/a4cb5cwd/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/epyjjdtp/widget" frameborder="0"></iframe>
        </div>
        <div class="col-md-6">
          <h3 align="middle">` + arr[language][9] + `</h3>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/yvkqwafq/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/5ydowxpg/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/jaqozvlo/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/yafixmmi/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/iixccsn4/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/5y5nmqqz/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/byyhw1ov/widget" frameborder="0"></iframe>
          <iframe class="audio" width="90%" height="265" src="https://clyp.it/kqxe12nt/widget" frameborder="0"></iframe>
        </div>
      </div>
    </div>`);
	});

	$("#contact").on("click", function() {
		$("#contain").html(arr[language][6]);
		lastClicked = "#contact";
	});

	$("#about").on("click", function() {
		$("#contain").html(arr[language][10]);
		lastClicked = "#about";
	});

	$("#language").on("click", function() {
		if (language == 0) {

			$("#home").html(arr[1][0]);
			$("#samples").html(arr[1][1]);
			$("#contact").html(arr[1][2]);
			$("#about").html(arr[1][3]);
			$("#language").html(arr[1][4]);

			language = 1;

		} else {

			$("#home").html(arr[0][0]);
			$("#samples").html(arr[0][1]);
			$("#contact").html(arr[0][2]);
			$("#about").html(arr[0][3]);
			$("#language").html(arr[0][4]);

			language = 0;

		}

		$(lastClicked).trigger("click");

	});
});
