let divAccord = document.querySelector("#accordionExample");

let filter = `
<div class="card border-0">
<div class="card-header bg-white" id="headingOne">
  <h2 class="mb-0">
    <button class="btn btn-link btn-block text-center text-dark" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-decoration: none;">
      <h5>Filter</h5>
    </button>
  </h2>
</div>

<div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
  <div class="card-body">
      <div class="row">
          <div class="col">
              <form>
                  <div class="form-group">
                      <label for="formControlRange"><h5>Pris</h5></label>
                      <input type="range" class="form-control-range" id="formControlRange">
                  </div>
              </form>
          </div>
          <div class="col">
              <h5>Lagerstatus</h5>
                  
                  <div class="custom-control custom-switch">
                      <input type="checkbox" class="custom-control-input" id="customSwitchesLager" checked>
                      <label class="custom-control-label" for="customSwitchesLager">Visa endast böcker i lager</label>
                  </div>
          </div>
      </div>

      <div class="row mt-3">
          <div class="col">
              <h5>Format</h5>

          <div class="custom-control custom-checkbox custom-control-inline">
              <input type="checkbox" class="custom-control-input" id="defaultInline1" checked>
              <label class="custom-control-label" for="defaultInline1">Pocket</label>
          </div>

          <div class="custom-control custom-checkbox custom-control-inline">
              <input type="checkbox" class="custom-control-input" id="defaultInline2">
              <label class="custom-control-label" for="defaultInline2">Inbunden</label>
          </div>

          <div class="custom-control custom-checkbox custom-control-inline">
              <input type="checkbox" class="custom-control-input" id="defaultInline3">
              <label class="custom-control-label" for="defaultInline3">Häftad</label>
          </div>
          </div>
          <div class="col">
              <h5>Språk</h5>

          <div class="custom-control custom-checkbox custom-control-inline">
              <input type="checkbox" class="custom-control-input" id="defaultInline4" checked>
              <label class="custom-control-label" for="defaultInline4">Svenska</label>
          </div>

          <div class="custom-control custom-checkbox custom-control-inline">
              <input type="checkbox" class="custom-control-input" id="defaultInline5">
              <label class="custom-control-label" for="defaultInline5">Engelska</label>
          </div>
          </div>
      </div>
      </div>
  </div>
</div>
</div>`;           
    
divAccord.innerHTML=filter;