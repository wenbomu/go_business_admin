## Init

- How to update Git and tag, with new changes:

```
git add .
git commit -m "update"
git push
git tag xxx (e.g., 1_init_project_with_template_and_components)
git push origin --tags
git tag (list all tags)

## how to delete a tag
git tag -d 2_module_public_securexx
git push --delete origin 2_module_public_securexx

## how to re-tag, tag several commits into one tag
git tag 14_role_crud_with_backend_api_fix 9bae0159704870fae87864d8126337d14c1a786e
git push origin --tags
with 9bae0159704870fae87864d8126337d14c1a786e being the beginning of the hash of the commit you want to tag 
and 14_role_crud_with_backend_api_fix being the version you want to tag.
```

- `ng new angular-biz-admin --skip-git`
  - add routing
  - using `css`
- `cd angular-biz-admin`
- `ng s`


- add bootstrap: https://getbootstrap.com/
  - use 5.2.3: https://getbootstrap.com/docs/5.2/getting-started/introduction/
  - dashboard: https://getbootstrap.com/docs/5.2/examples/dashboard/

- git tag 1_init_project_with_template_and_components

## module and code refactor

```
ng g m public
ng g m secure
ng g c secure
ng g c public
```
- git tag 2_module_public_secure


## routing

```
ng g c public/login
ng g c public/register
```
- create routes in `app-routing.module.ts`

- git tag 3_routing_public_login_register


## register Form and environments
- https://getbootstrap.com/docs/5.2/examples/sign-in/
- 
- `ng g environments`
  - https://dev.to/this-is-angular/angular-15-what-happened-to-environmentts-koh

- add the following in `main.ts`
```
import {enableProdMode} from "@angular/core";

if (environment.production) {
  enableProdMode();
}
```
- git tag 4_register_form_http_client_env

## login, redirect, jwt cookie set

- reuse css
- check chrome application section to verify jwt cookie been set
- git tag 5_register_form_http_client_env


## auth_service_interface_login_logout

- `ng g s services/auth`
- `ng g i interfaces/user`, `ng g i interfaces/role`
- in `tsconfig.json` add `"strictPropertyInitialization": false,`
- 
- git tag 6_auth_service_interface_login_logout

## input_interceptors
- `@Input`: pass user from `SecureComponent` to `NavComponent` so there will be no twice `api/user` API call
- Add interceptor: `ng g interceptor interceptors/credential`, then add the following in `app.module.ts`

```
   {
      provide: HTTP_INTERCEPTORS,
      useClass: CredentialInterceptor,
      multi:true
    }
```

- git tag 7_input_interceptor

## profile and dashboard page
- ng g c secure/profile
- ng g c secure/dashboard
- git tag 8_profile_dashboard


## event emitter

- git tag 9_event_emitter

## users list
- `ng g c secure/users`
- git tag 10_user_lists

## user pagination
- git tag 11_user_pagination

## curd_user_page
- `ng g c secure/users/user-create`
- `ng g s services/role`
- `ng g c secure/users/user-edit`
- git tag 12_user_crud_page

## abstract class
- `ng g s services/rest`
- git tag 13_abstract_class_rest_service


## Roles crud
- `ng g c secure/roles`
- `ng g c secure/roles/role-create`
- `ng g s services/permission`
- `ng g i interfaces/permission`
- fix go-biz-admin roleController `git tag 16_role_api_fix`
- `ng g c secure/roles/role-edit`
- git tag 14_role_crud_with_backend_api_fix
- N.B., if we remove the `view_users` Permissions for Admin (which is the logged-in user), we may not be able to view users


## products
- `ng g c secure/products`
- `ng g i interfaces/product`
- `ng g s services/product`
- git tag 15_product_list_delete_pagination

## paginator and product creation
- `ng g c secure/components/paginator`
- `ng g c secure/products/product-create`
- git tag 16_product_creation_paginator


## upload image
- `ng g c secure/components/upload`
- git tag 17_image_upload


## edit product
- `ng g c secure/products/product-edit`
- git tag 18_edit_product

## order
- `ng g c secure/orders`
- `ng g s services/order`
- `ng g i interfaces/order`
- `ng g i interfaces/order-item`
- git tag 19_order_list


## order item
- git tag 19_order_item_list


## animation
- add `BrowserAnimationsModule` in `app.module.ts`
- git tag 20_order_item_animation

## csv export and chart
- `npm i c3` https://c3js.org/ then `npm i --save-dev @types/c3`
- add icon from `http://svgicons.sparkk.fr/`
- git tag 21_csv_export_and_chart_icon
