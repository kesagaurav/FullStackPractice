import { Component, OnInit } from '@angular/core';
import {
  count,
  distinct,
  endWith,
  filter,
  find,
  first,
  last,
  map,
  max,
  of,
  range,
  reduce,
  startWith,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.css'],
})
export class RxjsPracticeComponent implements OnInit {
  ngOnInit(): void {}

  constructor() {
    //count
    const a = range(1, 6);
    const b = a.pipe(count());
    b.subscribe((res) => console.log(res));

    //max
    const c = of(1, 2, 3, 4, 5, 6);
    c.pipe(max()).subscribe((res) => console.log(' max is ' + res));

    //reduce
    const d = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    d.pipe(reduce((a, b) => a + b, 0)).subscribe((res) =>
      console.log('reduce is ' + res)
    );
    //find
    const f = of(1, 2, 3, 4, 5, 6);
    f.pipe(find((a) => a === 1)).subscribe((res) => console.log(res));

    //map
    const m = of(1, 2, 3, 4, 5, 6, 7);
    f.pipe(map((a) => a % 2 == 0)).subscribe((res) => console.log('m ' + res));
    //filter
    const f1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    f.pipe(filter((a) => a % 2 == 0)).subscribe((res) =>
      console.log(' filter ' + res)
    );
    //startWith
    const s = of('gaurav', 'deepa', 'omkar', 'ganesh');
    console.log('starts with');

    f.pipe(startWith('g')).subscribe((res) => console.log(res));
    //end with
    const e = of('gaurav', 'deepa', 'omkar');
    console.log('ends with');
    e.pipe(endWith('omkar')).subscribe((res) => console.log('end ' + res));

    //every
    // const every=of(1,2,3,4,5,6,7,8,9);
    // every.pipe(every()).subscribe(res=>console.log("values are " + res));

    //distinct
    const d1 = of(1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7);
    d1.pipe(distinct()).subscribe((res) =>
      console.log('originam values are ' + res)
    );

    //first
    const f2 = of(1, 2, 3, 4, 5, 6, 7, 8);
    f2.pipe(first()).subscribe((res) => console.log('elem 1st are ' + res));

    //last
    const l = of(1, 2, 3, 4, 5, 6, 7, 8);
    f2.pipe(last()).subscribe((res) => console.log('elem last are ' + res));


  }
}
