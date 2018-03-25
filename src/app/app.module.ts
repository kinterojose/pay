import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, MissingTranslationHandler} from "@ngx-translate/core";
import { MyMissingTranslationHandler } from './missingtemplate.component';

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AppComponent } from './app.component';

import { ApiAccessService } from './modules/api-access/api-access.service';
import { Constants } from './commons/constants/constants.service';
import { SignService } from './commons/services/sign.service';
import { AuthStorageService } from './commons/services/auth-storage.service';
//import { UserAuthGuard } from './modules/guards/user-auth.guard';

import { NavBarComponent } from './modules/nav-bar/nav-bar.component';
import { NavBarService } from './commons/services/nav-bar.service';

import { FooterComponent } from './modules/footer/footer.component';

import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { router } from './app.router';

import { LoginModule } from "./modules/login/login.module";

import { balanceRouter } from "./modules/balance/balance.router";
import { BalanceModule } from "./modules/balance/balance.module";

import { clientRouter } from "./modules/client/client.router";
import { ClientModule } from "./modules/client/client.module";

import { clientProfileRouter } from "./modules/client-profile/client-profile.router";
import { ClientProfileModule } from "./modules/client-profile/client-profile.module";

import { CryptoTransferModule } from './modules/crypto-transfer/crypto-transfer.module';
import { CryptoTransferRouter } from './modules/crypto-transfer/crypto-transfer.router';

import { currencyRouter } from "./modules/currency/currency.router";
import { CurrencyModule } from "./modules/currency/currency.module";

import { signUpRouting } from "./modules/sign-up/sign-up.router";
import { SignUpModule } from "./modules/sign-up/sign-up.module";

import { transferRouter } from "./modules/transfer/transfer.router";
import { TransferModule } from "./modules/transfer/transfer.module";

import { ubbletTransferRouter } from "./modules/ubblet-transfer/ubblet-transfer.router";
import { UbbletTransferModule } from "./modules/ubblet-transfer/ubblet-transfer.module";

import { ubbletTransferAdminRouter } from "./modules/ubblet-transfer-admin/ubblet-transfer-admin.router";
import { UbbletTransferAdminModule } from "./modules/ubblet-transfer-admin/ubblet-transfer-admin.module";

import { walletRouter } from "./modules/wallet/wallet.router";
import { WalletModule } from "./modules/wallet/wallet.module";

import { paymentRouter } from 'app/modules/payment-request/payment-request.router';
import { PaymentRequestModule } from 'app/modules/payment-request/payment-request.module';

import { paymentRequestRouter } from 'app/modules/payment-request-admin/payment-request-admin.router';
import { PaymentRequestAdminModule } from 'app/modules/payment-request-admin/payment-request-admin.module';
import { UserService } from 'app/commons/services/user.service';

export function HttpLoaderFactory(http: Http) {
	return new TranslateHttpLoader(http, "assets/lang/", ".json");
}

@NgModule({
	
	declarations: [
		AppComponent,
		NavBarComponent,
		HomeComponent,
		NotFoundComponent,
		FooterComponent,
		
	],
	imports: [
		ReactiveFormsModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [Http]
			}
		}),

		LoginModule,

		currencyRouter,
		CurrencyModule,

		transferRouter,
		TransferModule,

		ubbletTransferRouter,
		UbbletTransferModule,

		ubbletTransferAdminRouter,
		UbbletTransferAdminModule,

		paymentRouter,
		PaymentRequestModule,

		paymentRequestRouter,
		PaymentRequestAdminModule,

		clientRouter,
		ClientModule,

		clientProfileRouter,
		ClientProfileModule,

		balanceRouter,
		BalanceModule,
		
		signUpRouting,
		SignUpModule,

		walletRouter,
		WalletModule,

		CryptoTransferModule,
		CryptoTransferRouter,

		router,
		RouterModule
	],
	providers: [
		{ provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
		NavBarService,
		ApiAccessService,
		Constants,
		SignService,
		UserService,
		AuthStorageService,
		//UserAuthGuard
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }