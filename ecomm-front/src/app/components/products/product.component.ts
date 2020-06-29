import {Component, OnInit} from "@angular/core";
import Product from 'src/app/models/product';
import ProductService from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './product.component.html'
})
export default class ProductComponent implements OnInit {
    
    private product:Product

    constructor(private service: ProductService, private activatedRoute: ActivatedRoute){}
    

    ngOnInit(): void{
        let id = this.activatedRoute.params["id"];
        this.service.getById(id).subscribe(
            res => this.product = res,
            err => alert(err)
        );
    }

}