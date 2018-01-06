import { Component, OnInit } from '@angular/core';
import { ArticleService, Article, CategoryService, Category } from '../shared';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  article: Article = new Article ();
  categories: Category[];
  articleForm: FormGroup;
  errors: Object = {};
  isSubmitting  = false;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // use the FormBuilder to create a form group
    this.articleForm = this.fb.group ({
      title: '',
      description: '',
      body: '',
      type: '',
    });
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      data => {
        this.categories = data['categories'];
        // this.articleForm.controls['type'].setValue(this.categories[0].name, {onlySelf: true});
      }
    );
    // If there's an article prefetched, load it
    this.route.data.subscribe(
      (data: {article: Article}) => {
        if (data.article) {
          this.article = data.article;
          this.articleForm.patchValue(data.article);
          this.categoryService.get(data.article.type['name']).subscribe(
            cat => {
              this.articleForm.controls['type'].setValue(cat.name, {onlySelf: true});
            }
          );
        }
      }
    );
  }

  updateArticle (values: Object) {
    (<any>Object).assign(this.article, values);
  }

  submitForm () {
    this.isSubmitting = true;

    // Update model
    this.updateArticle(this.articleForm.value);

    // Post the change
    this.articleService
        .save(this.article)
        .subscribe (
          article => this.router.navigateByUrl('/article/' + article.slug),
          err => {
            this.errors = err;
            this.isSubmitting = false;
          }
        );

  }

}
