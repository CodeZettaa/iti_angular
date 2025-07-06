import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SettingComponent } from './pages/setting/setting.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WebSettingComponent } from './pages/setting/components/web-setting/web-setting.component';
import { MobileSettingComponent } from './pages/setting/components/mobile-setting/mobile-setting.component';
import { BtnComponent } from './btn/btn.component';
import { authGuard } from './pages/setting/auth.guard';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    { path: "", redirectTo: "about", pathMatch: "full" },
    { path: "about", component: AboutComponent, title: "About page" },
    { path: "productDetails/:id", component: ProductDetailsComponent, title: "ProductDetails page" },




    // { path: "contact", component: ContactComponent, title: "Contact page" },

    { path: "contact", loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent) },



    {
        path: "setting", component: SettingComponent, title: "Setting page", children: [

            { path: "web", component: WebSettingComponent, title: "Web page" },
            { path: "mobile", component: MobileSettingComponent, title: "Mobile page" },
            { path: "test", component: BtnComponent, title: "Testing page" }
        ]
    },









    { path: "**", component: NotFoundComponent, title: "Not found page" }
];



// Guard


// param ... madatory
// queryParam localhost:4200