<?php require_once("data.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <style>
      .card>img {
         object-fit: cover;
         object-position: center;
         height: 240px;
      }
   </style>
    <title>Document</title>
</head>
<body>
   <div class="container mt-5">
   <h1>BT Peripherals</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-5">
         <?php foreach ($products as $product) : ?>
         <div class="col mb-3">
            <div class="card">
               <img src="<?= $product->getImage() ?>" class="card-img-top img-fluid">
                  <div class="card-body">
                     <h5 class="card-title"><?= $product->getName() ?></h5>
                     <h6 class="card-subtitle text-muted price"><?= $product->getPriceVAT() ?></h6>
                  </div>
                  <div class="card-footer">
                     Quantity <span class="badge bg-primary"><?= $product->getOrderCount() ?></span>
                  </div>
               </div>
         </div>
      <?php endforeach ?>
   </div>
</div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    <script>
      const formatter = new Intl.NumberFormat('en-US', {
         style: 'currency',
         currency: 'IDR'
      });
      const elements = document.querySelectorAll('.price');
      [...elements].forEach((element) => {
         element.innerHTML = formatter.format(element.innerHTML);
      });
    </script>
   </body>
</html>