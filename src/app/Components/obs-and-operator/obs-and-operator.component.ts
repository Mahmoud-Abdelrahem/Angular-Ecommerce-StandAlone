import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription, take } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-obs-and-operator',
  standalone: true,
  imports: [],
  templateUrl: './obs-and-operator.component.html',
  styleUrl: './obs-and-operator.component.scss'
})
export class ObsAndOperatorComponent implements OnInit,OnDestroy {
  
    sub!:Subscription;
  obs = new Observable(observer=>{
    console.log("Observal Start");

    setTimeout(()=>{
      observer.next('We Are Team1')
    },1000)
    setTimeout(()=>{
      observer.next('We Are Team2')
    },2000)
    setTimeout(()=>{
      observer.next('We Are Team3')
    },3000)
    setTimeout(()=>{
      observer.next('We Are Team4')
    },4000)
    setTimeout(()=>{
      observer.complete()
    },4500)
    
  })

  ngOnInit(): void {
    this.obs.subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Complete");
      }
    })
    // var newObs = fromEvent(document,'click');
    // newObs.subscribe(data=>{
    //   console.log('You Clicked Now');
      
    // })

    var obsPipe = fromEvent(document,'click')
    obsPipe.pipe(take(2)).subscribe(item=>{
      console.log("Using Pipe");
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
}