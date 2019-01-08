import { Component, OnInit, NgZone } from '@angular/core';
import 'cal-heatmap';
import { subMonths } from 'date-fns';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss'],
})
export class HeatmapComponent implements OnInit {
  heatmapSelector = '#cal-heatmap';

  private heatmap: CalHeatMap.CalHeatMap;

  constructor(private zone: NgZone) {
    zone.onMicrotaskEmpty.subscribe(console.warn);
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      this.heatmap = new CalHeatMap();
      this.heatmap.init({
        itemSelector: this.heatmapSelector,
        domain: 'month',
        subDomain: 'day',
        start: subMonths(new Date(), 11),
        legendHorizontalPosition: 'right',
        tooltip: true,
        legend: [2, 4, 6, 8],
      });
    });
  }
}
