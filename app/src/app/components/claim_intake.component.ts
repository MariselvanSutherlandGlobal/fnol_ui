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
  selector: 'bh-claim_intake',
  templateUrl: './claim_intake.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class claim_intakeComponent {
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
      this.sd_981e8380eaf6440c(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_981e8380eaf6440c(bh) {
    try {
      bh = this.sd_2e3ea1f9ab934935(bh);
      //appendnew_next_sd_981e8380eaf6440c
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_981e8380eaf6440c');
    }
  }

  fetchPolicy(policyNumber: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { policyNumber };
      bh.local = {};
      bh = this.preparePolicyFetch(bh);
      //appendnew_next_fetchPolicy
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bb887902028c4f93');
    }
  }

  validateField(fieldName = '', ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { fieldName };
      bh.local = {};
      bh = this.validateFieldScript(bh);
      //appendnew_next_validateField
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e571d2e684304195');
    }
  }

  onEvidenceChange(fieldName = '', ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { fieldName };
      bh.local = {};
      bh = this.onEvidenceChangeScript(bh);
      //appendnew_next_onEvidenceChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_01ae401dbb1b4b98');
    }
  }

  clearForm(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.clearFNOLForm(bh);
      //appendnew_next_clearForm
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b09bbaff38024522');
    }
  }

  onPolicySearchTypeChange(policySearchType: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { policySearchType };
      bh.local = {};
      bh = this.searchTypeChangeScript(bh);
      //appendnew_next_onPolicySearchTypeChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4yRBINKXggckPJ2R');
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
      bh = this.validateFNOLSubmit(bh);
      //appendnew_next_onSubmitClaim
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N9xKhDrPt59zmPcI');
    }
  }

  validateTextField(fieldName = '', ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { fieldName };
      bh.local = {};
      bh = this.validateTextFieldScript(bh);
      //appendnew_next_validateTextField
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gmQdzuuvDcZ1i3wO');
    }
  }
  //appendnew_flow_claim_intakeComponent_start

  sd_2e3ea1f9ab934935(bh) {
    try {
      this.page.apiBaseUrl = 'https://fnolapi.neutrinos-apps.com/api';
      this.page.policyApiUrl = undefined;
      this.page.claimApiUrl = undefined;
      this.page.caseServiceUrl = undefined;
      this.page.policyNumber = undefined;
      this.page.policyFetched = false;
      this.page.policyLoading = false;
      this.page.submitting = false;
      this.page.submitted = false;
      this.page.today = undefined;
      this.page.validationErrors = {};
      this.page.coveredPerils = [];
      this.page.currency = 'INR';
      this.page.submitError = undefined;
      this.page.submitSuccess = false;
      this.page.submitMessage = undefined;
      this.page.claimId = undefined;
      this.page.caseId = undefined;
      bh = this.prepareMasterdataUrl(bh);
      //appendnew_next_sd_2e3ea1f9ab934935
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2e3ea1f9ab934935');
    }
  }

  prepareMasterdataUrl(bh) {
    try {
      const page = this.page;
      bh.local.reelsMasterUrl =
        bh.system.environment.properties.ssdURL + '/master-data';
      console.log('reelsMasterUrl', bh.local.reelsMasterUrl);
      bh = this.sd_PhHEfSQ8OlZDtpng(bh);
      //appendnew_next_prepareMasterdataUrl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SnEHKiQuRCu1KsdO');
    }
  }

  async sd_PhHEfSQ8OlZDtpng(bh) {
    try {
      let requestOptions = {
        url: bh.local.reelsMasterUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.records = await this.sdService.nHttpRequest(requestOptions);
      bh = this.initialiseFnol(bh);
      //appendnew_next_sd_PhHEfSQ8OlZDtpng
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PhHEfSQ8OlZDtpng');
    }
  }

  initialiseFnol(bh) {
    try {
      const page = this.page;
      console.log('records masterdata', bh.local.records);

      console.log('proposalResponse on Init', bh.local.proposalResponse);

      page.today = new Date();

      page.policyApiUrl = bh.system.environment.properties.ssdURL + '/policies';

      page.claimApiUrl = bh.system.environment.properties.ssdURL + '/claims';

      page.caseServiceUrl =
        bh.system.environment.properties.ssdURL + '/case-service/cases';

      page.policyFetched = false;
      page.policyLoading = false;
      page.submitting = false;
      page.submitted = false;
      page.submitSuccess = false;
      page.submitError = '';
      page.submitMessage = '';
      page.validationErrors = {};

      /*
       * ============================================================
       * FNOL MASTER DATA
       * ============================================================
       *
       * Convert API master-data response into the format:
       *
       * [
       *   {
       *     label: "Display Name",
       *     value: "CODE"
       *   }
       * ]
       *
       * Only Active = "Y" records are included.
       */

      // Default empty arrays
      page.claimantTypes = [];
      page.lossTypes = [];
      page.lossLocations = [];
      page.licenceStatuses = [];

      /*
       * Get master-data response
       *
       * Expected structure:
       *
       * bh.local.records.data.claimantTypes
       * bh.local.records.data.lossTypes
       * bh.local.records.data.lossLocations
       * bh.local.records.data.driverLicenceStatuses
       */

      if (
        bh.local.records &&
        bh.local.records.success === true &&
        bh.local.records.data
      ) {
        var masterData = bh.local.records.data;

        /*
         * ------------------------------------------------------------
         * Claimant Types
         * ------------------------------------------------------------
         *
         * API:
         * Display Name     -> label
         * Claimant Type    -> value
         */

        if (Array.isArray(masterData.claimantTypes)) {
          page.claimantTypes = masterData.claimantTypes
            .filter(function (item) {
              return item['Active'] === 'Y';
            })
            .map(function (item) {
              return {
                label: item['Display Name'],
                value: item['Claimant Type'],
              };
            });
        }

        /*
         * ------------------------------------------------------------
         * Loss Types
         * ------------------------------------------------------------
         *
         * API:
         * Display Name     -> label
         * Loss Type Code   -> value
         */

        if (Array.isArray(masterData.lossTypes)) {
          page.lossTypes = masterData.lossTypes
            .filter(function (item) {
              return item['Active'] === 'Y';
            })
            .map(function (item) {
              return {
                label: item['Display Name'],
                value: item['Loss Type Code'],
              };
            });
        }

        /*
         * ------------------------------------------------------------
         * Loss Locations
         * ------------------------------------------------------------
         *
         * API:
         * Display Name     -> label
         * Location Code    -> value
         */

        if (Array.isArray(masterData.lossLocations)) {
          page.lossLocations = masterData.lossLocations
            .filter(function (item) {
              return item['Active'] === 'Y';
            })
            .map(function (item) {
              return {
                label: item['Display Name'],
                value: item['Location Code'],
              };
            });
        }

        /*
         * ------------------------------------------------------------
         * Driver Licence Statuses
         * ------------------------------------------------------------
         *
         * API:
         * Display Name      -> label
         * Licence Status    -> value
         */

        if (Array.isArray(masterData.driverLicenceStatuses)) {
          page.licenceStatuses = masterData.driverLicenceStatuses
            .filter(function (item) {
              return item['Active'] === 'Y';
            })
            .map(function (item) {
              return {
                label: item['Display Name'],
                value: item['Licence Status'],
              };
            });
        }
      } else {
        console.log(
          'FNOL master data is not available or API response is unsuccessful'
        );
      }

      /*
       * ============================================================
       * LOG FINAL DROPDOWN DATA
       * ============================================================
       */

      console.log('claimantTypes dropdown', page.claimantTypes);

      console.log('lossTypes dropdown', page.lossTypes);

      console.log('lossLocations dropdown', page.lossLocations);

      console.log('licenceStatuses dropdown', page.licenceStatuses);

      /*
       * ============================================================
       * YES / NO OPTIONS
       * ============================================================
       */

      page.yesNoOptions = [
        {
          label: 'Yes',
          value: 'YES',
        },
        {
          label: 'No',
          value: 'NO',
        },
      ];

      /*
       * ============================================================
       * PREFERRED CONTACT OPTIONS
       * ============================================================
       */

      page.preferredContacts = [
        {
          label: 'Email',
          value: 'EMAIL',
        },
        {
          label: 'SMS',
          value: 'SMS',
        },
        {
          label: 'Phone',
          value: 'PHONE',
        },
      ];

      /*
       * ============================================================
       * POLICY SEARCH TYPES
       * ============================================================
       */

      page.policySearchTypes = [
        {
          label: 'Policy Number',
          value: 'POLICY_NUMBER',
        },
        {
          label: 'Registration Number',
          value: 'REGISTRATION_NUMBER',
        },
        {
          label: 'Customer ID',
          value: 'CUSTOMER_ID',
        },
      ];

      page.searchType = 'POLICY_NUMBER';

      page.searchTypeLabel = 'Policy Number';

      page.searchTypePlaceholder = 'Enter Policy Number';

      page.searchValue = '';

      page.searchTypeError = '';

      page.searchValueError = '';

      page.preferredContactValue = '';

      page.preferredContactValueError = '';
      //appendnew_next_initialiseFnol
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ffc37ff7978c4422');
    }
  }

  preparePolicyFetch(bh) {
    try {
      const page = this.page;
      const searchType = (bh.input.searchType || page.searchType || '')
        .toString()
        .trim();

      const searchValue = (bh.input.searchValue || page.searchValue || '')
        .toString()
        .trim();

      page.searchType = searchType;
      page.searchValue = searchValue;

      page.searchTypeError = '';
      page.searchValueError = '';
      page.policyError = '';
      page.policyFetched = false;
      page.policyLoading = false;

      /* -----------------------------------------
   Validate Search Type
----------------------------------------- */

      if (!searchType) {
        page.searchTypeError = 'Search Type is required';
      }

      const validSearchTypes = [
        'POLICY_NUMBER',
        'REGISTRATION_NUMBER',
        'CUSTOMER_ID',
      ];

      if (validSearchTypes.indexOf(searchType) === -1) {
        page.searchTypeError = 'Invalid Search Type';
      }
      /* -----------------------------------------
   Validate Search Value
----------------------------------------- */

      if (!searchValue) {
        if (searchType === 'POLICY_NUMBER') {
          page.searchValueError = 'Policy Number is required';
        } else if (searchType === 'REGISTRATION_NUMBER') {
          page.searchValueError = 'Registration Number is required';
        } else if (searchType === 'CUSTOMER_ID') {
          page.searchValueError = 'Customer ID is required';
        } else {
          page.searchValueError = 'Search Value is required';
        }
      }

      /* -----------------------------------------
   Validate Format
----------------------------------------- */

      if (searchType === 'POLICY_NUMBER') {
        if (!/^[A-Za-z0-9\-/]+$/.test(searchValue)) {
          page.searchValueError = 'Enter a valid policy number';
        }
      } else if (searchType === 'REGISTRATION_NUMBER') {
        if (!/^[A-Za-z0-9\-/ ]+$/.test(searchValue)) {
          page.searchValueError = 'Enter a valid registration number';
        }
      } else if (searchType === 'CUSTOMER_ID') {
        if (!/^[A-Za-z0-9\-/]+$/.test(searchValue)) {
          page.searchValueError = 'Enter a valid customer ID';
        }
      }

      if (!searchValue || !searchType) {
        return;
      }

      /* -----------------------------------------
   Prepare HTTP URL
----------------------------------------- */

      page.policyLoading = true;

      bh.local.policyApiUrl =
        bh.system.environment.properties.ssdURL +
        '/policies/search' +
        '?searchType=' +
        encodeURIComponent(searchType) +
        '&searchValue=' +
        encodeURIComponent(searchValue);

      console.log('Policy Search URL:', bh.local.policyApiUrl);

      bh = this.getPolicy(bh);
      //appendnew_next_preparePolicyFetch
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ebc24b520c374612');
    }
  }

  async getPolicy(bh) {
    try {
      let requestOptions = {
        url: bh.local.policyApiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.mapPolicyResponse(bh);
      //appendnew_next_getPolicy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a90b35cc34ff41bc');
    }
  }

  mapPolicyResponse(bh) {
    try {
      const page = this.page;
      /* ============================================================
       * POLICY RESPONSE HANDLING
       * ============================================================ */

      page.policyLoading = false;

      const r = bh.local.response || {};

      const policies = Array.isArray(r.policies) ? r.policies : [];

      /* ============================================================
       * CLEAR PREVIOUS POLICY ERROR
       * ============================================================ */

      page.policyMessage = '';

      /* ============================================================
       * NO POLICY FOUND / API FAILURE
       * ============================================================ */

      if (!r.success || !Array.isArray(r.policies) || policies.length === 0) {
        page.policyFetched = false;

        page.policyId = '';

        page.policyMessage = 'Policy not found.';

        console.log('Policy search result: No policy found');

        console.log('Policy API response:', r);

        console.log('Policy Message:', page.policyMessage);
      } else {
        /* ============================================================
         * FIRST POLICY
         * ============================================================ */

        const p = policies[0];

        /* ============================================================
         * POLICY IDENTITY
         * ============================================================ */

        page.policyId = p.id || '';

        page.policyNumber = p.policyNumber || '';

        page.customerId = p.customerId || '';

        /* ============================================================
         * POLICY DETAILS
         * ============================================================ */

        page.policyStatus = p.policyStatus || '';

        page.policyStartDate = p.policyStartDate || '';

        page.policyEndDate = p.policyEndDate || '';

        page.insuredName = p.insuredName || '';

        /* ============================================================
         * VEHICLE
         * ============================================================ */

        page.vehicleRegistration = p.vehicleRegistration || '';

        page.vehicleMake = p.vehicleMake || '';

        page.vehicleModel = p.vehicleModel || '';

        page.vehicleYear = p.vehicleYear || '';

        /* ============================================================
         * VEHICLE MAKE + MODEL
         * ============================================================ */

        page.vehicleMakeModel = [page.vehicleMake, page.vehicleModel]
          .filter(function (v) {
            return v !== null && v !== undefined && v !== '';
          })
          .join(' ');

        /* ============================================================
         * COVERAGE
         * ============================================================ */

        page.coverageType = p.coverageType || '';

        page.coveredPerils = Array.isArray(p.coveredPerils)
          ? p.coveredPerils
          : [];

        page.excess = p.excessAmount ?? '';

        page.sumInsured = p.sumInsured ?? '';

        page.currency = p.currency || 'INR';

        /* ============================================================
         * SUCCESS
         * ============================================================ */

        page.policyFetched = true;

        page.policyMessage = 'Policy fetched successfully';

        /* ============================================================
         * DEBUG
         * ============================================================ */

        console.log('Policy fetched successfully');

        console.log('Policy:', p);

        console.log('Policy ID:', page.policyId);

        console.log('Policy Number:', page.policyNumber);

        console.log('Policy Message:', page.policyMessage);

        console.log('Policy Fetched:', page.policyFetched);
      }
      bh = this.sd_stThBzJxwLbbzVPX(bh);
      //appendnew_next_mapPolicyResponse
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4460873e786d46da');
    }
  }

  sd_stThBzJxwLbbzVPX(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.policyMessage, 'ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      //appendnew_next_sd_stThBzJxwLbbzVPX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_stThBzJxwLbbzVPX');
    }
  }

  validateFieldScript(bh) {
    try {
      const page = this.page;
      /* ============================================================
       * FIELD VALIDATION - ON BLUR / CHANGE
       * ============================================================ */

      console.log('Field validation started');

      /* ============================================================
       * GET FIELD
       * ============================================================ */

      const f = bh.input.fieldName;

      const v = page[f];

      const s = v == null ? '' : v.toString().trim();

      let e = '';

      /* ============================================================
       * POLICY NUMBER
       * ============================================================ */

      if (f === 'policyNumber') {
        if (!s) {
          e = 'Policy Number is required';
        } else if (!page.policyFetched || !page.policyId) {
          e = 'Fetch a valid policy before submitting';
        }
      } else if (f === 'claimantType') {

      /* ============================================================
       * CLAIMANT TYPE
       * ============================================================ */
        if (!s) {
          e = 'Claimant Type is required';
        }
      } else if (f === 'lossDate') {

      /* ============================================================
       * LOSS DATE
       * ============================================================ */
        if (!s) {
          e = 'Loss Date & Time is required';
        } else {
          const lossDate = new Date(s);

          if (isNaN(lossDate.getTime())) {
            e = 'Enter a valid Loss Date & Time';
          } else if (lossDate > new Date()) {
            e = 'Loss Date & Time cannot be in the future';
          } else if (
            page.policyFetched &&
            page.policyStartDate &&
            page.policyEndDate &&
            (lossDate < new Date(page.policyStartDate) ||
              lossDate > new Date(page.policyEndDate))
          ) {
            e = 'Loss Date & Time must be within the policy period';
          }
        }
      } else if (f === 'lossLocation') {

      /* ============================================================
       * LOSS LOCATION
       * ============================================================ */
        if (!s) {
          e = 'Loss Location is required';
        }
      } else if (f === 'lossType') {

      /* ============================================================
       * LOSS TYPE
       * ============================================================ */
        if (!s) {
          e = 'Loss Type is required';
        }
      } else if (f === 'lossDescription') {

      /* ============================================================
       * LOSS DESCRIPTION
       * ============================================================ */
        if (!s) {
          e = 'Loss Description is required';
        } else if (s.length < 20) {
          e = 'Loss Description must contain at least 20 characters';
        }
      } else if (f === 'driverName') {

      /* ============================================================
       * DRIVER NAME
       * ============================================================ */
        if (!s) {
          e = 'Driver Name is required';
        }
      } else if (f === 'licenceStatus') {

      /* ============================================================
       * LICENCE STATUS
       * ============================================================ */
        if (!s) {
          e = 'Licence Status is required';
        }
      } else if (

      /* ============================================================
       * YES / NO FIELDS
       * ============================================================ */
        f === 'vehicleDrivable' ||
        f === 'thirdPartyFlag' ||
        f === 'injuryFlag' ||
        f === 'policeReportAvailable' ||
        f === 'repairEstimateAvailable'
      ) {
        if (s !== 'YES' && s !== 'NO') {
          e = 'Select Yes or No';
        }
      } else if (f === 'policeReportReference') {

      /* ============================================================
       * POLICE REPORT REFERENCE
       * ============================================================ */
        if (page.policeReportAvailable === 'YES' && !s) {
          e = 'Police / FIR reference is required';
        }
      } else if (f === 'estimatedAmount') {

      /* ============================================================
       * ESTIMATED AMOUNT
       * ============================================================ */
        if (!s) {
          e = 'Estimated Repair / Loss Amount is required';
        } else if (!isFinite(Number(v)) || Number(v) <= 0) {
          e = 'Estimated Repair / Loss Amount must be greater than 0';
        }
      } else if (f === 'preferredContact') {

      /* ============================================================
       * PREFERRED CONTACT
       * ============================================================ */
        if (!s) {
          e = 'Preferred Contact is required';
        } else {
          const validContacts = ['EMAIL', 'SMS', 'PHONE'];

          if (validContacts.indexOf(s) === -1) {
            e = 'Select a valid Preferred Contact';
          }
        }
      } else if (f === 'preferredContactValue') {

      /* ============================================================
       * PREFERRED CONTACT VALUE
       *
       * EMAIL -> test@adasa.com
       * PHONE -> 9837373638
       * SMS   -> 9898282822
       * ============================================================ */
        console.log('====================================');

        console.log('Validating Preferred Contact Value');

        console.log('Preferred Contact:', page.preferredContact);

        console.log('Preferred Contact Value:', s);

        /* --------------------------------------------------------
         * REQUIRED
         * -------------------------------------------------------- */

        if (!s) {
          e = 'Preferred Contact Value is required';
        } else if (page.preferredContact === 'EMAIL') {

        /* --------------------------------------------------------
         * EMAIL
         * -------------------------------------------------------- */
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!emailPattern.test(s)) {
            e = 'Enter a valid email address';
          }
        } else if (page.preferredContact === 'PHONE') {

        /* --------------------------------------------------------
         * PHONE
         * -------------------------------------------------------- */
          const phonePattern = /^[0-9]{10}$/;

          if (!phonePattern.test(s)) {
            e = 'Enter a valid 10-digit mobile number';
          }
        } else if (page.preferredContact === 'SMS') {

        /* --------------------------------------------------------
         * SMS
         * -------------------------------------------------------- */
          const smsPattern = /^[0-9]{10}$/;

          if (!smsPattern.test(s)) {
            e = 'Enter a valid 10-digit mobile number';
          }
        } else {

        /* --------------------------------------------------------
         * CONTACT TYPE NOT SELECTED
         * -------------------------------------------------------- */
          e = 'Select Preferred Contact first';
        }

        console.log('Preferred Contact Value Error:', e);
      }

      /* ============================================================
       * UPDATE FIELD ERROR
       * ============================================================ */

      page[f + 'Error'] = e;

      /* ============================================================
       * ENSURE VALIDATION ERROR OBJECT
       * ============================================================ */

      if (!page.validationErrors) {
        page.validationErrors = {};
      }

      /* ============================================================
       * UPDATE VALIDATION ERRORS
       * ============================================================ */

      if (e) {
        page.validationErrors[f] = e;
      } else {
        /*
         * Clear the old error completely.
         */

        page.validationErrors[f] = '';

        delete page.validationErrors[f];
      }

      /* ============================================================
       * RECALCULATE FORM VALIDITY
       * ============================================================ */

      let hasErrors = false;

      Object.keys(page.validationErrors || {}).forEach(function (key) {
        const error = page.validationErrors[key];

        if (error && error.toString().trim() !== '') {
          hasErrors = true;
        }
      });

      bh.local.isValid = !hasErrors;

      /* ============================================================
       * DEBUG
       * ============================================================ */

      console.log('Field:', f);

      console.log('Value:', s);

      console.log('Field Error:', e);

      console.log('Page Error:', page[f + 'Error']);

      console.log('Validation Errors:', page.validationErrors);

      console.log('Form Valid:', bh.local.isValid);

      console.log('====================================');
      //appendnew_next_validateFieldScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_01b5c55809d54805');
    }
  }

  onEvidenceChangeScript(bh) {
    try {
      const page = this.page;
      if (
        bh.input.fieldName === 'policeReportAvailable' &&
        page.policeReportAvailable !== 'YES'
      ) {
        page.policeReportReference = '';
        page.policeReportReferenceError = '';
      }
      page[bh.input.fieldName + 'Error'] = '';

      //appendnew_next_onEvidenceChangeScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c2686ed2fff44cdb');
    }
  }

  clearFNOLForm(bh) {
    try {
      const page = this.page;
      const api = page.apiBaseUrl;
      [
        'policyNumber',
        'claimantType',
        'lossDate',
        'lossLocation',
        'lossType',
        'lossDescription',
        'driverName',
        'licenceStatus',
        'vehicleDrivable',
        'thirdPartyFlag',
        'injuryFlag',
        'policeReportAvailable',
        'policeReportReference',
        'repairEstimateAvailable',
        'evidenceReference',
        'estimatedAmount',
        'preferredContact',
      ].forEach((k) => {
        page[k] = '';
        page[k + 'Error'] = '';
      });
      [
        'policyStatus',
        'policyStartDate',
        'policyEndDate',
        'insuredName',
        'vehicleRegistration',
        'vehicleMakeModel',
        'coverageType',
        'coverageLimit',
        'sumInsured',
        'excess',
        'claimId',
        'caseId',
      ].forEach((k) => (page[k] = ''));
      page.coveredPerils = [];
      page.policyFetched = false;
      page.policyLoading = false;
      page.submitting = false;
      page.submitSuccess = false;
      page.submitError = '';
      page.submitMessage = '';
      page.validationErrors = {};
      page.apiBaseUrl = api;

      //appendnew_next_clearFNOLForm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_22d752e29c2243e7');
    }
  }

  frontendCatchScript(bh) {
    try {
      const page = this.page;
      page.submitting = false;
      page.policyLoading = false;
      const msg =
        (bh.error && (bh.error.message || bh.error.error)) ||
        'Unexpected technical error.';
      if (page.submitted) page.submitError = msg;
      else page.policyError = msg;

      //appendnew_next_frontendCatchScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_22b10997ad734683');
    }
  }

  searchTypeChangeScript(bh) {
    try {
      const page = this.page;
      const type = page.searchType;

      if (type === 'POLICY_NUMBER') {
        page.searchTypeLabel = 'Policy Number';
        page.searchTypePlaceholder = 'Enter Policy Number';
      } else if (type === 'REGISTRATION_NUMBER') {
        page.searchTypeLabel = 'Registration Number';
        page.searchTypePlaceholder = 'Enter Registration Number';
      } else if (type === 'CUSTOMER_ID') {
        page.searchTypeLabel = 'Customer ID';
        page.searchTypePlaceholder = 'Enter Customer ID';
      }

      page.searchValue = '';
      page.searchError = '';
      page.policyFetched = false;
      //appendnew_next_searchTypeChangeScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K5bhn8ynIefZ3pNB');
    }
  }

  validateFNOLSubmit(bh) {
    try {
      const page = this.page;
      page.submitted = false;
      page.submitError = '';
      page.submitSuccess = false;
      page.submitting = false;

      /* ============================================================
       * INITIALIZE VALIDATION
       * ============================================================ */

      if (!page.validationErrors) {
        page.validationErrors = {};
      }

      page.validationErrors = {};

      let valid = true;

      /* ============================================================
       * SET ERROR FUNCTION
       * ============================================================ */

      function setError(field, message) {
        page[field + 'Error'] = message || '';

        page.validationErrors[field] = message || '';

        if (message) {
          valid = false;
        }
      }

      /* ============================================================
       * CLEAR PREVIOUS FIELD ERRORS
       * ============================================================ */

      const fields = [
        'policyNumber',
        'claimantType',
        'lossDate',
        'lossLocation',
        'lossType',
        'lossDescription',
        'driverName',
        'licenceStatus',
        'vehicleDrivable',
        'thirdPartyFlag',
        'injuryFlag',
        'policeReportAvailable',
        'policeReportReference',
        'estimatedAmount',
        'preferredContact',
        'preferredContactValue',
      ];

      fields.forEach(function (field) {
        page[field + 'Error'] = '';
      });

      /* ============================================================
       * POLICY VALIDATION
       * ============================================================ */

      const policyNumber = (page.policyNumber || '').toString().trim();

      if (!policyNumber) {
        setError('policyNumber', 'Policy Number is required');
      } else if (!page.policyFetched || !page.policyId) {
        setError('policyNumber', 'Fetch a valid policy before submitting');
      }

      /* ============================================================
       * CLAIMANT TYPE VALIDATION
       *
       * Uses dynamic master data:
       * page.claimantTypes
       * ============================================================ */

      const claimantType = (page.claimantType || '').toString().trim();

      const validClaimantTypes = (page.claimantTypes || []).map(function (
        item
      ) {
        return item.value;
      });

      if (!claimantType) {
        setError('claimantType', 'Claimant Type is required');
      } else if (validClaimantTypes.indexOf(claimantType) === -1) {
        setError('claimantType', 'Select a valid Claimant Type');
      }

      /* ============================================================
       * LOSS DATE VALIDATION
       * ============================================================ */

      if (!page.lossDate) {
        setError('lossDate', 'Loss Date & Time is required');
      } else {
        const lossDate = new Date(page.lossDate);

        if (isNaN(lossDate.getTime())) {
          setError('lossDate', 'Enter a valid Loss Date & Time');
        } else if (lossDate > new Date()) {
          setError('lossDate', 'Loss Date & Time cannot be in the future');
        }
        // else if (
        //     page.policyStartDate &&
        //     page.policyEndDate &&
        //     (
        //         lossDate < new Date(page.policyStartDate) ||
        //         lossDate > new Date(page.policyEndDate)
        //     )
        // ) {

        //     setError(
        //         "lossDate",
        //         "Loss Date & Time must be within the policy period"
        //     );

        // }
      }

      /* ============================================================
       * LOSS LOCATION VALIDATION
       *
       * Uses dynamic master data:
       * page.lossLocations
       * ============================================================ */

      const lossLocation = (page.lossLocation || '').toString().trim();

      const validLossLocations = (page.lossLocations || []).map(function (
        item
      ) {
        return item.value;
      });

      if (!lossLocation) {
        setError('lossLocation', 'Loss Location is required');
      } else if (validLossLocations.indexOf(lossLocation) === -1) {
        setError('lossLocation', 'Select a valid Loss Location');
      }

      /* ============================================================
       * LOSS TYPE VALIDATION
       *
       * Uses dynamic master data:
       * page.lossTypes
       * ============================================================ */

      const lossType = (page.lossType || '').toString().trim();

      const validLossTypes = (page.lossTypes || []).map(function (item) {
        return item.value;
      });

      if (!lossType) {
        setError('lossType', 'Loss Type is required');
      } else if (validLossTypes.indexOf(lossType) === -1) {
        setError('lossType', 'Select a valid Loss Type');
      }

      /* ============================================================
       * LOSS DESCRIPTION VALIDATION
       * ============================================================ */

      const description = (page.lossDescription || '').toString().trim();

      if (!description) {
        setError('lossDescription', 'Loss Description is required');
      } else if (description.length < 20) {
        setError(
          'lossDescription',
          'Loss Description must contain at least 20 characters'
        );
      }

      /* ============================================================
       * DRIVER NAME VALIDATION
       * ============================================================ */

      const driverName = (page.driverName || '').toString().trim();

      if (!driverName) {
        setError('driverName', 'Driver Name is required');
      }

      /* ============================================================
       * LICENCE STATUS VALIDATION
       *
       * Uses dynamic master data:
       * page.licenceStatuses
       * ============================================================ */

      const licenceStatus = (page.licenceStatus || '').toString().trim();

      const validLicenceStatuses = (page.licenceStatuses || []).map(function (
        item
      ) {
        return item.value;
      });

      if (!licenceStatus) {
        setError('licenceStatus', 'Licence Status is required');
      } else if (validLicenceStatuses.indexOf(licenceStatus) === -1) {
        setError('licenceStatus', 'Select a valid Licence Status');
      }

      /* ============================================================
       * YES / NO VALIDATION
       * ============================================================ */

      const yesNoFields = [
        'vehicleDrivable',
        'thirdPartyFlag',
        'injuryFlag',
        'policeReportAvailable',
      ];

      yesNoFields.forEach(function (field) {
        if (page[field] !== 'YES' && page[field] !== 'NO') {
          setError(field, 'Select Yes or No');
        }
      });

      /* ============================================================
       * POLICE REPORT REFERENCE
       * ============================================================ */

      if (page.policeReportAvailable === 'YES') {
        const policeReference = (page.policeReportReference || '')
          .toString()
          .trim();

        if (!policeReference) {
          setError(
            'policeReportReference',
            'Police / FIR reference is required'
          );
        }
      } else {
        page.policeReportReference = '';
      }

      /* ============================================================
       * ESTIMATED LOSS AMOUNT
       * ============================================================ */

      const amount = Number(page.estimatedAmount);

      if (
        page.estimatedAmount === null ||
        page.estimatedAmount === undefined ||
        page.estimatedAmount === ''
      ) {
        setError('estimatedAmount', 'Estimated Loss Amount is required');
      } else if (!isFinite(amount) || amount <= 0) {
        setError(
          'estimatedAmount',
          'Estimated Loss Amount must be greater than 0'
        );
      }

      /* ============================================================
       * PREFERRED CONTACT
       * ============================================================ */

      const validContacts = ['EMAIL', 'SMS', 'PHONE'];

      const preferredContact = (page.preferredContact || '').toString().trim();

      if (!preferredContact) {
        setError('preferredContact', 'Preferred Contact is required');
      } else if (validContacts.indexOf(preferredContact) === -1) {
        setError('preferredContact', 'Select a valid Preferred Contact');
      }

      /* ============================================================
       * PREFERRED CONTACT VALUE
       * ============================================================ */

      const contactValue = (page.preferredContactValue || '').toString().trim();

      if (!contactValue) {
        setError(
          'preferredContactValue',
          'Preferred Contact Value is required'
        );
      } else if (preferredContact === 'PHONE' || preferredContact === 'SMS') {
        if (!/^[0-9]{10}$/.test(contactValue)) {
          setError(
            'preferredContactValue',
            'Enter a valid 10-digit mobile number'
          );
        }
      } else if (preferredContact === 'EMAIL') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)) {
          setError('preferredContactValue', 'Enter a valid email address');
        }
      }

      /* ============================================================
       * SET FINAL VALIDATION RESULT
       * ============================================================ */

      bh.local.isValid = valid;

      /* ============================================================
       * LOG VALIDATION RESULT
       * ============================================================ */

      console.log('========================================');

      console.log('CLAIM FORM VALIDATION RESULT:', bh.local.isValid);

      console.log('VALID VARIABLE:', valid);

      console.log('VALIDATION ERRORS:', page.validationErrors);

      console.log('SUBMIT ERROR BEFORE FINAL:', page.submitError);

      console.log('========================================');

      /* ============================================================
       * VALIDATION FAILED
       *
       * IMPORTANT:
       * return stops the Script Node here.
       *
       * Therefore:
       * - Submit API will not execute from this flow
       * - submitError will NOT be cleared
       * - Snackbar can display page.submitError
       * ============================================================ */

      if (!valid) {
        page.submitted = false;

        page.submitting = false;

        page.submitSuccess = false;

        page.submitError =
          'Please correct the highlighted fields before submitting.';

        console.log(
          'CLAIM SUBMISSION BLOCKED - VALIDATION FAILED',
          page.submitError
        );

        console.log('SNACKBAR MESSAGE:', page.submitError);
      } else {
        /* ============================================================
         * VALIDATION SUCCESS
         * ============================================================ */

        page.submitted = true;

        page.submitting = true;

        page.submitSuccess = true;

        page.submitError = '';

        console.log('CLAIM FORM VALIDATION SUCCESSFUL');

        console.log('bh.local.isValid:', bh.local.isValid);
      }
      bh = this.sd_ExNjTCvyxA98uY2E(bh);
      //appendnew_next_validateFNOLSubmit
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zYxbEDsu5bzTdOi1');
    }
  }

  sd_ExNjTCvyxA98uY2E(bh) {
    try {
      if (
        this.sdService.operators['false'](
          this.page.submitSuccess,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_L3gEUuFl1ytbskLh(bh);
      } else if (
        this.sdService.operators['true'](
          this.page.submitSuccess,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.prepareClaimRequest(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ExNjTCvyxA98uY2E');
    }
  }

  sd_L3gEUuFl1ytbskLh(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.submitError, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      //appendnew_next_sd_L3gEUuFl1ytbskLh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L3gEUuFl1ytbskLh');
    }
  }

  prepareClaimRequest(bh) {
    try {
      const page = this.page;
      page.requestBody = {
        policyId: Number(page.policyId),

        claimantType: page.claimantType,

        lossDateTime: page.lossDate,

        lossLocation: (page.lossLocation || '').toString().trim(),

        lossType: page.lossType,

        lossDescription: (page.lossDescription || '').toString().trim(),

        driverName: (page.driverName || '').toString().trim(),

        driverLicenceStatus: page.licenceStatus,

        policeReportAvailable: page.policeReportAvailable === 'YES',

        policeReportReference:
          page.policeReportAvailable === 'YES'
            ? (page.policeReportReference || '').toString().trim()
            : '',

        repairEstimateAvailable: page.repairEstimateAvailable === 'YES',

        supportingEvidenceReference: (page.supportingEvidenceReference || '')
          .toString()
          .trim(),

        estimatedLossAmount: Number(page.estimatedAmount),

        currency: page.currency || 'INR',

        vehicleDrivable: page.vehicleDrivable === 'YES',

        thirdPartyInvolved: page.thirdPartyFlag === 'YES',

        injuryInvolved: page.injuryFlag === 'YES',

        preferredContactMethod: page.preferredContact,

        preferredContactValue: (page.preferredContactValue || '')
          .toString()
          .trim(),

        createdBy: page.createdBy || 'FNOL_USER',
      };
      bh = this.postClaim(bh);
      //appendnew_next_prepareClaimRequest
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SuRbKOSAUuU72hm7');
    }
  }

  async postClaim(bh) {
    try {
      let requestOptions = {
        url: this.page.claimApiUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.requestBody,
      };
      bh.local.response = await this.sdService.nHttpRequest(requestOptions);
      bh = this.handleClaimResponse(bh);
      //appendnew_next_postClaim
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YjArycL31ktiSSfE');
    }
  }

  handleClaimResponse(bh) {
    try {
      const page = this.page;
      console.log('========== CLAIM RESPONSE ==========');
      console.log('Claim Response:', bh.local.response);

      page.submitting = false;
      page.submitSuccess = false;
      page.submitMessage = '';

      const r = bh.local.response || {};

      /* =========================================================
   API FAILURE
   ========================================================= */

      if (!r.success) {
        page.submitSuccess = false;

        page.submitMessage = r.message || 'Claim submission failed.';

        console.error('Claim submission failed:', r);
      } else {
        /* =========================================================
   CLAIM RESPONSE
   ========================================================= */

        const claim = r.claim || {};
        const evidence = r.evidence || {};

        /* =========================================================
   CLAIM DETAILS
   ========================================================= */

        page.claimId = claim.claimId || '';

        page.claimNumber = claim.claimNumber || '';

        page.claimPolicyId = claim.policyId || page.policyId || '';

        page.claimStatus = claim.status || '';

        page.claimCreatedAt = claim.createdAt || '';

        /* =========================================================
   EVIDENCE DETAILS
   ========================================================= */

        page.evidenceTotal = Number(evidence.total || 0);

        page.evidenceUploaded = Number(evidence.uploaded || 0);

        page.evidenceFailed = Number(evidence.failed || 0);

        /* =========================================================
   SUCCESS
   ========================================================= */

        page.submitSuccess = true;
        page.submitMessage = 'Claim submitted successfully.';

        console.log('Claim submitted successfully.');
        console.log('Claim ID:', page.claimId);
        console.log('Claim Number:', page.claimNumber);
        console.log('Claim Status:', page.claimStatus);
        console.log('Created At:', page.claimCreatedAt);

        console.log('Evidence Total:', page.evidenceTotal);
        console.log('Evidence Uploaded:', page.evidenceUploaded);
        console.log('Evidence Failed:', page.evidenceFailed);

        console.log('====================================');
      }
      bh = this.successClaimMessage(bh);
      //appendnew_next_handleClaimResponse
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wdeNPAFo69XsCx1k');
    }
  }

  successClaimMessage(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.submitMessage, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      //appendnew_next_successClaimMessage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XBn5GZOg2TL9SDMu');
    }
  }

  validateTextFieldScript(bh) {
    try {
      const page = this.page;
      /* ============================================================
       * GENERIC TEXT FIELD VALIDATION
       * ============================================================ */

      console.log('====================================');
      console.log('Text field validation started');

      /* ============================================================
       * GET FIELD NAME
       * ============================================================ */

      const f = bh.input.fieldName;

      /* ============================================================
       * GET FIELD VALUE
       * ============================================================ */

      const v = page[f];

      const s = v === null || v === undefined ? '' : v.toString().trim();

      /* ============================================================
       * ERROR
       * ============================================================ */

      let e = '';

      /* ============================================================
       * FIELD LABELS
       * ============================================================ */

      const fieldLabels = {
        policyStatus: 'Policy Status',

        policyStartDate: 'Policy Start Date',

        policyEndDate: 'Policy End Date',

        insuredName: 'Insured',

        vehicleRegistration: 'Vehicle Registration',

        vehicleMakeModel: 'Vehicle',

        coverageType: 'Coverage Type',

        coverageLimit: 'Coverage Limit',

        sumInsured: 'Sum Insured',

        excess: 'Excess / Deductible',
      };

      /* ============================================================
       * GET DISPLAY LABEL
       * ============================================================ */

      const fieldLabel = fieldLabels[f] || f;

      /* ============================================================
       * REQUIRED VALIDATION
       * ============================================================ */

      if (!s) {
        e = fieldLabel + ' is required';
      }

      /* ============================================================
       * UPDATE FIELD ERROR
       * ============================================================ */

      page[f + 'Error'] = e;

      /* ============================================================
       * ENSURE VALIDATION ERROR OBJECT
       * ============================================================ */

      if (!page.validationErrors) {
        page.validationErrors = {};
      }

      /* ============================================================
       * UPDATE VALIDATION ERRORS
       * ============================================================ */

      if (e) {
        page.validationErrors[f] = e;
      } else {
        page.validationErrors[f] = '';

        delete page.validationErrors[f];
      }

      /* ============================================================
       * RECALCULATE FORM VALIDITY
       * ============================================================ */

      let hasErrors = false;

      Object.keys(page.validationErrors || {}).forEach(function (key) {
        const error = page.validationErrors[key];

        if (error && error.toString().trim() !== '') {
          hasErrors = true;
        }
      });

      bh.local.isValid = !hasErrors;

      /* ============================================================
       * DEBUG
       * ============================================================ */

      console.log('Field:', f);

      console.log('Value:', s);

      console.log('Field Label:', fieldLabel);

      console.log('Field Error:', e);

      console.log('Validation Errors:', page.validationErrors);

      console.log('Form Valid:', bh.local.isValid);

      console.log('====================================');

      return bh;
      //appendnew_next_validateTextFieldScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_phIRDBbiyMtk6xyV');
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
    if (
      false ||
      this.sd_39ba1be2aec84dbd(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_39ba1be2aec84dbd(bh) {
    const catchConnectedNodes = ['sd_22b10997ad734683'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = this.frontendCatchScript(bh);
    //appendnew_next_sd_39ba1be2aec84dbd
    return true;
  }
  //appendnew_flow_claim_intakeComponent_Catch
}
