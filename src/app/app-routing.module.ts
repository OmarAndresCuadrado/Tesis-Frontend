import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardTweetsComponent } from './pages/dashboard-tweets/dashboard-tweets.component';
import { SearchComponent } from './pages/search/search.component';
import { RecomendationsComponent } from './pages/recomendations/recomendations.component';
import { SearchProfileComponent } from './pages/search-profile/search-profile.component';
import { DeporteComponent } from './pages/influencers/deporte/deporte.component';
import { ModaComponent } from './pages/influencers/moda/moda.component';
import { UserlikesComponent } from './pages/userlikes/userlikes.component';
import { BolsaComponent } from './pages/bolsa/bolsa.component';
import { HomeComponent } from './pages/home/home.component';
import { TableFilterComponent } from './pages/table-filter/table-filter.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { PageColombiaComponent } from './paisesLatinoamerica/colombia/page-colombia/page-colombia.component';
import { PageArgentinaComponent } from './paisesLatinoamerica/argentina/page-argentina/page-argentina.component';
import { PageBoliviaComponent } from './paisesLatinoamerica/bolivia/page-bolivia/page-bolivia.component';
import { PageBrasilComponent } from './paisesLatinoamerica/brasil/page-brasil/page-brasil.component';
import { PageChileComponent } from './paisesLatinoamerica/chile/page-chile/page-chile.component';
import { PageCostaRicaComponent } from './paisesLatinoamerica/costaRica/page-costa-rica/page-costa-rica.component';
import { PageCubaComponent } from './paisesLatinoamerica/cuba/page-cuba/page-cuba.component';
import { PageEcuadorComponent } from './paisesLatinoamerica/ecuador/page-ecuador/page-ecuador.component';
import { PageElSalvadorComponent } from './paisesLatinoamerica/elsalvador/page-el-salvador/page-el-salvador.component';
import { PageGuatemalaComponent } from './paisesLatinoamerica/guatemala/page-guatemala/page-guatemala.component';
import { PageHondurasComponent } from './paisesLatinoamerica/honduras/page-honduras/page-honduras.component';
import { PageMexicoComponent } from './paisesLatinoamerica/mexico/page-mexico/page-mexico.component';
import { PageNicaraguaComponent } from './paisesLatinoamerica/nicaragua/page-nicaragua/page-nicaragua.component';
import { PagePanamaComponent } from './paisesLatinoamerica/panama/page-panama/page-panama.component';
import { PageParaguayComponent } from './paisesLatinoamerica/paraguay/page-paraguay/page-paraguay.component';
import { PagePuertoRicoComponent } from './paisesLatinoamerica/puertoRico/page-puerto-rico/page-puerto-rico.component';
import { PageRepublicaDominicaComponent } from './paisesLatinoamerica/republicaDominicana/page-republica-dominica/page-republica-dominica.component';
import { PageUruguayComponent } from './paisesLatinoamerica/urugay/page-uruguay/page-uruguay.component';
import { PageVenezuelaComponent } from './paisesLatinoamerica/venezuela/page-venezuela/page-venezuela.component';
import { PagePeruComponent } from './paisesLatinoamerica/peru/page-peru/page-peru.component';


const routes: Routes = [

  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'register' , component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'generalSearch', component: SearchComponent},
  {path: 'dashboardTweets', component: DashboardTweetsComponent},
  {path: 'recomendations', component: RecomendationsComponent},
  {path: 'profileSearch', component: SearchProfileComponent},
  {path: 'table', component: TableFilterComponent },
  {path: 'colombia', component: PageColombiaComponent },
  {path: 'argentina', component: PageArgentinaComponent },
  {path: 'bolivia', component: PageBoliviaComponent},
  {path: 'brasil', component: PageBrasilComponent},
  {path: 'chile', component: PageChileComponent },
  {path: 'costaRica', component: PageCostaRicaComponent},
  {path: 'cuba', component: PageCubaComponent },
  {path: 'ecuador', component: PageEcuadorComponent},
  {path: 'elSalvador', component: PageElSalvadorComponent },
  {path: 'guatemala', component: PageGuatemalaComponent },
  {path: 'honduras', component: PageHondurasComponent },
  {path: 'mexico', component: PageMexicoComponent },
  {path: 'nicaragua', component: PageNicaraguaComponent },
  {path: 'panama', component: PagePanamaComponent },
  {path: 'paraguay', component: PageParaguayComponent },
  {path: 'puertoRico', component: PagePuertoRicoComponent },
  {path: 'republicaDominicana', component: PageRepublicaDominicaComponent },
  {path: 'urugay', component: PageUruguayComponent },
  {path: 'venezuela', component: PageVenezuelaComponent },
  {path: 'peru', component: PagePeruComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
