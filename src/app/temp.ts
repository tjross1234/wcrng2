this.route.params.subscribe(params => {
      this.location = params['location'];

info_cats: [
      {
        cat: 'category 1',
        dets: [
          {
            det: 'test1'
          }
        ]
      }
    ]


<div *ngIf="infoitem.isheader" class="listheader">
          <br>
          {{infoitem.itemtext}}
          <br>
          <br>
        </div>
        <div *ngIf="infoitem.isitem" class="listitem">
          <img border="0" src="images/flare.gif" width="15" height="15" hspace="13" alt="bullet">
          {{infoitem.itemtext}}
        </div>