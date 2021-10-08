function AppViewModel() {
  var self = this;
  self.selectedProductDetails = ko.observable([]);
  self.hasBeenSubmitted = ko.observable(false);
  self.priceLowBound = ko.observable(0);
  self.priceHighBound = ko.observable(100000);
  self.sortMethod = ko.observable("asc");

  self.selectPhone = function (data) {
    self.selectedProductDetails([{ ...data }]);
    self.hasBeenSubmitted(true);
  };

  self.goBack = function () {
    self.hasBeenSubmitted(false);
  };

  self.filterPrice = function () {
    var priceDOM = document.getElementById("priceDropDown");
    var price = priceDOM.value.split("-");
    self.priceLowBound(price[0]);
    self.priceHighBound(price[1]);
  };

  self.sortWithPrice = function () {
    var sortDOM = document.getElementById("sortDropDown");
    self.sortMethod(sortDOM.value);
  };

  self.masterProducts = ko.observable([
    {
      mobileName: "Greenlam",
      price: 49096,
      sku: 1,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotlux",
      price: 28239,
      sku: 2,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP: "https://m.media-amazon.com/images/I/61MJilnI5pL._SL1500_.jpg",
    },
    {
      mobileName: "Vagram",
      price: 50091,
      sku: 3,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stringtough",
      price: 18180,
      sku: 4,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Bytecard",
      price: 53284,
      sku: 5,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 62532,
      sku: 6,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sub-Ex",
      price: 67852,
      sku: 7,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 17811,
      sku: 8,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Cardify",
      price: 59245,
      sku: 9,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Quo Lux",
      price: 27795,
      sku: 10,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zamit",
      price: 51399,
      sku: 11,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zathin",
      price: 39025,
      sku: 12,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Regrant",
      price: 21229,
      sku: 13,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Bamity",
      price: 47134,
      sku: 14,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Gembucket",
      price: 57680,
      sku: 15,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Overhold",
      price: 24447,
      sku: 16,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Pannier",
      price: 58331,
      sku: 17,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Home Ing",
      price: 14165,
      sku: 18,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Voltsillam",
      price: 42003,
      sku: 19,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Subin",
      price: 22357,
      sku: 20,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Flowdesk",
      price: 52582,
      sku: 21,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Veribet",
      price: 26980,
      sku: 22,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Flexidy",
      price: 59721,
      sku: 23,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Quo Lux",
      price: 59974,
      sku: 24,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Job",
      price: 29066,
      sku: 25,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zontrax",
      price: 54046,
      sku: 26,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Cardify",
      price: 48143,
      sku: 27,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 54608,
      sku: 28,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zaam-Dox",
      price: 65075,
      sku: 29,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tin",
      price: 63859,
      sku: 30,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Fix San",
      price: 30670,
      sku: 31,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sonair",
      price: 69771,
      sku: 32,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Flexidy",
      price: 23325,
      sku: 33,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Voyatouch",
      price: 28892,
      sku: 34,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Overhold",
      price: 40320,
      sku: 35,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Konklux",
      price: 29385,
      sku: 36,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Duobam",
      price: 31085,
      sku: 37,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Cardify",
      price: 29639,
      sku: 38,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Voyatouch",
      price: 19555,
      sku: 39,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 20532,
      sku: 40,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Subin",
      price: 28125,
      sku: 41,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 14912,
      sku: 42,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Gembucket",
      price: 43958,
      sku: 43,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotlux",
      price: 61273,
      sku: 44,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Opela",
      price: 28591,
      sku: 45,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sonsing",
      price: 46693,
      sku: 46,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Rank",
      price: 40205,
      sku: 47,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Duobam",
      price: 36587,
      sku: 48,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Konklux",
      price: 31605,
      sku: 49,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stringtough",
      price: 48167,
      sku: 50,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sonair",
      price: 36614,
      sku: 51,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stim",
      price: 36890,
      sku: 52,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tempsoft",
      price: 24161,
      sku: 53,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Matsoft",
      price: 53329,
      sku: 54,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Y-find",
      price: 30249,
      sku: 55,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tres-Zap",
      price: 30698,
      sku: 56,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Cookley",
      price: 47861,
      sku: 57,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Domainer",
      price: 26570,
      sku: 58,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Biodex",
      price: 50085,
      sku: 59,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Flexidy",
      price: 19389,
      sku: 60,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Wrapsafe",
      price: 23373,
      sku: 61,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 18125,
      sku: 62,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Keylex",
      price: 47643,
      sku: 63,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 37851,
      sku: 64,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 23678,
      sku: 65,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zaam-Dox",
      price: 50788,
      sku: 66,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tresom",
      price: 37591,
      sku: 67,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sonsing",
      price: 11187,
      sku: 68,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Y-Solowarm",
      price: 25718,
      sku: 69,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Wrapsafe",
      price: 18695,
      sku: 70,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Viva",
      price: 49651,
      sku: 71,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tresom",
      price: 16907,
      sku: 72,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 58302,
      sku: 73,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Andalax",
      price: 12785,
      sku: 74,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Biodex",
      price: 26897,
      sku: 75,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 62020,
      sku: 76,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Regrant",
      price: 36000,
      sku: 77,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stringtough",
      price: 37086,
      sku: 78,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Trippledex",
      price: 24178,
      sku: 79,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Job",
      price: 27689,
      sku: 80,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Home Ing",
      price: 54806,
      sku: 81,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Greenlam",
      price: 49247,
      sku: 82,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tres-Zap",
      price: 53359,
      sku: 83,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tempsoft",
      price: 41197,
      sku: 84,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Konklux",
      price: 36956,
      sku: 85,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Y-find",
      price: 28678,
      sku: 86,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zontrax",
      price: 63160,
      sku: 87,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Biodex",
      price: 33288,
      sku: 88,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Y-find",
      price: 28360,
      sku: 89,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 11905,
      sku: 90,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Daltfresh",
      price: 29635,
      sku: 91,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sub-Ex",
      price: 30162,
      sku: 92,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Subin",
      price: 11641,
      sku: 93,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Bamity",
      price: 22574,
      sku: 94,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stronghold",
      price: 55110,
      sku: 95,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Bitwolf",
      price: 25491,
      sku: 96,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Otcom",
      price: 45404,
      sku: 97,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Subin",
      price: 56699,
      sku: 98,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Rank",
      price: 52911,
      sku: 99,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Matsoft",
      price: 32843,
      sku: 100,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
  ]);

  // list of available products
  self.availableProducts = ko.observableArray([
    {
      mobileName: "Greenlam",
      price: 49096,
      sku: 1,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotlux",
      price: 28239,
      sku: 2,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Vagram",
      price: 50091,
      sku: 3,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stringtough",
      price: 18180,
      sku: 4,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Bytecard",
      price: 53284,
      sku: 5,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 62532,
      sku: 6,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sub-Ex",
      price: 67852,
      sku: 7,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 17811,
      sku: 8,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Cardify",
      price: 59245,
      sku: 9,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Quo Lux",
      price: 27795,
      sku: 10,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zamit",
      price: 51399,
      sku: 11,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zathin",
      price: 39025,
      sku: 12,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Regrant",
      price: 21229,
      sku: 13,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Bamity",
      price: 47134,
      sku: 14,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Gembucket",
      price: 57680,
      sku: 15,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Overhold",
      price: 24447,
      sku: 16,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Pannier",
      price: 58331,
      sku: 17,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Home Ing",
      price: 14165,
      sku: 18,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Voltsillam",
      price: 42003,
      sku: 19,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Subin",
      price: 22357,
      sku: 20,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Flowdesk",
      price: 52582,
      sku: 21,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Veribet",
      price: 26980,
      sku: 22,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Flexidy",
      price: 59721,
      sku: 23,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Quo Lux",
      price: 59974,
      sku: 24,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Job",
      price: 29066,
      sku: 25,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zontrax",
      price: 54046,
      sku: 26,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Cardify",
      price: 48143,
      sku: 27,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 54608,
      sku: 28,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zaam-Dox",
      price: 65075,
      sku: 29,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tin",
      price: 63859,
      sku: 30,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Fix San",
      price: 30670,
      sku: 31,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sonair",
      price: 69771,
      sku: 32,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Flexidy",
      price: 23325,
      sku: 33,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Voyatouch",
      price: 28892,
      sku: 34,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Overhold",
      price: 40320,
      sku: 35,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Konklux",
      price: 29385,
      sku: 36,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Duobam",
      price: 31085,
      sku: 37,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Cardify",
      price: 29639,
      sku: 38,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Voyatouch",
      price: 19555,
      sku: 39,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 20532,
      sku: 40,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Subin",
      price: 28125,
      sku: 41,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 14912,
      sku: 42,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Gembucket",
      price: 43958,
      sku: 43,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotlux",
      price: 61273,
      sku: 44,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Opela",
      price: 28591,
      sku: 45,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sonsing",
      price: 46693,
      sku: 46,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Rank",
      price: 40205,
      sku: 47,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Duobam",
      price: 36587,
      sku: 48,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Konklux",
      price: 31605,
      sku: 49,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stringtough",
      price: 48167,
      sku: 50,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sonair",
      price: 36614,
      sku: 51,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stim",
      price: 36890,
      sku: 52,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tempsoft",
      price: 24161,
      sku: 53,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Matsoft",
      price: 53329,
      sku: 54,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Y-find",
      price: 30249,
      sku: 55,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tres-Zap",
      price: 30698,
      sku: 56,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Cookley",
      price: 47861,
      sku: 57,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Domainer",
      price: 26570,
      sku: 58,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Biodex",
      price: 50085,
      sku: 59,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Flexidy",
      price: 19389,
      sku: 60,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Wrapsafe",
      price: 23373,
      sku: 61,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 18125,
      sku: 62,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Keylex",
      price: 47643,
      sku: 63,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 37851,
      sku: 64,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 23678,
      sku: 65,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zaam-Dox",
      price: 50788,
      sku: 66,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tresom",
      price: 37591,
      sku: 67,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sonsing",
      price: 11187,
      sku: 68,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Y-Solowarm",
      price: 25718,
      sku: 69,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Wrapsafe",
      price: 18695,
      sku: 70,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Viva",
      price: 49651,
      sku: 71,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tresom",
      price: 16907,
      sku: 72,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 58302,
      sku: 73,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Andalax",
      price: 12785,
      sku: 74,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Biodex",
      price: 26897,
      sku: 75,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Lotstring",
      price: 62020,
      sku: 76,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Regrant",
      price: 36000,
      sku: 77,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stringtough",
      price: 37086,
      sku: 78,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Trippledex",
      price: 24178,
      sku: 79,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Job",
      price: 27689,
      sku: 80,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Home Ing",
      price: 54806,
      sku: 81,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Greenlam",
      price: 49247,
      sku: 82,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tres-Zap",
      price: 53359,
      sku: 83,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tempsoft",
      price: 41197,
      sku: 84,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Konklux",
      price: 36956,
      sku: 85,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Y-find",
      price: 28678,
      sku: 86,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Zontrax",
      price: 63160,
      sku: 87,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Biodex",
      price: 33288,
      sku: 88,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Y-find",
      price: 28360,
      sku: 89,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Tampflex",
      price: 11905,
      sku: 90,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Daltfresh",
      price: 29635,
      sku: 91,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Sub-Ex",
      price: 30162,
      sku: 92,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Subin",
      price: 11641,
      sku: 93,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Bamity",
      price: 22574,
      sku: 94,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Stronghold",
      price: 55110,
      sku: 95,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Bitwolf",
      price: 25491,
      sku: 96,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Otcom",
      price: 45404,
      sku: 97,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Subin",
      price: 56699,
      sku: 98,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Rank",
      price: 52911,
      sku: 99,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Matsoft",
      price: 32843,
      sku: 100,
      category: "Mobile Phones",
      description:
        "Display: FHD+ 1080x2400 AMOLED Dot display; 16.33 centimeters 6.43 inch; 20:9 aspect ratio Camera: 64 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens 13 MP Front camera",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
  ]);

  self.pageNumber = ko.observable(0);
  self.productsPerPage = 10;
  self.totalPages = ko.computed(function () {
    var div = Math.floor(self.masterProducts().length / self.productsPerPage);
    div += self.masterProducts().length % self.productsPerPage > 0 ? 1 : 0;
    return div;
  });

  self.totalPagesArray = ko.observable([]);
  for (let i = 1; i <= self.totalPages(); i++) {
    self.totalPagesArray([...self.totalPagesArray(), i]);
  }

  self.selectPage = function (data) {
    self.pageNumber(data - 1);
  };

  self.availableProducts = ko.computed(function () {
    const predicate1 =
      (low, high) =>
      ({ price }) =>
        price >= low && price <= high;

    var first = self.pageNumber() * self.productsPerPage;
    let paginatedItems = self
      .masterProducts()
      .slice(first, first + self.productsPerPage);
    let paginatedFilteredItems = paginatedItems.filter(
      predicate1(self.priceLowBound(), self.priceHighBound())
    );

    return _.orderBy(paginatedFilteredItems, "price", self.sortMethod());
  });

  self.next = function () {
    if (self.pageNumber() < self.totalPages() - 1) {
      self.pageNumber(self.pageNumber() + 1);
    }
  };

  self.previous = function () {
    if (self.pageNumber() != 0) {
      self.pageNumber(self.pageNumber() - 1);
    }
  };
}

ko.applyBindings(new AppViewModel());
