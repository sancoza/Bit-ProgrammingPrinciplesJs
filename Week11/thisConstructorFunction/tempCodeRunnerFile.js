function  automobil (marka,model,upaljen,snaga,boja) {
  this.marka = marka;
  this.model = model;
  this.upaljen = upaljen;
  this.snaga = snaga;
  this.boja = boja;
  this.upali= function() {
    this.upaljen = true;
  };
   this.ugasen = function() {
    this.ugasen = false;  
  };
  this.prefarbaj= function(novaBoja) {
    this.boja = novaBoja;
  }
}
 
automobil.upali();