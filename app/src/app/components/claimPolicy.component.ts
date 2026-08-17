// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-claimPolicy',
  templateUrl: './claimPolicy.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class claimPolicyComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.claimPolicy(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  claimPolicy(bh) {
    try {
      bh = this.initializeClaimP(bh);
      //appendnew_next_claimPolicy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2c8bcecf68364a8f');
    }
  }

  policySearchTypeChanged(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.updateSearchLabel(bh);
      //appendnew_next_policySearchTypeChanged
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_986c9d74f4254746');
    }
  }

  fetchPolicy(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.preparePolicySearch(bh);
      //appendnew_next_fetchPolicy
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_93ee1e4422354802');
    }
  }

  validateField(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.validateFieldScript(bh);
      //appendnew_next_validateField
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_001366197e554bb8');
    }
  }

  onSubmitClaim(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.validateClaim(bh);
      //appendnew_next_onSubmitClaim
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_77bb1ced32ef49c4');
    }
  }

  clearClaim(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.clearClaimScript(bh);
      //appendnew_next_clearClaim
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a7dde812c24649a2');
    }
  }
  //appendnew_flow_claimPolicyComponent_start

  initializeClaimP(bh) {
    try {
      const page =
        this.page; /* =========================================================
   FNOL PAGE INITIALIZATION
   ========================================================= */

      /* Policy search */
      page.searchBy = 'POLICY_NUMBER';
      page.searchValue = '';

      /* Controls visibility of everything below Policy Search */
      page.policyFound = false;

      /* Search options */
      page.searchByOptions = [
        {
          value: 'POLICY_NUMBER',
          label: 'Policy Number',
        },
        {
          value: 'REGISTRATION',
          label: 'Registration Number',
        },
        {
          value: 'CUSTOMER_ID',
          label: 'Customer ID',
        },
      ];

      /* Claimant */
      page.claimantTypes = [
        {
          value: 'INSURED',
          label: 'Insured / Policyholder',
        },
        {
          value: 'DRIVER',
          label: 'Driver',
        },
        {
          value: 'THIRD_PARTY',
          label: 'Third Party',
        },
        {
          value: 'REPRESENTATIVE',
          label: 'Representative',
        },
      ];

      /* Preferred contact */
      page.preferredContacts = [
        {
          value: 'PHONE',
          label: 'Phone',
        },
        {
          value: 'EMAIL',
          label: 'Email',
        },
        {
          value: 'SMS',
          label: 'SMS',
        },
      ];

      /* Loss type */
      page.lossTypes = [
        {
          value: 'COLLISION',
          label: 'Collision',
        },
        {
          value: 'THEFT',
          label: 'Theft',
        },
        {
          value: 'FIRE',
          label: 'Fire',
        },
        {
          value: 'NATURAL_DISASTER',
          label: 'Natural Disaster',
        },
        {
          value: 'OTHER',
          label: 'Other',
        },
      ];

      /* Driver licence */
      page.driverLicenceStatuses = [
        {
          value: 'VALID',
          label: 'Valid',
        },
        {
          value: 'EXPIRED',
          label: 'Expired',
        },
        {
          value: 'SUSPENDED',
          label: 'Suspended',
        },
        {
          value: 'NOT_AVAILABLE',
          label: 'Not Available',
        },
      ];

      /* Validation messages */
      page.policyError = '';
      page.claimantError = '';
      page.lossError = '';
      page.driverError = '';
      page.incidentError = '';
      page.evidenceError = '';

      /* Optional general message */
      page.successMessage = '';
      page.errorMessage = '';
      bh = this.claimPPageVariables(bh);
      //appendnew_next_initializeClaimP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_366843f8e5104b47');
    }
  }

  claimPPageVariables(bh) {
    try {
      this.page.policyFound = false;
      this.page.claimId = undefined;
      this.page.claimStatus = undefined;
      this.page.snackBarMessage = undefined;
      //appendnew_next_claimPPageVariables
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_55050202ff9146db');
    }
  }

  updateSearchLabel(bh) {
    try {
      const page = this.page;
      page.policyError = '';
      //appendnew_next_updateSearchLabel
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_493a50f7bdb64807');
    }
  }

  preparePolicySearch(bh) {
    try {
      const page = this.page;
      page.policyError = '';
      page.policyFound = false;

      const value = (page.searchValue ?? '').toString().trim();

      if (!value) {
        page.policyError = 'Search value is required';
        bh.local.searchValid = false;
        return;
      }

      bh.local.searchValid = true;
      bh.local.searchBy = page.searchBy;
      bh.local.searchValue = value;

      /* Replace only the URL path/query with your existing Policy API contract. */
      bh.local.policyURL =
        bh.system.environment.properties.ssdURL +
        '/policy?searchBy=' +
        encodeURIComponent(bh.local.searchBy) +
        '&searchValue=' +
        encodeURIComponent(bh.local.searchValue);
      bh = this.getPolicy(bh);
      //appendnew_next_preparePolicySearch
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2df784fa3fba46c5');
    }
  }

  async getPolicy(bh) {
    try {
      let requestOptions = {
        url: bh.local.policyURL,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
        withCredentials: true,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.mapPolicyResponse(bh);
      //appendnew_next_getPolicy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5fe86adb0b514569');
    }
  }

  mapPolicyResponse(bh) {
    try {
      const page = this.page;
      const r = bh.local.response || {};
      const p = r.data || r.payload || r;

      var element = document.querySelector('.policy-details');
      if (!p || !p.policyNumber) {
        page.policyFound = false;
        page.policyResponseCode = '404';
        page.policyMessage = 'Policy not found';

        if (element) {
          element.classList.add('policy-details-show');
        }
      } else {
        if (element) {
          element.classList.remove('policy-details-show');
        }
        page.policyFound = true;
        page.policyResponseCode = '201';
        page.policyError = '';
        page.policyNumber = p.policyNumber || '';
        page.insuredName = p.insuredName || p.insured || '';
        page.vehicleRegistration =
          p.vehicleRegistration || p.registrationNumber || '';
        page.coverageType = p.coverageType || p.coverage || '';
        page.sumInsured = Number(p.sumInsured || 0);
        page.excess = Number(p.excess || p.deductible || 0);
      }
      bh = this.policyError(bh);
      //appendnew_next_mapPolicyResponse
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_024c21b6c79244f9');
    }
  }

  policyError(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.policyMessage, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      //appendnew_next_policyError
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6071bee02ffc40c7');
    }
  }

  validateFieldScript(bh) {
    try {
      const page = this.page;
      const field = bh.input.event?.target?.name || '';
      const value = (bh.input.event?.target?.value ?? '').toString().trim();

      page[field + 'Error'] = '';

      switch (field) {
        case 'search_value':
          if (!value) page.policyError = 'Search value is required';
          break;

        case 'contact_value':
          if (!value) page.claimantError = 'Contact Value is required';
          break;

        case 'loss_location':
          if (!value) page.lossError = 'Loss Location is required';
          break;

        case 'loss_description':
          if (!value) page.lossError = 'Loss Description is required';
          else if (value.length < 20)
            page.lossError = 'Minimum 20 characters required';
          break;

        case 'driver_name':
          if (!value) page.driverError = 'Driver Name is required';
          break;

        case 'police_fir_reference':
          if (page.injuryInvolved === true && !value)
            page.incidentError =
              'Police / FIR Reference is required when injury is involved';
          break;

        case 'estimated_amount':
          if (!value || Number(value) <= 0)
            page.incidentError = 'Estimated Loss Amount must be greater than 0';
          break;
      }
      //appendnew_next_validateFieldScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f622c9ec0eeb4b65');
    }
  }

  validateClaim(bh) {
    try {
      const page = this.page;
      page.policyError = '';
      page.claimantError = '';
      page.lossError = '';
      page.driverError = '';
      page.incidentError = '';
      page.evidenceError = '';

      bh.local.isValid = true;

      if (!page.policyFound) {
        page.policyError = 'Search and select a valid policy before submitting';
        bh.local.isValid = false;
      }

      if (!page.claimantType) {
        page.claimantError = 'Claimant Type is required';
        bh.local.isValid = false;
      }

      if (!page.preferredContact) {
        page.claimantError = 'Preferred Contact is required';
        bh.local.isValid = false;
      }

      if (!page.contactValue) {
        page.claimantError = 'Contact Value is required';
        bh.local.isValid = false;
      }

      if (!page.lossDateTime) {
        page.lossError = 'Loss Date & Time is required';
        bh.local.isValid = false;
      } else if (new Date(page.lossDateTime) > new Date()) {
        page.lossError = 'Loss Date & Time cannot be in the future';
        bh.local.isValid = false;
      }

      if (!page.lossLocation) {
        page.lossError = 'Loss Location is required';
        bh.local.isValid = false;
      }

      if (!page.lossType) {
        page.lossError = 'Loss Type is required';
        bh.local.isValid = false;
      }

      if (!page.lossDescription || page.lossDescription.trim().length < 20) {
        page.lossError = 'Loss Description must contain at least 20 characters';
        bh.local.isValid = false;
      }

      if (!page.driverName) {
        page.driverError = 'Driver Name is required';
        bh.local.isValid = false;
      }

      if (!page.driverLicenceStatus) {
        page.driverError = 'Driver Licence Status is required';
        bh.local.isValid = false;
      }

      if (!page.estimatedAmount || Number(page.estimatedAmount) <= 0) {
        page.incidentError = 'Estimated Loss Amount must be greater than 0';
        bh.local.isValid = false;
      }

      /* Conditional POC validations */
      if (page.lossType === 'COLLISION' && !page.damagePhotos) {
        page.evidenceError = 'Damage Photos are mandatory for Collision';
        bh.local.isValid = false;
      }

      if (Number(page.estimatedAmount) > 25000 && !page.repairEstimate) {
        page.evidenceError = 'Repair Estimate is mandatory above 25,000';
        bh.local.isValid = false;
      }

      if (page.lossType === 'THEFT' && !page.policeReport) {
        page.evidenceError = 'Police Report is mandatory for Theft';
        bh.local.isValid = false;
      }

      if (page.injuryInvolved === true && !page.policeFirReference) {
        page.incidentError =
          'Police / FIR Reference is required when injury is involved';
        bh.local.isValid = false;
      }

      if (bh.local.isValid) {
        bh.local.requestBody = {
          policyNumber: page.policyNumber,
          claimantType: page.claimantType,
          lossDateTime: page.lossDateTime,
          lossLocation: page.lossLocation,
          lossType: page.lossType,
          lossDescription: page.lossDescription,
          driverName: page.driverName,
          driverLicenceStatus: page.driverLicenceStatus,
          policeFirReference: page.policeFirReference,
          estimatedLossAmount: Number(page.estimatedAmount),
          vehicleDrivable: page.vehicleDrivable,
          thirdPartyInvolved: page.thirdPartyInvolved,
          injuryInvolved: page.injuryInvolved,
          evidence: {
            damagePhotos: page.damagePhotos,
            repairEstimate: page.repairEstimate,
            policeReport: page.policeReport,
            drivingLicence: page.drivingLicence,
            registration: page.registration,
            thirdPartyDetails: page.thirdPartyDetails,
          },
          preferredContact: page.preferredContact,
          contactValue: page.contactValue,
        };

        bh.local.claimURL = bh.system.environment.properties.ssdURL + '/claims';
      }
      bh = this.claimValidationSwitch(bh);
      //appendnew_next_validateClaim
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_00b338fb6e454b61');
    }
  }

  claimValidationSwitch(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
      } else if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.createClaim(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6805ad038a6144b5');
    }
  }

  async createClaim(bh) {
    try {
      let requestOptions = {
        url: bh.local.claimURL,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.requestBody,
        withCredentials: true,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.mapClaimResponse(bh);
      //appendnew_next_createClaim
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b39f940bd53b4d99');
    }
  }

  mapClaimResponse(bh) {
    try {
      const page = this.page;
      const r = bh.local.response || {};
      const p = r.data || r.payload || r;

      page.claimId = p.claimId || p.claim_id || '';
      page.claimStatus = p.status || 'SUBMITTED';
      page.snackBarMessage = page.claimId
        ? 'Claim ' + page.claimId + ' submitted successfully'
        : 'Claim submitted successfully';
      bh = this.claimMessage(bh);
      //appendnew_next_mapClaimResponse
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_68c1cf6192144d8a');
    }
  }

  claimMessage(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.snackBarMessage, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      //appendnew_next_claimMessage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f71740ac1a3c44cd');
    }
  }

  clearClaimScript(bh) {
    try {
      const page = this.page;
      page.searchValue = '';
      page.policyFound = false;
      page.policyError = '';
      page.claimantError = '';
      page.lossError = '';
      page.driverError = '';
      page.incidentError = '';
      page.evidenceError = '';
      page.claimId = '';
      page.claimStatus = '';
      //appendnew_next_clearClaimScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fe43999d223e42f6');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_claimPolicyComponent_Catch
}
