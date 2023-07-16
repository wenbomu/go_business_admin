import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {PermissionService} from "../../../services/permission.service";
import {RoleService} from "../../../services/role.service";
import {Router} from "@angular/router";
import {Permission} from "../../../interfaces/permission";

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit{
  form: FormGroup;
  permissions: Permission[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private permissionService: PermissionService,
    private roleService: RoleService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      permissions: this.formBuilder.array([])
    });

    this.permissionService.all().subscribe(
      permissions => {
        this.permissions = permissions;
        this.permissions.forEach(p => {
          this.permissionArray.push(
            this.formBuilder.group({
              value: false,
              id: p.id
            })
          );
        });
      }
    );
  }

  get permissionArray(): FormArray {
    return this.form.get('permissions') as FormArray;
  }

  submit(): void {
    const formData = this.form.getRawValue();
    console.log('formData', formData)

    const data = {
      name: formData.name,
      permissions: formData.permissions
        .filter(
          (p:any) => p.value === true)
        .map(
          (p:any) => p.id
        )
    };

    console.log('data = ', data)
    this.roleService.create(data)
      .subscribe(() => this.router.navigate(['/roles']));
  }
}
