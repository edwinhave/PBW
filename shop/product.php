<?php

class Product{
   private $name; //acces modifier

   private $price;
   private $image;
   private $orderCount = 0;
   public function __construct($name,$price,$image){
      $this -> name = $name;
      $this -> price = $price;
      $this -> image = $image;
   }
   public function hello(){
      echo"Nama Produk : $this->name";
   }

	public function getName() {
		return $this->name;
	}

	public function setName($name): self {
		$this->name = $name;
		return $this;
	}

	public function getPrice() {
		return $this->price;
	}

	public function setPrice($price): self {
		$this->price = $price;
		return $this;
	}

	public function getImage() {
		return $this->image;
	}

	public function setImage($image): self {
		$this->image = $image;
		return $this;
	}


	public function getOrderCount() {
		return $this->orderCount;
	}

	public function setOrderCount($orderCount): self {
		$this->orderCount = $orderCount;
		return $this;
	}
    public function getPriceVAT() {
        return round($this->price * 1.1, 2);
        }
}