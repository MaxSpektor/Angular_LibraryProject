import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';
import { BooksService } from './books.service';
import { Component } from '@angular/core';
// import { NgToastModule, NgToastService } from 'ng-angular-popup';

describe('BooksService', () => {
  let service: BooksService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BooksService);

  });

  it('should be created : BookService',() => {
    expect(service).toBeTruthy();
  });

  it('change theme mode',() => {
    expect(service.themeModeTemp).toBe('light');
    service.changeToMode('dark');
    expect(service.themeModeTemp).toBe('dark');
  })

  it('return theme function',()=> {
    expect(service.themeModeTemp = service.returnTheme()).toBe('light')
  })
});
