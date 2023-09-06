import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { /*ActivatedRoute,*/ Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private router: Router/*, private actRoute: ActivatedRoute*/) { }

  onLoadServer(id:number) {
    this.router.navigate(['servers', id, 'edit'], {queryParams: {yes: 'no', no: 'yes'}, fragment: 'loaded'} /*, {relativeTo: this.actRoute}*/);
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
