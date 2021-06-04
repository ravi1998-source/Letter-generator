
module.exports = ({ name, para1,para2}) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="style.css"> -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <title>Document</title>
</head>

<style>

    header > img {
        width: 100%;
        height: 10rem;
    }

    header {
      position: fixed;
      top:0;
    }

    footer {
    position:fixed;
      bottom:-1;
      width:100%;
    }

    footer > img {
        width: 100%;
        height: 10rem;
        /* height: 10rem; */
    }

    .content{
    text-align:left;
    margin : 10em ;
   
    font-size: 20px;
     
}

  .content > img {
      height: 100px;
      width: 100px;
  }
 .margin {
    margin-top: 10rem;
 }
  

</style>

<body>
    <header>
    <img src="https://raw.githubusercontent.com/ravi1998-source/Dosage-calculator/main/header.jpg"  id="header"/>
    </header>
    <div class="content">
      <p>${para}</p>
      <p>Regards,</p>
      <img src="https://raw.githubusercontent.com/ravi1998-source/Dosage-calculator/main/1024px-Chris_Hemsworth_Signature.png" alt="Image" />
    </div>
    <div class="margin">
    </div>
    <footer>
    <img src="https://raw.githubusercontent.com/ravi1998-source/Dosage-calculator/main/footer.jpg"  id="header"/> 
    </footer>
        

</body>
</html>
    `;
};


// .footer {
//     position: fixed
//     bottom: 0;
//     width: 100%;
// font-family: 'Nunito Sans', sans-serif;
// }
