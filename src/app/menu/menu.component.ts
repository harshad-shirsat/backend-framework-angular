import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navigation: Array<any> = [{
    name: "Dashboard",
    classis: "active",
    sref: "",
    img: "../../img/dashboard.png",
    accessible: false,
    subnav: [{
      name: "Dashboard",
      link: "/sample",
      classis: "active",
      icon: "phone",
      accessible: false
    }, {
      name: "Reports",
      link: "#!/reporting",
      classis: "active",
      icon: "phone",
      accessible: false
    }]
  }, {
    name: "Customers",
    classis: "active",
    sref: "/sample",
    img: "../../img/customers.png",
    accessible: false
  }, {
    name: "Orders",
    classis: "active",
    sref: "/view/viewOrder",
    img: "../../img/orders.png",
    accessible: false
  }, {
    name: "Transactions",
    classis: "active",
    sref: "view/viewTransactions///",
    icon: "phone",
    accessible: false
  }, {
    name: "Delivery Requests",
    classis: "active",
    sref: "view/viewDeliveryRequest//",
    img: "../../img/deliveryrequest.png",
    accessible: false
  }, {
    name: "Inventory",
    classis: "active",
    sref: "#!/page/viewWarehouse//",
    img: "../../img/inventory.png",
    accessible: false
  }, {
    name: " Products",
    classis: "active",
    sref: "",
    img: "../../img/products.png",
    accessible: false,
    subnav: [{
      name: "Products",
      link: "#!/page/viewProduct//",
      classis: "active",
      icon: "phone",
      accessible: false
    },

    {
      name: "Category",
      link: "#!/page/viewCategory//",
      classis: "active",
      icon: "phone",
      accessible: false
    }, {
      name: "Sub Category",
      link: "#!/page/viewSubcategory//",
      classis: "active",
      icon: "phone",
      accessible: false
    }
    ]
  }, {
    name: "Configurations",
    classis: "active",
    sref: "",
    img: "../../img/configuration.png",
    accessible: false,
    subnav: [{
      name: "Acquisition Channels",
      link: "#!/page/viewAcquisitionChannel//",
      classis: "active",
      icon: "phone",
      accessible: false
    }, {
      name: "Address",
      link: "#!/viewAddress///",
      classis: "active",
      icon: "user",
      accessible: false
    }, {
      name: "App Version",
      sref: "appVersion",
      classis: "active",
      icon: "user",
      accessible: false
    }, {
      name: "Cluster",
      classis: "active",
      link: "#!/page/viewCluster//",
      icon: "phone",
      accessible: false
    }, {
      name: "Holidays",
      link: "#!/page/viewHoliday//",
      classis: "active",
      icon: "phone",
      accessible: false
    }, {
      name: "Pincodes",
      link: "#!/page/viewPincode//",
      classis: "active",
      icon: "phone",
      accessible: false
    }, {
      name: "User Sub Type",
      link: "#!/page/viewUserSubtype//",
      classis: "active",
      icon: "user",
      accessible: false
    }, {
      name: "Delivery Instruction",
      link: "#!/page/viewDeliveryInstruction//",
      classis: "active",
      icon: "user",
      accessible: false
    }]
  }, {
    name: "Staff Management",
    classis: "active",
    sref: "",
    img: "../../img/assetMgmt.png",
    accessible: false,
    subnav: [{
      name: "Staff Member",
      link: "#!/page/viewStaff//",
      classis: "active",
      icon: "phone",
      accessible: false
    }, {
      name: "Staff Roles",
      link: "#!/page/viewRole//",
      classis: "active",
      icon: "phone",
      accessible: false
    }]

  }, {
    name: "Go to Staff Management",
    classis: "active",
    sref: "#!/admin/dashboard",
    img: "../../img/customers.png",
    accessible: false
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
