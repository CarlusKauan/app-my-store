import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";
// Importando o serviço !
import { CartService } from '../cart.service';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  // definindo propriedade
  product: Product | undefined;

  // Adicionando método
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }


  // Injetando activatedRoute no construtor !
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) {}

  //extraia os productId parâmetros da rota e encontre o produto correspondente na productsmatriz.
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Find the product that correspond with the id provided in route.
      this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
