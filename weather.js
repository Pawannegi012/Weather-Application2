var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime; //it will print on html page



function Operation() {
    var q = document.getElementById("enter").value;
    
    switch(q){
        case "Andhra Pradesh","ANDHRA PRADESH","andhra pradesh":
            document.getElementById("city1").innerHTML="Andhra Pradesh"
            document.getElementById("img1").src="./images/partly_cloudy.webp";
            document.getElementById("temp1").innerHTML="26"+"&deg;C";
            document.getElementById("type1").innerHTML="Weather";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="91%";
            document.getElementById("c1").innerHTML="Vijayawada";
            document.getElementById("c2").innerHTML="Tirupati";
            document.getElementById("din").innerHTML="31/24"+"&deg;C";
            document.getElementById("raat").innerHTML="28/23"+"&deg;C";
        break;  
        case 'Arunachal Pradesh','ARUNACHAL PRADESH','arunachal pradesh':
            document.getElementById("city1").innerHTML="Arunachal Pradesh"
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="29"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="85%";
            document.getElementById("c1").innerHTML="khonsa";
            document.getElementById("c2").innerHTML="Tezu";
            document.getElementById("din").innerHTML="26/17"+"&deg;C";
            document.getElementById("raat").innerHTML="29/18"+"&deg;C";
        break;
        case 'Assam','ASSAM','assam':
            document.getElementById("city1").innerHTML="Assam"
            document.getElementById("img1").src="./images/lightfog.png";
            document.getElementById("temp1").innerHTML="22"+"&deg;C";
            document.getElementById("type1").innerHTML="Light fog";

            document.getElementById("wind1").innerHTML="2km/h";
            document.getElementById("humi1").innerHTML="92%";
            document.getElementById("c1").innerHTML="Guwahati";
            document.getElementById("c2").innerHTML="Dibrugarh";
            document.getElementById("din").innerHTML="30/19"+"&deg;C";
            document.getElementById("raat").innerHTML="29/22"+"&deg;C";
        break;
        case 'Bihar','BIHAR','bihar':
            document.getElementById("city1").innerHTML="Bihar"
            document.getElementById("img1").src="./images/fog.png" ;
            document.getElementById("temp1").innerHTML="33"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="19km/h";
            document.getElementById("humi1").innerHTML="22%"
            document.getElementById("c1").innerHTML="Patna";
            document.getElementById("c2").innerHTML="Munger";
            document.getElementById("din").innerHTML="31/23"+"&deg;C";
            document.getElementById("raat").innerHTML="31/19"+"&deg;C";
        break;
        case 'Chhattisgarh','CHHATTISGARH','chhattisgarh':
            document.getElementById("city1").innerHTML="Chhattigarh"
            document.getElementById("img1").src="./images/partly_cloudy.webp"
            document.getElementById("temp1").innerHTML="20"+"&deg;C";
            document.getElementById("type1").innerHTML="Partly Cloudly";

            document.getElementById("wind1").innerHTML="5km/h";
            document.getElementById("humi1").innerHTML="71%";
            document.getElementById("c1").innerHTML="Raipur";
            document.getElementById("c2").innerHTML="Bilaspur";
            document.getElementById("din").innerHTML="32/18"+"&deg;C";
            document.getElementById("raat").innerHTML="32/18"+"&deg;C";
        break;
        case 'Goa','GOA','goa':
            document.getElementById("city1").innerHTML="Goa"
            document.getElementById("img1").src="./images/mostlycloudly.png";
            document.getElementById("temp1").innerHTML="27"+"&deg;C";
            document.getElementById("type1").innerHTML="Mostly Cloudy";

            document.getElementById("wind1").innerHTML="11km/h";
            document.getElementById("humi1").innerHTML="85%";
            document.getElementById("c1").innerHTML="Panaji";
            document.getElementById("c2").innerHTML="Old Goa";
            document.getElementById("din").innerHTML="31/26"+"&deg;C";
            document.getElementById("raat").innerHTML="31/24"+"&deg;C";
        break;

        case 'Gujrat','GUJRAT','gujrat':
            document.getElementById("city1").innerHTML="Gujrat"
            document.getElementById("img1").src="./images/haze.png";
            document.getElementById("temp1").innerHTML="21"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="66%";
            document.getElementById("c1").innerHTML="Ahmdabad";
            document.getElementById("c2").innerHTML="Surat";
            document.getElementById("din").innerHTML="36/21"+"&deg;C";
            document.getElementById("raat").innerHTML="36/24"+"&deg;C";
        break;  
        case 'Haryana','HARYANA','haryana':
            document.getElementById("city1").innerHTML="Haryana"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="19"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="2km/h";
            document.getElementById("humi1").innerHTML="74%";
            document.getElementById("c1").innerHTML="Gurgaon";
            document.getElementById("c2").innerHTML="Panipat";
            document.getElementById("din").innerHTML="31/28"+"&deg;C";
            document.getElementById("raat").innerHTML="30/17"+"&deg;C";
        break;
        case 'Himachal Pradesh','HIMACHAL PRADESH','himachal pradesh':
            document.getElementById("city1").innerHTML="Himachal Pradesh"
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="6"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="68%";
            document.getElementById("c1").innerHTML="Shimla";
            document.getElementById("c2").innerHTML="Manali";
            document.getElementById("din").innerHTML="14/3"+"&deg;C";
            document.getElementById("raat").innerHTML="15/7"+"&deg;C";
        break;
        case 'Jharkhand','JHARKHAND','jharkhand':
            document.getElementById("city1").innerHTML="Jharkhand"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="18"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="72%";
            document.getElementById("c1").innerHTML="Ranchi";
            document.getElementById("c2").innerHTML="Ramgarh";
            document.getElementById("din").innerHTML="28/16"+"&deg;C";
            document.getElementById("raat").innerHTML="29/16"+"&deg;C";
        break;
        case 'Karnataka','KARNATAKA','karnataka':
            document.getElementById("city1").innerHTML="Karnataka"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="22"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="92%";
            document.getElementById("c1").innerHTML="Bangalore";
            document.getElementById("c2").innerHTML="Mysuru";
            document.getElementById("din").innerHTML="26/20"+"&deg;C";
            document.getElementById("raat").innerHTML="28/21"+"&deg;C";
        break;
        case 'Kerela','KERELA','kerela':
            document.getElementById("city1").innerHTML="Kerela";
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="27"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="84%";
            document.getElementById("c1").innerHTML="Kozhikode";
            document.getElementById("c2").innerHTML="Kochi";
            document.getElementById("din").innerHTML="29/24"+"&deg;C";
            document.getElementById("raat").innerHTML="30/24"+"&deg;C";
        break;
        case 'Madhya Pradesh','MADHYA PRADESH','madhya pradesh':
            document.getElementById("city1").innerHTML="Madhya Pradesh";
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="19"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="55%";
            document.getElementById("c1").innerHTML="Bhopal";
            document.getElementById("c2").innerHTML="Indore";
            document.getElementById("din").innerHTML="32/19"+"&deg;C";
            document.getElementById("raat").innerHTML="29/22"+"&deg;C";
        break;
        case 'Maharashtra','MAHARASHTRA','maharashtra':
            document.getElementById("city1").innerHTML="Maharashtra"
            document.getElementById("img1").src="./images/haze.png";
            document.getElementById("temp1").innerHTML="28"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="0km/h";
            document.getElementById("humi1").innerHTML="60%";
            document.getElementById("c1").innerHTML="Mumbai";
            document.getElementById("c2").innerHTML="Pune";
            document.getElementById("din").innerHTML="34/27"+"&deg;C";
            document.getElementById("raat").innerHTML="32/22"+"&deg;C";
        break;
        case 'Manipur','MANIPUR','manipur':
            document.getElementById("city1").innerHTML="Manipur"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="19"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="5km/h";
            document.getElementById("humi1").innerHTML="79%";
            document.getElementById("c1").innerHTML="Imphal";
            document.getElementById("c2").innerHTML="Thoubal";
            document.getElementById("din").innerHTML="27/13"+"&deg;C";
            document.getElementById("raat").innerHTML="27/14"+"&deg;C";
        break;  
        case 'Meghalaya','MEGHALAYA','meghalaya':
            document.getElementById("city1").innerHTML="Meghalaya"
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="17"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="67%";
            document.getElementById("c1").innerHTML="Shillong";
            document.getElementById("c2").innerHTML="Dawki";
            document.getElementById("din").innerHTML="21/11"+"&deg;C";
            document.getElementById("raat").innerHTML="30/20"+"&deg;C";
        break;
        case 'Mizoram','MIZORAM','mizoram':
            document.getElementById("city1").innerHTML="Mizoram"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="20"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="76%";
            document.getElementById("c1").innerHTML="Aizawl";
            document.getElementById("c2").innerHTML="Saiha";
            document.getElementById("din").innerHTML="25/10"+"&deg;C";
            document.getElementById("raat").innerHTML="22/9"+"&deg;C";
        break;
        case 'Nagaland','NAGALAND','nagaland':
            document.getElementById("city1").innerHTML="Nagaland"
            document.getElementById("img1").src="./images/sun.webp" ;
            document.getElementById("temp1").innerHTML="18"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="69%"
            document.getElementById("c1").innerHTML="Kohima";
            document.getElementById("c2").innerHTML="Wokha";
            document.getElementById("din").innerHTML="19/9"+"&deg;C";
            document.getElementById("raat").innerHTML="20/10"+"&deg;C";
        break;
        case 'Odisha','ODISHA','odisha':
            document.getElementById("city1").innerHTML="Odisha"
            document.getElementById("img1").src="./images/fog.png"
            document.getElementById("temp1").innerHTML="26"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="84%";
            document.getElementById("c1").innerHTML="Bhadrak";
            document.getElementById("c2").innerHTML="Bhubaneswar";
            document.getElementById("din").innerHTML="32/19"+"&deg;C";
            document.getElementById("raat").innerHTML="32/19"+"&deg;C";
        break;
        case 'Punjab','PUNJAB','punjab':
            document.getElementById("city1").innerHTML="Punjab"
            document.getElementById("img1").src="./images/partly_cloudy.webp";
            document.getElementById("temp1").innerHTML="18"+"&deg;C";
            document.getElementById("type1").innerHTML="Partly Cloudy";

            document.getElementById("wind1").innerHTML="5km/h";
            document.getElementById("humi1").innerHTML="82%";
            document.getElementById("c1").innerHTML="Ludhiana";
            document.getElementById("c2").innerHTML="Amritsar";
            document.getElementById("din").innerHTML="30/17"+"&deg;C";
            document.getElementById("raat").innerHTML="29/17"+"&deg;C";
        break;

        case 'Rajasthan','RAJASTHAN','rajasthan':
            document.getElementById("city1").innerHTML="Rajasthan"
            document.getElementById("img1").src="./images/smoke.png";
            document.getElementById("temp1").innerHTML="24"+"&deg;C";
            document.getElementById("type1").innerHTML="Smoke";

            document.getElementById("wind1").innerHTML="10km/h";
            document.getElementById("humi1").innerHTML="55%";
            document.getElementById("c1").innerHTML="Jaipur";
            document.getElementById("c2").innerHTML="Udaipur";
            document.getElementById("din").innerHTML="32/20"+"&deg;C";
            document.getElementById("raat").innerHTML="32/19"+"&deg;C";
        break;  
        case 'Sikkim','SIKKIM','sikkim':
            document.getElementById("city1").innerHTML="Sikkim"
            document.getElementById("img1").src="../images/mostly sunny.webp";
            document.getElementById("temp1").innerHTML="15"+"&deg;C";
            document.getElementById("type1").innerHTML="Mostly Sunny";

            document.getElementById("wind1").innerHTML="0km/h";
            document.getElementById("humi1").innerHTML="74%";
            document.getElementById("c1").innerHTML="Gangtok";
            document.getElementById("c2").innerHTML="Namchi";
            document.getElementById("din").innerHTML="17/9"+"&deg;C";
            document.getElementById("raat").innerHTML="22/12"+"&deg;C";
        break;
        case 'Tamil Nadu','TAMIL NADU','tamil nadu':
            document.getElementById("city1").innerHTML="Tamil Nadu"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="28"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="6km/h";
            document.getElementById("humi1").innerHTML="88%";
            document.getElementById("c1").innerHTML="Chennai";
            document.getElementById("c2").innerHTML="Vellore";
            document.getElementById("din").innerHTML="28/26"+"&deg;C";
            document.getElementById("raat").innerHTML="29/24"+"&deg;C";
        break;
        case 'Telangana','TELANGANA','telangana':
            document.getElementById("city1").innerHTML="Telangana"
            document.getElementById("img1").src="./images/haze.png";
            document.getElementById("temp1").innerHTML="26"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="19km/h";
            document.getElementById("humi1").innerHTML="22%";
            document.getElementById("c1").innerHTML="Hyderabad";
            document.getElementById("c2").innerHTML="Khammam";
            document.getElementById("din").innerHTML="31/23"+"&deg;C";
            document.getElementById("raat").innerHTML="29/22"+"&deg;C";
        break;
        case 'Tripura','TRIPURA','tripura':
            document.getElementById("city1").innerHTML="Tripura"
            document.getElementById("img1").src="./images/haze.png";
            document.getElementById("temp1").innerHTML="24"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="82%";
            document.getElementById("c1").innerHTML="Agartala";
            document.getElementById("c2").innerHTML="Udaipur";
            document.getElementById("din").innerHTML="30/19"+"&deg;C";
            document.getElementById("raat").innerHTML="32/19"+"&deg;C";
        break;
        case 'Uttrakhand','UTTRAKHAND','uttrakhand':
            document.getElementById("city1").innerHTML="Uttrakhand";
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="10"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="67%";
            document.getElementById("c1").innerHTML="Bageshwar";
            document.getElementById("c2").innerHTML="Nainital";
            document.getElementById("din").innerHTML="26/12"+"&deg;C";
            document.getElementById("raat").innerHTML="17/7"+"&deg;C";
        break;
        case 'Uttar Pradesh','UTTAR PRADESH','uttar pradesh':
            document.getElementById("city1").innerHTML="Uttar Pradesh";
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="21"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="0km/h";
            document.getElementById("humi1").innerHTML="85%";
            document.getElementById("c1").innerHTML="Lucknow";
            document.getElementById("c2").innerHTML="Kanpur";
            document.getElementById("din").innerHTML="31/17"+"&deg;C";
            document.getElementById("raat").innerHTML="32/18"+"&deg;C";
        break;
        case 'West Bengal','WEST BENGAL','west bengal':
            document.getElementById("city1").innerHTML="West Bengal"
            document.getElementById("img1").src="../Images/haze.png";
            document.getElementById("temp1").innerHTML="27"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="74%";
            document.getElementById("c1").innerHTML="Kolkata";
            document.getElementById("c2").innerHTML="Darjeeling";
            document.getElementById("din").innerHTML="31/20"+"&deg;C";
            document.getElementById("raat").innerHTML="17/9"+"&deg;C";
        break;

        case 'Vijayawada','Tirupati':
            document.getElementById("city1").innerHTML="Andhra Pradesh"
            document.getElementById("img1").src="./images/partly_cloudy.webp";
            document.getElementById("temp1").innerHTML="31"+"&deg;C";
            document.getElementById("type1").innerHTML="Weather";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="91%";
            document.getElementById("c1").innerHTML="Vijayawada";
            document.getElementById("c2").innerHTML="Tirupati";
            document.getElementById("din").innerHTML="31/24"+"&deg;C";
            document.getElementById("raat").innerHTML="28/23"+"&deg;C";
        break;  
        case 'Khonsa','Tezu':
            document.getElementById("city1").innerHTML="Arunachal Pradesh"
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="26"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="85%";
            document.getElementById("c1").innerHTML="khonsa";
            document.getElementById("c2").innerHTML="Tezu";
            document.getElementById("din").innerHTML="26/17"+"&deg;C";
            document.getElementById("raat").innerHTML="29/18"+"&deg;C";
        break;
        case 'Guwahati','Dibrugarh':
            document.getElementById("city1").innerHTML="Assam"
            document.getElementById("img1").src="./images/lightfog.png";
            document.getElementById("temp1").innerHTML="30"+"&deg;C";
            document.getElementById("type1").innerHTML="Light fog";

            document.getElementById("wind1").innerHTML="2km/h";
            document.getElementById("humi1").innerHTML="92%";
            document.getElementById("c1").innerHTML="Guwahati";
            document.getElementById("c2").innerHTML="Dibrugarh";
            document.getElementById("din").innerHTML="30/19"+"&deg;C";
            document.getElementById("raat").innerHTML="29/22"+"&deg;C";
        break;
        case 'Patna','Munger':
            document.getElementById("city1").innerHTML="Bihar"
            document.getElementById("img1").src="./images/fog.png" ;
            document.getElementById("temp1").innerHTML="31"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="19km/h";
            document.getElementById("humi1").innerHTML="22%"
            document.getElementById("c1").innerHTML="Patna";
            document.getElementById("c2").innerHTML="Munger";
            document.getElementById("din").innerHTML="31/23"+"&deg;C";
            document.getElementById("raat").innerHTML="31/19"+"&deg;C";
        break;
        case 'Raipur','Bilaspur':
            document.getElementById("city1").innerHTML="Chhattigarh"
            document.getElementById("img1").src="./images/partly_cloudy.webp"
            document.getElementById("temp1").innerHTML="32"+"&deg;C";
            document.getElementById("type1").innerHTML="Partly Cloudly";

            document.getElementById("wind1").innerHTML="5km/h";
            document.getElementById("humi1").innerHTML="71%";
            document.getElementById("c1").innerHTML="Raipur";
            document.getElementById("c2").innerHTML="Bilaspur";
            document.getElementById("din").innerHTML="32/18"+"&deg;C";
            document.getElementById("raat").innerHTML="32/18"+"&deg;C";
        break;
        case 'Panaji','Old Goa':
            document.getElementById("city1").innerHTML="Goa"
            document.getElementById("img1").src="./images/mostlycloudly.png";
            document.getElementById("temp1").innerHTML="27"+"&deg;C";
            document.getElementById("type1").innerHTML="Mostly Cloudy";

            document.getElementById("wind1").innerHTML="11km/h";
            document.getElementById("humi1").innerHTML="85%";
            document.getElementById("c1").innerHTML="Panaji";
            document.getElementById("c2").innerHTML="Old Goa";
            document.getElementById("din").innerHTML="31/26"+"&deg;C";
            document.getElementById("raat").innerHTML="31/24"+"&deg;C";
        break;

        case 'Ahmdabad','Surat':
            document.getElementById("city1").innerHTML="Gujrat"
            document.getElementById("img1").src="./images/haze.png";
            document.getElementById("temp1").innerHTML="21"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="66%";
            document.getElementById("c1").innerHTML="Ahmdabad";
            document.getElementById("c2").innerHTML="Surat";
            document.getElementById("din").innerHTML="36/21"+"&deg;C";
            document.getElementById("raat").innerHTML="36/24"+"&deg;C";
        break;  
        case 'Gurgaon','Panipat':
            document.getElementById("city1").innerHTML="Haryana"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="19"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="2km/h";
            document.getElementById("humi1").innerHTML="74%";
            document.getElementById("c1").innerHTML="Gurgaon";
            document.getElementById("c2").innerHTML="Panipat";
            document.getElementById("din").innerHTML="31/28"+"&deg;C";
            document.getElementById("raat").innerHTML="30/17"+"&deg;C";
        break;
        case 'Shimla','Manali':
            document.getElementById("city1").innerHTML="Himachal Pradesh"
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="6"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="68%";
            document.getElementById("c1").innerHTML="Shimla";
            document.getElementById("c2").innerHTML="Manali";
            document.getElementById("din").innerHTML="14/3"+"&deg;C";
            document.getElementById("raat").innerHTML="15/7"+"&deg;C";
        break;
        case 'Ranchi','Ramgarh':
            document.getElementById("city1").innerHTML="Jharkhand"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="18"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="72%";
            document.getElementById("c1").innerHTML="Ranchi";
            document.getElementById("c2").innerHTML="Ramgarh";
            document.getElementById("din").innerHTML="28/16"+"&deg;C";
            document.getElementById("raat").innerHTML="29/16"+"&deg;C";
        break;
        case 'Bangalore','Mysuru':
            document.getElementById("city1").innerHTML="Karnataka"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="22"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="92%";
            document.getElementById("c1").innerHTML="Bangalore";
            document.getElementById("c2").innerHTML="Mysuru";
            document.getElementById("din").innerHTML="26/20"+"&deg;C";
            document.getElementById("raat").innerHTML="28/21"+"&deg;C";
        break;
        case 'Kozhikode','Kochi':
            document.getElementById("city1").innerHTML="Kerela";
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="27"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="84%";
            document.getElementById("c1").innerHTML="Kozhikode";
            document.getElementById("c2").innerHTML="Kochi";
            document.getElementById("din").innerHTML="29/24"+"&deg;C";
            document.getElementById("raat").innerHTML="30/24"+"&deg;C";
        break;
        case 'Bhopal','Indore':
            document.getElementById("city1").innerHTML="Madhya Pradesh";
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="19"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="55%";
            document.getElementById("c1").innerHTML="Bhopal";
            document.getElementById("c2").innerHTML="Indore";
            document.getElementById("din").innerHTML="32/19"+"&deg;C";
            document.getElementById("raat").innerHTML="29/22"+"&deg;C";
        break;
        case 'Mumbai','Pune':
            document.getElementById("city1").innerHTML="Maharashtra"
            document.getElementById("img1").src="./images/haze.png";
            document.getElementById("temp1").innerHTML="28"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="0km/h";
            document.getElementById("humi1").innerHTML="60%";
            document.getElementById("c1").innerHTML="Mumbai";
            document.getElementById("c2").innerHTML="Pune";
            document.getElementById("din").innerHTML="34/27"+"&deg;C";
            document.getElementById("raat").innerHTML="32/22"+"&deg;C";
        break;
        case 'Imphal','Thoubal':
            document.getElementById("city1").innerHTML="Manipur"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="19"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="5km/h";
            document.getElementById("humi1").innerHTML="79%";
            document.getElementById("c1").innerHTML="Imphal";
            document.getElementById("c2").innerHTML="Thoubal";
            document.getElementById("din").innerHTML="27/13"+"&deg;C";
            document.getElementById("raat").innerHTML="27/14"+"&deg;C";
        break;  
        case 'Shillong','Dawki':
            document.getElementById("city1").innerHTML="Meghalaya"
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="17"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="67%";
            document.getElementById("c1").innerHTML="Shillong";
            document.getElementById("c2").innerHTML="Dawki";
            document.getElementById("din").innerHTML="21/11"+"&deg;C";
            document.getElementById("raat").innerHTML="30/20"+"&deg;C";
        break;
        case 'Aizawl','Saiha':
            document.getElementById("city1").innerHTML="Mizoram"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="20"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="76%";
            document.getElementById("c1").innerHTML="Aizawl";
            document.getElementById("c2").innerHTML="Saiha";
            document.getElementById("din").innerHTML="25/10"+"&deg;C";
            document.getElementById("raat").innerHTML="22/9"+"&deg;C";
        break;
        case 'Kohima','Wokha':
            document.getElementById("city1").innerHTML="Nagaland"
            document.getElementById("img1").src="./images/sun.webp" ;
            document.getElementById("temp1").innerHTML="18"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="69%"
            document.getElementById("c1").innerHTML="Kohima";
            document.getElementById("c2").innerHTML="Wokha";
            document.getElementById("din").innerHTML="19/9"+"&deg;C";
            document.getElementById("raat").innerHTML="20/10"+"&deg;C";
        break;
        case 'Bhadrak','Bhubaneswar':
            document.getElementById("city1").innerHTML="Odisha"
            document.getElementById("img1").src="./images/fog.png"
            document.getElementById("temp1").innerHTML="26"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="84%";
            document.getElementById("c1").innerHTML="Bhadrak";
            document.getElementById("c2").innerHTML="Bhubaneswar";
            document.getElementById("din").innerHTML="32/19"+"&deg;C";
            document.getElementById("raat").innerHTML="32/19"+"&deg;C";
        break;
        case 'Ludhiana','Amritsar':
            document.getElementById("city1").innerHTML="Punjab"
            document.getElementById("img1").src="./images/partly_cloudy.webp";
            document.getElementById("temp1").innerHTML="18"+"&deg;C";
            document.getElementById("type1").innerHTML="Partly Cloudy";

            document.getElementById("wind1").innerHTML="5km/h";
            document.getElementById("humi1").innerHTML="82%";
            document.getElementById("c1").innerHTML="Ludhiana";
            document.getElementById("c2").innerHTML="Amritsar";
            document.getElementById("din").innerHTML="30/17"+"&deg;C";
            document.getElementById("raat").innerHTML="29/17"+"&deg;C";
        break;

        case 'Jaipur','Udaipur':
            document.getElementById("city1").innerHTML="Rajasthan"
            document.getElementById("img1").src="./images/smoke.png";
            document.getElementById("temp1").innerHTML="24"+"&deg;C";
            document.getElementById("type1").innerHTML="Smoke";

            document.getElementById("wind1").innerHTML="10km/h";
            document.getElementById("humi1").innerHTML="55%";
            document.getElementById("c1").innerHTML="Jaipur";
            document.getElementById("c2").innerHTML="Udaipur";
            document.getElementById("din").innerHTML="32/20"+"&deg;C";
            document.getElementById("raat").innerHTML="32/19"+"&deg;C";
        break;  
        case 'Gangtok','Namchi':
            document.getElementById("city1").innerHTML="Sikkim"
            document.getElementById("img1").src="../images/mostly sunny.webp";
            document.getElementById("temp1").innerHTML="15"+"&deg;C";
            document.getElementById("type1").innerHTML="Mostly Sunny";

            document.getElementById("wind1").innerHTML="0km/h";
            document.getElementById("humi1").innerHTML="74%";
            document.getElementById("c1").innerHTML="Gangtok";
            document.getElementById("c2").innerHTML="Namchi";
            document.getElementById("din").innerHTML="17/9"+"&deg;C";
            document.getElementById("raat").innerHTML="22/12"+"&deg;C";
        break;
        case 'Chennai','Vellore':
            document.getElementById("city1").innerHTML="Tamil Nadu"
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="28"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="6km/h";
            document.getElementById("humi1").innerHTML="88%";
            document.getElementById("c1").innerHTML="Chennai";
            document.getElementById("c2").innerHTML="Vellore";
            document.getElementById("din").innerHTML="28/26"+"&deg;C";
            document.getElementById("raat").innerHTML="29/24"+"&deg;C";
        break;
        case 'Hyderabad','Khammam':
            document.getElementById("city1").innerHTML="Telangana"
            document.getElementById("img1").src="./images/haze.png";
            document.getElementById("temp1").innerHTML="26"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="19km/h";
            document.getElementById("humi1").innerHTML="22%";
            document.getElementById("c1").innerHTML="Hyderabad";
            document.getElementById("c2").innerHTML="Khammam";
            document.getElementById("din").innerHTML="31/23"+"&deg;C";
            document.getElementById("raat").innerHTML="29/22"+"&deg;C";
        break;
        case 'Agartala','Udaipur':
            document.getElementById("city1").innerHTML="Tripura"
            document.getElementById("img1").src="./images/haze.png";
            document.getElementById("temp1").innerHTML="24"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="82%";
            document.getElementById("c1").innerHTML="Agartala";
            document.getElementById("c2").innerHTML="Udaipur";
            document.getElementById("din").innerHTML="30/19"+"&deg;C";
            document.getElementById("raat").innerHTML="32/19"+"&deg;C";
        break;
        case 'Bageshwar','Nainital':
            document.getElementById("city1").innerHTML="Uttrakhand";
            document.getElementById("img1").src="./images/sun.webp";
            document.getElementById("temp1").innerHTML="10"+"&deg;C";
            document.getElementById("type1").innerHTML="Sunny";

            document.getElementById("wind1").innerHTML="3km/h";
            document.getElementById("humi1").innerHTML="67%";
            document.getElementById("c1").innerHTML="Bageshwar";
            document.getElementById("c2").innerHTML="Nainital";
            document.getElementById("din").innerHTML="26/12"+"&deg;C";
            document.getElementById("raat").innerHTML="17/7"+"&deg;C";
        break;
        case 'Lucknow','Kanpur':
            document.getElementById("city1").innerHTML="Uttar Pradesh";
            document.getElementById("img1").src="./images/fog.png";
            document.getElementById("temp1").innerHTML="21"+"&deg;C";
            document.getElementById("type1").innerHTML="Fog";

            document.getElementById("wind1").innerHTML="0km/h";
            document.getElementById("humi1").innerHTML="85%";
            document.getElementById("c1").innerHTML="Lucknow";
            document.getElementById("c2").innerHTML="Kanpur";
            document.getElementById("din").innerHTML="31/17"+"&deg;C";
            document.getElementById("raat").innerHTML="32/18"+"&deg;C";
        break;
        case 'Kolkata','Darjeeling':
            document.getElementById("city1").innerHTML="West Bengal"
            document.getElementById("img1").src="../Images/haze.png";
            document.getElementById("temp1").innerHTML="27"+"&deg;C";
            document.getElementById("type1").innerHTML="Haze";

            document.getElementById("wind1").innerHTML="8km/h";
            document.getElementById("humi1").innerHTML="74%";
            document.getElementById("c1").innerHTML="Kolkata";
            document.getElementById("c2").innerHTML="Darjeeling";
            document.getElementById("din").innerHTML="31/20"+"&deg;C";
            document.getElementById("raat").innerHTML="17/9"+"&deg;C";
        break;
        default:
            document.getElementById("city1").innerHTML="Error"
            document.getElementById("img1").src="./images/missing.png", height="150px";        }

    }