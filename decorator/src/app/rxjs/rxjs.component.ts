import { Component, OnInit } from '@angular/core';
import {
  concat,
  count,
  filter,
  from,
  map,
  max,
  min,
  Observable,
  of,
  reduce,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  //observalbe!:Observable<string>;

  ngOnInit(): void {
    console.log('hello,welcome to rxjs component');

    //filter operator
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    from(numbers)
      .pipe(filter((a) => a % 2 == 0))
      .forEach((e) => console.log(e));
    console.log(numbers);
    //note from -> takes array where numbers,strings can take of observalbe
    const numbers1 = [1, 2, 3, 4, 4];
    //of(numbers1).pipe(filter(a=>a%1==0)).subscribe(a=>console.log(a));
    const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    of(number2);
    const name = ['gaurav', 'kesa', '123'];
    of(name);
    const truthy = [true, false];
    of(truthy);

    const observalble = new Observable();
    const gaurav = concat(number2, name, truthy);
    console.log(gaurav + ' values are merged');

    const numbers3 = [1, 2, 3, 4, 5, 6];
    from(numbers3)
      .pipe(filter((num) => num % 2 == 0))
      .subscribe((res) => {
        console.log(res);
      });

    const ok = from([
      {
        name: 'kg',
        age: 25,
      },
      {
        name: 'deepa',
        age: 52,
      },
      {
        name: 'sania',
        age: 67,
      },
    ]);
    ok.pipe(filter((a) => a.age > 30)).forEach((e) =>
      console.log(' obj value are ' + `${e.name}` + '  ' + `${e.age}`)
    );

    const numbers4 = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 191, 20,
    ];
    console.log('values with greater than 10 are');

    from(numbers4)
      .pipe(filter((a) => a > 10))
      .forEach((e) => console.log(' /t ' + e));

    //mathematical operators
    //max
    const numbesr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    from(numbesr5)
      .pipe(max())
      .forEach((a) => console.log(' max value is  ' + a));

    //min
    const numbesr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3];
    from(numbesr6)
      .pipe(min())
      .forEach((a) => console.log(' min value is  ' + a));

    //count
    const numbesr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    from(numbesr7)
      .pipe(count())
      .forEach((a) => console.log(' count value is  ' + a));

    //reduce
    const number8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    from(number8)
      .pipe(reduce((a, b) => a / b, 1))
      .forEach((e) => console.log(e));

    //transformation operators
    //map
    const number9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    from(number9)
      .pipe(
        filter((a) => a % 2 == 0),
        map((a) => a * 2),
        map((a) => a * 3)
      )
      .forEach((a) => console.log(a));
    //2,4,6,8 //4,8,12,16//12,24,36,48
    //       let observable1 = of([10, 20, 30]);
    //       let observable2 = from([100, 200, 300]);
    //       let observable = observable1.pipe(concat(observable2));

    // observable.subscribe(
    //     data => console.log(data),
    //     error => console.log("error", error),
    //     () => console.log("data stream completed")
    // );
    const num = [1, 2, 3];
    let a = from(num).forEach((e) => e < 3);
    console.log(a);

    const num2 = [1, 2, 3, 4, 5, 6];
    console.log('even values are ');

    from(num2)
      .pipe(filter((a) => a % 2 == 0))
      .forEach((e) => console.log(e));
  }

  observable = new Observable().subscribe({
    next: (data) => {
      console.log(data + ' i am in next bolck');
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log('i am in complete block');
    },
  });

  observalbe1 = new Observable().subscribe((observable: any) => {
    observable.next(1);
    observable.next(2);
    observable.complete();
  });
}
