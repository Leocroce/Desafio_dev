import { BuscaDadosService } from './servicos/busca-dados.service';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { ModalpopupComponent } from './modalpopup/modalpopup.component';
// import * as alertify from 'alertifyjs'
import { LoginService } from './servicos/login.service';
import { Data } from './Models/Data';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'desafio_dev';
  displayedColumns: string[] = ['idsolicitacaoservico', 'atividade', 'contrato', 'descricao', 'portfolio']
  dataSource: any;
  empdata: any;
  sideBarOpen = true;
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {}; // required
  chartOptions1: Highcharts.Options = {}; // required
  chartOptions2: Highcharts.Options = {}; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {}
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false
  data: any = []
  bigChart: {} = []

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(
    private dados: BuscaDadosService,
    private login: LoginService,
    private dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
    ) {
      this.chartOptions = {
        chart: {
          type: 'area',
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        tooltip: {
          split: true,
          outside: true
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false,
        },
        xAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
        },
        yAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
        },
        series: [{
          type: "area",
          data: [12, 22, 34, 56],
          name: "Trimestre"
        }]
      };
      this.chartOptions1 = {
        chart: {
          type: 'area',
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        tooltip: {
          split: true,
          outside: true
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false,
        },
        xAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
        },
        yAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
        },
        series: [{
          type: "area",
          data: [25, 32, 12, 46],
          name: "Trimestre"
        }]
      };
      this.chartOptions2 = {
        chart: {
          type: 'area',
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60
        },
        title: {
          text: ''
        },
        subtitle: {
          text: ''
        },
        tooltip: {
          split: true,
          outside: true
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false
        },
        exporting: {
          enabled: false,
        },
        xAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
        },
        yAxis: {
          labels: {
            enabled: false,
          },
          title: {
            text: null
          },
          startOnTick: false,
          endOnTick: false,
        },
        series: [{
          type: "area",
          data: [7, 13, 31, 24],
          name: "Trimestre"
        }]
      };
    }

  ngOnInit(): void {
    this.BuscarDados();
    this.dados.RequiredRefresh.subscribe(r => {
      this.BuscarDados();
    });
    this.bigChart =this.dados.getData()
    console.log(this.bigChart)
    // this.chartOptions = {
    //   chart: {
    //     type: 'area'
    //   },
    //   title: {
    //     text: 'Quantitativo'
    //   },
    //   series: this.data
    // }
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  BuscarDados() {
    this.login.loginCITsmart().subscribe((response) => {
      const token = response.sessionID

      this.dados.dadosCITSmart({sessionID: token, queryName: 'DESAFIODEV'}).subscribe(result => {
        this.empdata = result;
        console.log(this.empdata)
        this.dataSource = new MatTableDataSource<Data>(this.empdata.result)
        console.log(this.dataSource)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    })
  }

  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  getrow(row: any) {
    console.log(row);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
