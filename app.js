function AppViewModel() {
  var self = this;
  self.selectedProductDetails = ko.observable([]);
  self.hasBeenSubmitted = ko.observable(false);

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
    var lowBound = price[0];
    var highBound = price[1];

    const predicate1 =
      (low, high) =>
      ({ price }) =>
        price >= low && price <= high;

    self.availableProducts(
      self.masterProducts().filter(predicate1(lowBound, highBound))
    );
  };

  self.sortWithPrice = function () {
    var sortDOM = document.getElementById("sortDropDown");
    var sortMethod = sortDOM.value;
    self.availableProducts(
      _.orderBy(self.availableProducts(), "price", sortMethod)
    );
  };

  self.masterProducts = ko.observable([
    {
      mobileName: "OnePlusNord2",
      price: 35000,
      sku: 23,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "SamsungGalaxyS2",
      price: 25000,
      sku: 22,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Redminote 6 pro",
      price: 17000,
      sku: 21,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Iphone 12",
      price: 65000,
      sku: 33,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Iphone11",
      price: 45000,
      sku: 43,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Oneplus 7t",
      price: 45000,
      sku: 63,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Oneplus 9R",
      price: 49000,
      sku: 83,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Realme gt ",
      price: 30000,
      sku: 93,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Realme pro",
      price: 15000,
      sku: 73,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Samsung s20",
      price: 44000,
      sku: 44,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
  ]);

  // list of available products
  self.availableProducts = ko.observableArray([
    {
      mobileName: "OnePlusNord2",
      price: 35000,
      sku: 23,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "SamsungGalaxyS2",
      price: 25000,
      sku: 22,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Redminote 6 pro",
      price: 17000,
      sku: 21,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Iphone 12",
      price: 65000,
      sku: 33,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Iphone11",
      price: 45000,
      sku: 43,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Oneplus 7t",
      price: 45000,
      sku: 63,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Oneplus 9R",
      price: 49000,
      sku: 83,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Realme gt ",
      price: 30000,
      sku: 93,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Realme pro",
      price: 15000,
      sku: 73,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
    {
      mobileName: "Samsung s20",
      price: 44000,
      sku: 44,
      category: "Mobile Phones",
      imagePLP:
        "https://www.reliancedigital.in/medias/OnePlus-8T-Smartphone-491901348-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNzkzMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDY2L2g3ZC85NDIyNTIzMDcyNTQyLmpwZ3wyYjUwODMxMzU0M2FjZDQxODkyYjk0MjUxMWYyNmYwZWRkNzZlYTgzY2ViMTAwNzA5YWUxZDNjYzIwZTkzYWNj",
    },
  ]);
}

ko.applyBindings(new AppViewModel());
