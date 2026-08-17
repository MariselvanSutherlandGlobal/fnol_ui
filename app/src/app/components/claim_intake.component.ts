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
      return this.errorHandler(bh, e, 'sd_5f24f8085d354b99');
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
  //appendnew_flow_claim_intakeComponent_start

  sd_2e3ea1f9ab934935(bh) {
    try {
      this.page.apiBaseUrl = 'http://localhost:8081/api';
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
      bh = this.initialiseFnol(bh);
      //appendnew_next_sd_2e3ea1f9ab934935
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2e3ea1f9ab934935');
    }
  }

  initialiseFnol(bh) {
    try {
      const page = this.page;
      page.today = new Date();
      page.policyApiUrl = page.apiBaseUrl + '/policies';
      page.claimApiUrl = page.apiBaseUrl + '/claims';
      page.caseServiceUrl = page.apiBaseUrl + '/case-service/cases';
      page.policyFetched = false;
      page.policyLoading = false;
      page.submitting = false;
      page.submitted = false;
      page.submitSuccess = false;
      page.submitError = '';
      page.submitMessage = '';
      page.validationErrors = {};
      page.claimantTypes = [
        { label: 'Policyholder', value: 'POLICYHOLDER' },
        { label: 'Driver', value: 'DRIVER' },
        { label: 'Third Party', value: 'THIRD_PARTY' },
        { label: 'Representative', value: 'REPRESENTATIVE' },
      ];

      page.lossTypes = [
        { label: 'Collision', value: 'COLLISION' },
        { label: 'Theft', value: 'THEFT' },
        { label: 'Fire', value: 'FIRE' },
        { label: 'Flood', value: 'FLOOD' },
        { label: 'Glass', value: 'GLASS' },
        { label: 'Other', value: 'OTHER' },
      ];

      page.licenceStatuses = [
        { label: 'Valid', value: 'VALID' },
        { label: 'Expired', value: 'EXPIRED' },
        { label: 'Suspended', value: 'SUSPENDED' },
        { label: 'Unknown', value: 'UNKNOWN' },
      ];

      page.yesNoOptions = [
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' },
      ];

      page.preferredContacts = [
        { label: 'Email', value: 'EMAIL' },
        { label: 'SMS', value: 'SMS' },
        { label: 'Phone', value: 'PHONE' },
      ];

      page.policySearchTypes = [
        { label: 'Policy Number', value: 'POLICY_NUMBER' },
        { label: 'Registration Number', value: 'REGISTRATION_NUMBER' },
        { label: 'Customer ID', value: 'CUSTOMER_ID' },
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

      /* -----------------------------------------
   Prepare HTTP URL
----------------------------------------- */

      page.policyLoading = true;

      bh.local.policyApiUrl =
        page.apiBaseUrl +
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
      page.policyLoading = false;

      const r = bh.local.response || {};

      const policies = Array.isArray(r.policies) ? r.policies : [];

      if (!r.success || policies.length === 0) {
        page.policyFetched = false;
        page.policyError = 'Policy not found.';
        return;
      }

      const p = policies[0];

      /* Policy identity */
      page.policyId = p.id || '';
      page.policyNumber = p.policyNumber || '';
      page.customerId = p.customerId || '';

      /* Policy details */
      page.policyStatus = p.policyStatus || '';
      page.policyStartDate = p.policyStartDate || '';
      page.policyEndDate = p.policyEndDate || '';
      page.insuredName = p.insuredName || '';

      /* Vehicle */
      page.vehicleRegistration = p.vehicleRegistration || '';
      page.vehicleMake = p.vehicleMake || '';
      page.vehicleModel = p.vehicleModel || '';
      page.vehicleYear = p.vehicleYear || '';

      page.vehicleMakeModel = [page.vehicleMake, page.vehicleModel]
        .filter(function (v) {
          return v !== null && v !== undefined && v !== '';
        })
        .join(' ');

      /* Coverage */
      page.coverageType = p.coverageType || '';

      page.coveredPerils = Array.isArray(p.coveredPerils)
        ? p.coveredPerils
        : [];

      page.excess = p.excessAmount ?? '';
      page.sumInsured = p.sumInsured ?? '';
      page.currency = p.currency || 'INR';

      /* Success */
      page.policyFetched = true;
      page.policyError = '';
      //appendnew_next_mapPolicyResponse
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4460873e786d46da');
    }
  }

  validateFieldScript(bh) {
    try {
      const page = this.page;
      const f = bh.input.fieldName,
        v = page[f],
        s = v == null ? '' : v.toString().trim();
      let e = '';
      if (f === 'policyNumber' && !s) e = 'Policy Number is required';
      else if (f === 'claimantType' && !s) e = 'Claimant Type is required';
      else if (f === 'lossDate') {
        if (!s) e = 'Loss Date & Time is required';
        else if (new Date(s) > new Date())
          e = 'Loss Date & Time cannot be in the future';
        else if (
          page.policyFetched &&
          page.policyStartDate &&
          page.policyEndDate &&
          (new Date(s) < new Date(page.policyStartDate) ||
            new Date(s) > new Date(page.policyEndDate))
        )
          e = 'Loss Date & Time must be within the policy period';
      } else if (f === 'lossLocation' && !s) e = 'Loss Location is required';
      else if (f === 'lossType' && !s) e = 'Loss Type is required';
      else if (f === 'lossDescription' && (!s || s.length < 20))
        e = 'Loss Description must contain at least 20 characters';
      else if (f === 'driverName' && !s) e = 'Driver Name is required';
      else if (
        [
          'licenceStatus',
          'vehicleDrivable',
          'thirdPartyFlag',
          'injuryFlag',
          'policeReportAvailable',
          'repairEstimateAvailable',
          'preferredContact',
        ].includes(f) &&
        !s
      )
        e = 'This field is required';
      else if (
        f === 'policeReportReference' &&
        page.policeReportAvailable === 'YES' &&
        !s
      )
        e = 'Police / FIR reference is required';
      else if (f === 'estimatedAmount' && !(Number(v) > 0))
        e = 'Estimated Repair / Loss Amount must be greater than 0';
      page[f + 'Error'] = e;
      page.validationErrors[f] = e;

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

  validateFNOLSubmit(bh) {
    try {
      const page = this.page;
      page.submitted = false;
      page.submitError = '';
      page.submitSuccess = false;

      if (!page.validationErrors) {
        page.validationErrors = {};
      }

      page.validationErrors = {};

      let valid = true;

      function setError(field, message) {
        page[field + 'Error'] = message || '';
        page.validationErrors[field] = message || '';

        if (message) {
          valid = false;
        }
      }

      /* Clear previous errors */

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

      /* Policy */

      const policyNumber = (page.policyNumber || '').toString().trim();

      if (!policyNumber) {
        setError('policyNumber', 'Policy Number is required');
      } else if (!page.policyFetched || !page.policyId) {
        setError('policyNumber', 'Fetch a valid policy before submitting');
      }

      /* Claimant */

      const claimantType = (page.claimantType || '').toString().trim();

      const validClaimantTypes = [
        'POLICYHOLDER',
        'DRIVER',
        'THIRD_PARTY',
        'REPRESENTATIVE',
      ];

      if (!claimantType) {
        setError('claimantType', 'Claimant Type is required');
      } else if (validClaimantTypes.indexOf(claimantType) === -1) {
        setError('claimantType', 'Select a valid Claimant Type');
      }

      /* Loss Date */

      if (!page.lossDate) {
        setError('lossDate', 'Loss Date & Time is required');
      } else {
        const lossDate = new Date(page.lossDate);

        if (isNaN(lossDate.getTime())) {
          setError('lossDate', 'Enter a valid Loss Date & Time');
        } else if (lossDate > new Date()) {
          setError('lossDate', 'Loss Date & Time cannot be in the future');
        } else if (
          page.policyStartDate &&
          page.policyEndDate &&
          (lossDate < new Date(page.policyStartDate) ||
            lossDate > new Date(page.policyEndDate))
        ) {
          setError(
            'lossDate',
            'Loss Date & Time must be within the policy period'
          );
        }
      }

      /* Loss Location */

      if (!(page.lossLocation || '').toString().trim()) {
        setError('lossLocation', 'Loss Location is required');
      }

      /* Loss Type */

      const validLossTypes = [
        'COLLISION',
        'THEFT',
        'FIRE',
        'FLOOD',
        'GLASS',
        'OTHER',
      ];

      if (!page.lossType) {
        setError('lossType', 'Loss Type is required');
      } else if (validLossTypes.indexOf(page.lossType) === -1) {
        setError('lossType', 'Select a valid Loss Type');
      }

      /* Loss Description */

      const description = (page.lossDescription || '').toString().trim();

      if (!description) {
        setError('lossDescription', 'Loss Description is required');
      } else if (description.length < 20) {
        setError(
          'lossDescription',
          'Loss Description must contain at least 20 characters'
        );
      }

      /* Driver */

      if (!(page.driverName || '').toString().trim()) {
        setError('driverName', 'Driver Name is required');
      }

      /* Licence */

      const validLicenceStatuses = ['VALID', 'EXPIRED', 'SUSPENDED', 'UNKNOWN'];

      if (!page.licenceStatus) {
        setError('licenceStatus', 'Licence Status is required');
      } else if (validLicenceStatuses.indexOf(page.licenceStatus) === -1) {
        setError('licenceStatus', 'Select a valid Licence Status');
      }

      /* Yes / No fields */

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

      /* Police reference */

      if (page.policeReportAvailable === 'YES') {
        if (!(page.policeReportReference || '').toString().trim()) {
          setError(
            'policeReportReference',
            'Police / FIR reference is required'
          );
        }
      } else {
        page.policeReportReference = '';
      }

      /* Estimated Amount */

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

      /* Preferred Contact */

      const validContacts = ['EMAIL', 'SMS', 'PHONE'];

      if (!page.preferredContact) {
        setError('preferredContact', 'Preferred Contact is required');
      } else if (validContacts.indexOf(page.preferredContact) === -1) {
        setError('preferredContact', 'Select a valid Preferred Contact');
      }

      /* Preferred Contact Value */

      const contactValue = (page.preferredContactValue || '').toString().trim();

      if (!contactValue) {
        setError(
          'preferredContactValue',
          'Preferred Contact Value is required'
        );
      } else if (
        page.preferredContact === 'PHONE' ||
        page.preferredContact === 'SMS'
      ) {
        if (!/^[0-9]{10}$/.test(contactValue)) {
          setError(
            'preferredContactValue',
            'Enter a valid 10-digit mobile number'
          );
        }
      } else if (page.preferredContact === 'EMAIL') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)) {
          setError('preferredContactValue', 'Enter a valid email address');
        }
      }

      /* Final */

      bh.local.isValid = valid;

      if (!valid) {
        page.submitError =
          'Please correct the highlighted fields before submitting.';

        page.submitting = false;
      }

      console.log('claim form is valid', bh.local.isValid);
      /* Validation successful */

      page.submitted = true;
      page.submitting = true;
      page.submitError = '';
      bh = this.sd_3e6c1de382874126(bh);
      //appendnew_next_validateFNOLSubmit
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c41af14917bd472b');
    }
  }

  sd_3e6c1de382874126(bh) {
    try {
      if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8dff369377c645bf(bh);
      } else if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.prepareClaimRequest(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3e6c1de382874126');
    }
  }

  sd_8dff369377c645bf(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(this.page.submitError, 'Close', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      //appendnew_next_sd_8dff369377c645bf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8dff369377c645bf');
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
      return this.errorHandler(bh, e, 'sd_f6dbcc990bee4fda');
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
      return this.errorHandler(bh, e, 'sd_e6bfd4bce5424a57');
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
      return this.errorHandler(bh, e, 'sd_086df7b2086e48b3');
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
      return this.errorHandler(bh, e, 'sd_b9jrxXo3v3p15rgI');
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
