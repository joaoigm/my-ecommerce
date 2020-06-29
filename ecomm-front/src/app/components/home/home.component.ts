import {Component, OnInit} from "@angular/core";
import ProductService from 'src/app/services/product.service';
import Product from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import CartService from 'src/app/services/cart.service';
import CartProduct from 'src/app/models/cartProduct';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'home.component.html'
})
export default class HomeComponent implements OnInit {

    products: Product[] = [];
    searchText: string;
    
    constructor(
        private productService: ProductService, 
        private authService: AuthService, 
        private cartService: CartService,
        private router: Router){}

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(): void {
        this.productService.get().subscribe(
            res => { this.products = res; console.log(JSON.stringify(res))},
            err => alert(JSON.stringify(err))
        );
    }

    search(): void {
        this.productService.getByName(this.searchText).subscribe(
            res => this.products = res
        )
    }

    loadQuantityForProduct(product: Product): number[] {
        let quantity: number[] = [];
        for(let i: number = 0; i < product.stock; i++){
            quantity.push(i+1);
        }
        return quantity;
    }

    public addToCart(product: Product): void {
        console.log(product.selectedQuantity);
        if(product.selectedQuantity === undefined){
            alert("Selecione a quantidade desejada");
        } else if(!this.authService.isAuthenticated()) {
            alert("Para adicionar itens ao carrinho, faça login");
        } else {
            this.cartService.addProductToCart(this.authService.getUser().id, new CartProduct(product, product.selectedQuantity)).subscribe(
                res => null,
                err => console.log(err),
                () => this.router.navigateByUrl('/refreshCartIcon', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/']);
                })
            );
        }

    }

    public loadQuantityArray(product: Product): number[] {
        let quantity: number[] = [];
        for(let i: number = 0; i < product.stock; i++){
            quantity.push(i+1);
        }
        return quantity;
    }
}