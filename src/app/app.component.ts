import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { breadcrumbConfig } from "./config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public config = breadcrumbConfig;
  public advertisersConfig = this.config.advertisers;
  public campaignConfig = this.config.campaigns;
  public datepickerConfig = this.config.datePicker;
  public advertiserDropdownStyles = this.getAdvertiserDropdownStyle();
  public campaignDropdownStyles = this.getCampaignDropdownStyle();

  breadcrumbsForm: FormGroup;
  advertisers: any[] = [
    { id: "adv001", name: "Advertiser One" },
    { id: "adv002", name: "Advertiser Two" },
    { id: "adv003", name: "Advertiser Three" },
    { id: "adv004", name: "Advertiser Four" },
    { id: "adv005", name: "Advertiser Five" },
    { id: "adv006", name: "Advertiser Six" },
    { id: "adv007", name: "Advertiser Seven" },
    { id: "adv008", name: "Advertiser Eight" }
  ];
  campaigns: any[] = [
    { id: "cmp001", name: "Campaign One" },
    { id: "cmp002", name: "Campaign Two" },
    { id: "cmp003", name: "Campaign Three" },
    { id: "cmp004", name: "Campaign Four" },
    { id: "cmp005", name: "Campaign Five" },
    { id: "cmp006", name: "Campaign Six" },
    { id: "cmp007", name: "Campaign Seven" },
    { id: "cmp008", name: "Campaign Eight" }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.breadcrumbsForm = this.fb.group({
      selectedAdvertiserIds: [],
      selectedCampaignIds: []
    });
  }

  getAdvertiserDropdownStyle() {
    let styles = "";
    Object.keys(this.advertisersConfig.styles.dropDown).map((key) => {
      styles += `${key}: ${this.advertisersConfig.styles.dropDown[key]};`;
      return styles;
    });

    return styles;
  }

  getCampaignDropdownStyle() {
    let styles = "";
    Object.keys(this.advertisersConfig.styles.dropDown).map((key) => {
      styles += `${key}: ${this.advertisersConfig.styles.dropDown[key]};`;
      return styles;
    });

    return styles;
  }

  choosedDate(a, b, c) {
    console.log("choosedDate", a, b, c);
  }
}
