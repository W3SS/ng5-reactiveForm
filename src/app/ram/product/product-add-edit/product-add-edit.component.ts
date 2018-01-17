import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ProductServiceService } from '../product-service.service';
import { GenericValidatorForms } from '../../../share/custome/generic.validator.forms';
import { NumberValidators } from '../../../share/custome/number.validators';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.css']
})
export class ProductAddEditComponent implements OnInit, AfterViewInit, OnDestroy  {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  pageTitle:string = 'Page Title ';
  rank:number;
  imgwidth:number = 100;
  errorMessage: string;
  moviesDetails:any[];
  private sub:Subscription;

  movieForm:FormGroup;
  

  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidatorForms;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service : ProductServiceService,
    private _fb:FormBuilder
  ) {

    // Defines to here  all of the validation messages for the form.
    // These messages  could instead be retrieved from a file or database.
    this.validationMessages = {
      title:{
        required : 'Movie name is required.',
        minlength: 'Movie name must be at least 3 characters.',
        maxlength: 'Movie name cannot exceed 40 characters.'
      },
      distributor:{
        required: 'Distributor name is required.'
      },
      directedBy:{
        required: 'Directed By name is required.'
      },
      producedBy:{
        required: 'Produced By is required.'
      },
      storyBy:{
        required: 'Story By is required.'
      },
      starring:{
        required: 'Starring is requried.'
      },
      releaseDate:{
        required:'Release Date is requried.'
      },
      runningTime:{
        required:'Running Time is requried.'
      },
      budget:{
        required: 'Budget is requried.'
      },
      worldwideGross : {
        required: 'World wide gross is requried.'
      },
      rating: {
        range:'Rate the movie between 1 (lowest) and 5 (highest).'
      }
    }
    // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidatorForms(this.validationMessages);

   }

  ngOnInit() {
    // form validation messagte for life cycle hook here 
    this.movieForm = this._fb.group({
      title:['', [Validators.required, 
                  Validators.minLength(3), 
                  Validators.maxLength(40)]],
      distributor:['', Validators.required],
      directedBy:['', Validators.required],
      producedBy:['', Validators.required],
      storyBy:['', Validators.required],
      starring:['', Validators.required],
      releaseDate:['', Validators.required],
      runningTime:['', Validators.required],
      budget:['', Validators.required],
      worldwideGross:['', Validators.required],
      rating:['', NumberValidators.range(1, 5)],
      tags:['']

    })


    this.rank = +this._route.snapshot.paramMap.get('id');
    //this.pageTitle += `: ${this.rank}`;

    this.sub = this._route.params.subscribe(
        params => {
            let id = +params['id'];
            this.getProductDetail(id);
    });
  }

  ngAfterViewInit(): void {
      // Watch for the blur event from any input element on the form.
      let controlBlurs: Observable<any>[] = this.formInputElements
          .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

      // Merge the blur event observable with the valueChanges observable
      Observable.merge(this.movieForm.valueChanges, ...controlBlurs).debounceTime(500).subscribe(value => {
          this.displayMessage = this.genericValidator.processMessages(this.movieForm);
      });
  }

  ngOnDestroy(): void {
      //this.sub.unsubscribe();
      console.log('on on destroy function call here ');
  }

  getProductDetail(id: number) {
    this._service.getProductDetail(id).subscribe(
          data => {
            console.log(data);
            this.moviesDetails = data;
          },
          error => this.errorMessage = <any>error);
  }

  onBack():void{
    this._router.navigate(['/product']);
  }
  onTrash():void{
    console.log('trash click');
    console.log(this.rank);
  }

  formUpdate() :void{
    console.log('click to form update ');
    console.log(this.movieForm);
  }

}
