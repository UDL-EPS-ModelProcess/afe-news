import { TestBed, inject } from '@angular/core/testing';

import { EditableArticleResolverService } from './editable-article-resolver.service';

describe('EditableArticleResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditableArticleResolverService]
    });
  });

  it('should be created', inject([EditableArticleResolverService], (service: EditableArticleResolverService) => {
    expect(service).toBeTruthy();
  }));
});
