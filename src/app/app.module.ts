import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardTweetsComponent } from './pages/dashboard-tweets/dashboard-tweets.component';
import { FooterComponent } from './parts/footer/footer.component';
import { HeaderComponent } from './parts/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { RecomendationsComponent } from './pages/recomendations/recomendations.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule} from '@angular/forms';
import { SearchProfileComponent } from './pages/search-profile/search-profile.component';
import { LinesComponent } from './charts/lines/lines.component';

import { ChartsModule } from 'ng2-charts';
import { PielanguageComponent } from './charts/pielanguage/pielanguage.component';
import { LocationComponent } from './charts/location/location.component';
import { TableComponent } from './influencers/table/table.component';
import { UserlikesComponent } from './pages/userlikes/userlikes.component';
import { ModaComponent } from './pages/influencers/moda/moda.component';
import { DeporteComponent } from './pages/influencers/deporte/deporte.component';
import { BolsaComponent } from './pages/bolsa/bolsa.component';
import { RadarComponent } from './charts/radar/radar.component';
import { LinesCiudadComponent } from './charts/lines-ciudad/lines-ciudad.component';
import { TableFilterComponent } from './pages/table-filter/table-filter.component';

import { TableFilterPipe } from './pages/table-filter/table-filter.pipe';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { GraficaLineComponent } from './paisesLatinoamerica/colombia/grafica-line/grafica-line.component';
import { GraficaCircleComponent } from './paisesLatinoamerica/colombia/grafica-circle/grafica-circle.component';
import { PageColombiaComponent } from './paisesLatinoamerica/colombia/page-colombia/page-colombia.component';
import { PageCostaRicaComponent } from './paisesLatinoamerica/costaRica/page-costa-rica/page-costa-rica.component';
import { GraficaLineCostaRicaComponent } from './paisesLatinoamerica/costaRica/grafica-line-costa-rica/grafica-line-costa-rica.component';
import { GraficaCircleCostaRicaComponent } from './paisesLatinoamerica/costaRica/grafica-circle-costa-rica/grafica-circle-costa-rica.component';
import { PageCubaComponent } from './paisesLatinoamerica/cuba/page-cuba/page-cuba.component';
import { GraficaLineCubaComponent } from './paisesLatinoamerica/cuba/grafica-line-cuba/grafica-line-cuba.component';
import { GraficaCircleCubaComponent } from './paisesLatinoamerica/cuba/grafica-circle-cuba/grafica-circle-cuba.component';
import { GraficaCircleEcuadorComponent } from './paisesLatinoamerica/ecuador/grafica-circle-ecuador/grafica-circle-ecuador.component';
import { GraficaLineEcuadorComponent } from './paisesLatinoamerica/ecuador/grafica-line-ecuador/grafica-line-ecuador.component';
import { PageEcuadorComponent } from './paisesLatinoamerica/ecuador/page-ecuador/page-ecuador.component';
import { GraficaCircleElSalvadorComponent } from './paisesLatinoamerica/elsalvador/grafica-circle-el-salvador/grafica-circle-el-salvador.component';
import { GraficaLineElSalvadorComponent } from './paisesLatinoamerica/elsalvador/grafica-line-el-salvador/grafica-line-el-salvador.component';
import { PageElSalvadorComponent } from './paisesLatinoamerica/elsalvador/page-el-salvador/page-el-salvador.component';
import { PageGuatemalaComponent } from './paisesLatinoamerica/guatemala/page-guatemala/page-guatemala.component';
import { PageGraficaCircleGuatemalaComponent } from './paisesLatinoamerica/guatemala/page-grafica-circle-guatemala/page-grafica-circle-guatemala.component';
import { PageGraficaLineGuatemalaComponent } from './paisesLatinoamerica/guatemala/page-grafica-line-guatemala/page-grafica-line-guatemala.component';
import { PageGraficaLineHondurasComponent } from './paisesLatinoamerica/honduras/page-grafica-line-honduras/page-grafica-line-honduras.component';
import { PageGraficaCircleHondurasComponent } from './paisesLatinoamerica/honduras/page-grafica-circle-honduras/page-grafica-circle-honduras.component';
import { PageHondurasComponent } from './paisesLatinoamerica/honduras/page-honduras/page-honduras.component';
import { PageMexicoComponent } from './paisesLatinoamerica/mexico/page-mexico/page-mexico.component';
import { GraficaCircleMexicoComponent } from './paisesLatinoamerica/mexico/grafica-circle-mexico/grafica-circle-mexico.component';
import { GraficaLineMexicoComponent } from './paisesLatinoamerica/mexico/grafica-line-mexico/grafica-line-mexico.component';
import { GraficaLineNicaraguaComponent } from './paisesLatinoamerica/nicaragua/grafica-line-nicaragua/grafica-line-nicaragua.component';
import { GraficaCircleNicaraguaComponent } from './paisesLatinoamerica/nicaragua/grafica-circle-nicaragua/grafica-circle-nicaragua.component';
import { PageNicaraguaComponent } from './paisesLatinoamerica/nicaragua/page-nicaragua/page-nicaragua.component';
import { PagePanamaComponent } from './paisesLatinoamerica/panama/page-panama/page-panama.component';
import { GraficaCirclePanamaComponent } from './paisesLatinoamerica/panama/grafica-circle-panama/grafica-circle-panama.component';
import { GraficaLinePanamaComponent } from './paisesLatinoamerica/panama/grafica-line-panama/grafica-line-panama.component';
import { GraficaLineParaguayComponent } from './paisesLatinoamerica/paraguay/grafica-line-paraguay/grafica-line-paraguay.component';
import { GraficaCircleParaguayComponent } from './paisesLatinoamerica/paraguay/grafica-circle-paraguay/grafica-circle-paraguay.component';
import { PageParaguayComponent } from './paisesLatinoamerica/paraguay/page-paraguay/page-paraguay.component';
import { GraficaCirclePuertoRicoComponent } from './paisesLatinoamerica/puertoRico/grafica-circle-puerto-rico/grafica-circle-puerto-rico.component';
import { GraficaLinePuertoRicoComponent } from './paisesLatinoamerica/puertoRico/grafica-line-puerto-rico/grafica-line-puerto-rico.component';
import { PagePuertoRicoComponent } from './paisesLatinoamerica/puertoRico/page-puerto-rico/page-puerto-rico.component';
import { GraficaCircleRepublicaDominicaComponent } from './paisesLatinoamerica/republicaDominicana/grafica-circle-republica-dominica/grafica-circle-republica-dominica.component';
import { GraficaLineRepublicaDominicaComponent } from './paisesLatinoamerica/republicaDominicana/grafica-line-republica-dominica/grafica-line-republica-dominica.component';
import { PageRepublicaDominicaComponent } from './paisesLatinoamerica/republicaDominicana/page-republica-dominica/page-republica-dominica.component';
import { GraficaCirlceUruguayComponent } from './paisesLatinoamerica/urugay/grafica-cirlce-uruguay/grafica-cirlce-uruguay.component';
import { GraficaLineUruguayComponent } from './paisesLatinoamerica/urugay/grafica-line-uruguay/grafica-line-uruguay.component';
import { PageUruguayComponent } from './paisesLatinoamerica/urugay/page-uruguay/page-uruguay.component';
import { GraficaLineVenezuelaComponent } from './paisesLatinoamerica/venezuela/grafica-line-venezuela/grafica-line-venezuela.component';
import { GraficaCircleVenezuelaComponent } from './paisesLatinoamerica/venezuela/grafica-circle-venezuela/grafica-circle-venezuela.component';
import { PageVenezuelaComponent } from './paisesLatinoamerica/venezuela/page-venezuela/page-venezuela.component';
import { GraficaCircleChileComponent } from './paisesLatinoamerica/chile/grafica-circle-chile/grafica-circle-chile.component';
import { GraficaLineChileComponent } from './paisesLatinoamerica/chile/grafica-line-chile/grafica-line-chile.component';
import { PageChileComponent } from './paisesLatinoamerica/chile/page-chile/page-chile.component';
import { GraficaLineBrasilComponent } from './paisesLatinoamerica/brasil/grafica-line-brasil/grafica-line-brasil.component';
import { GraficaCircleBrasilComponent } from './paisesLatinoamerica/brasil/grafica-circle-brasil/grafica-circle-brasil.component';
import { PageBrasilComponent } from './paisesLatinoamerica/brasil/page-brasil/page-brasil.component';
import { GraficaCircleBoliviaComponent } from './paisesLatinoamerica/bolivia/grafica-circle-bolivia/grafica-circle-bolivia.component';
import { GraficaLineBoliviaComponent } from './paisesLatinoamerica/bolivia/grafica-line-bolivia/grafica-line-bolivia.component';
import { PageBoliviaComponent } from './paisesLatinoamerica/bolivia/page-bolivia/page-bolivia.component';
import { GraficaLineArgentinaComponent } from './paisesLatinoamerica/argentina/grafica-line-argentina/grafica-line-argentina.component';
import { GraficaCircleArgentinaComponent } from './paisesLatinoamerica/argentina/grafica-circle-argentina/grafica-circle-argentina.component';
import { PageArgentinaComponent } from './paisesLatinoamerica/argentina/page-argentina/page-argentina.component';
import { PagePeruComponent } from './paisesLatinoamerica/peru/page-peru/page-peru.component';
import { GraficaCirclePeruComponent } from './paisesLatinoamerica/peru/grafica-circle-peru/grafica-circle-peru.component';
import { GraficaLinePeruComponent } from './paisesLatinoamerica/peru/grafica-line-peru/grafica-line-peru.component';
import { LinesPaisesComponent } from './charts/lines-paises/lines-paises.component';
import { FilterPipe } from './pages/table-filter/unique.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardTweetsComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    RecomendationsComponent,
    HomeComponent,
    SearchProfileComponent,
    LinesComponent,
    PielanguageComponent,
    LocationComponent,
    TableComponent,
    UserlikesComponent,
    ModaComponent,
    DeporteComponent,
    BolsaComponent,
    RadarComponent,
    LinesCiudadComponent,
    TableFilterComponent,
    TableFilterPipe,
    GraficaComponent,
    GraficaLineComponent,
    GraficaCircleComponent,
    PageColombiaComponent,
    PageCostaRicaComponent,
    GraficaLineCostaRicaComponent,
    GraficaCircleCostaRicaComponent,
    PageCubaComponent,
    GraficaLineCubaComponent,
    GraficaCircleCubaComponent,
    GraficaCircleEcuadorComponent,
    GraficaLineEcuadorComponent,
    PageEcuadorComponent,
    GraficaCircleElSalvadorComponent,
    GraficaLineElSalvadorComponent,
    PageElSalvadorComponent,
    PageGuatemalaComponent,
    PageGraficaCircleGuatemalaComponent,
    PageGraficaLineGuatemalaComponent,
    PageGraficaLineHondurasComponent,
    PageGraficaCircleHondurasComponent,
    PageHondurasComponent,
    PageMexicoComponent,
    GraficaCircleMexicoComponent,
    GraficaLineMexicoComponent,
    GraficaLineNicaraguaComponent,
    GraficaCircleNicaraguaComponent,
    PageNicaraguaComponent,
    PagePanamaComponent,
    GraficaCirclePanamaComponent,
    GraficaLinePanamaComponent,
    GraficaLineParaguayComponent,
    GraficaCircleParaguayComponent,
    PageParaguayComponent,
    GraficaCirclePuertoRicoComponent,
    GraficaLinePuertoRicoComponent,
    PagePuertoRicoComponent,
    GraficaCircleRepublicaDominicaComponent,
    GraficaLineRepublicaDominicaComponent,
    PageRepublicaDominicaComponent,
    GraficaCirlceUruguayComponent,
    GraficaLineUruguayComponent,
    PageUruguayComponent,
    GraficaLineVenezuelaComponent,
    GraficaCircleVenezuelaComponent,
    PageVenezuelaComponent,
    GraficaCircleChileComponent,
    GraficaLineChileComponent,
    PageChileComponent,
    GraficaLineBrasilComponent,
    GraficaCircleBrasilComponent,
    PageBrasilComponent,
    GraficaCircleBoliviaComponent,
    GraficaLineBoliviaComponent,
    PageBoliviaComponent,
    GraficaLineArgentinaComponent,
    GraficaCircleArgentinaComponent,
    PageArgentinaComponent,
    PagePeruComponent,
    GraficaCirclePeruComponent,
    GraficaLinePeruComponent,
    LinesPaisesComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
