import React from "react";
import Logo from "../assets/us-dep-of-labor.png";
import "./Form9061.css";

function Form9061({ companyDetails, employeeDetails }) {
  let worked_here_before = false;
  if (employeeDetails) {
    worked_here_before = employeeDetails[0].worked_for_employer_before
      ? true
      : false;
  }

  return (
    <div className="form-9061-container">
      <div className="form-header">
        <div className="form-9061-left">
          <img src={Logo} alt="us labor logo" />
          <div className="form-9061-p">
            <p>
              <span>US Department of Labor</span>
            </p>
            <p>Employment and Training Administration</p>
          </div>
        </div>
        <div className="form-9061-right">
          <div className="form-9061-p">
            <p>OMB Control No. 1205-0371</p>
            <p>Expiration Date: May 31, 2026</p>
          </div>
        </div>
      </div>
      <div className="form-9061-title">
        <p>Work Opportunity Tax Credit</p>
        <p>Individual Characteristics Form (ICF)</p>
      </div>

      <div className="form-section">
        <div className="form-row">
          <div className="form-cell control-no">
            <p>
              1. Control No. <span>(For Agency use only)</span>
            </p>
            <input type="text" />
          </div>
          <div className="form-cell swa-agency">
            <p>SWA / AGENCY INFORMATION</p>
            <p>(See instructions on pg 4)</p>
          </div>
          <div className="form-cell date-received">
            <p>
              2. Date Received <span>(For Agency Use only)</span>
            </p>
            <input type="text" />
          </div>
        </div>
        <div className="form-row-employer">
          <div className="form-cell-special"></div>
          <div className="form-cell-special-1">
            <p>Employer Details</p>
          </div>
          <div className="form-cell-special-2"></div>
        </div>
        <div className="form-row">
          <div className="form-cell employer-name">
            <p>3. Employer Name</p>
            <input type="text" />
          </div>
          <div className="form-cell employer-info">
            <p>4. Employer Mailing Address, Telephone No. and Email Address</p>
            <textarea />
          </div>
          <div className="form-cell ein">
            <p>5. Employer Identification Number (EIN)</p>
            <input type="text" />
          </div>
        </div>
        <div className="form-row-job">
          <div className="form-cell-special"></div>
          <div className="form-cell-special-1">
            <p>JOB APPLICANT INFORMATION</p>
          </div>
          <div className="form-cell-special-2"></div>
        </div>
        <div className="form-row">
          <div className="form-cell applicant-name">
            <p>6. Applicant Name (Last, First, MI)</p>
            <input
              type="text"
              name="name"
              value={employeeDetails ? employeeDetails[0].name : ""}
              readOnly
            />
          </div>
          <div className="form-cell ssn">
            <p>7. Social Security Number</p>
            <input
              type="tel"
              name="ssn"
              value={
                employeeDetails ? employeeDetails[0].social_security_number : ""
              }
              readOnly
            />
          </div>
          <div className="form-cell worked-before">
            <p>8. Have you worked for this employer before?</p>
            <div className="radio-buttons">
              <label>
                YES
                <input
                  type="radio"
                  name="worked-before"
                  value="yes"
                  checked={worked_here_before === true}
                />
              </label>
              <label>
                NO
                <input
                  type="radio"
                  name="worked-before"
                  value="no"
                  checked={worked_here_before === false}
                />
              </label>
            </div>
          </div>
        </div>
        <div className="form-row-applicant">
          <div className="form-cell-special"></div>
          <div className="form-cell-special-1">
            <p>
              JOB APPLICANT CHARACTERISTICS FOR WOTC TARGETED GROUP(S)
              CERTIFICATION
            </p>
          </div>
          <div className="form-cell-special-2"></div>
        </div>
        <div className="form-row">
          <div className="form-cell start-date">
            <p>9. Employment Start Date</p>
            <input type="date" />
          </div>
          <div className="form-cell starting-wage">
            <p>10. Starting Wage</p>
            <input type="number " />
          </div>
          <div className="form-cell job-position">
            <p>
              11. Job Position (Title) or SOC (Standard Occupation
              Classification)
            </p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="form-directions-container">
        <div className="form-directions">
          <p>
            <span>Directions:</span> Read the following statements carefully and
            check any of following statements that apply to the job applicant.
            Provide additional information where requested and as needed for
            targeted group eligibility determination.
          </p>
        </div>
        <div className="form-qualified-recipient">
          <h4>
            12. Qualified IV-A Recipient <br />
            <label htmlFor="q-4a">
              Check here if the job applicant is a Qualified IV-A Recipient
            </label>
            <input
              type="checkbox"
              name="q-4a"
              id="q-4a"
              checked={
                employeeDetails && employeeDetails[0].qualified_iv_a_recipient
              }
            />
          </h4>
          <p>
            If the job applicant is a member of a family receiving Temporary
            Assistance for Needy Families (TANF), enter the name of the{" "}
            <label htmlFor="primary-benefit">primary benefits recipient:</label>{" "}
            <input
              type="text"
              name="primary-benefit"
              id="primary-benefit"
              value={
                employeeDetails &&
                employeeDetails[0].qualified_iv_primary_benefits_recipient_name
              }
            />{" "}
            , and the <label htmlFor="primary-state">city and state(s) </label>
            where benefits were received:
            <input
              type="text"
              name="primary-state"
              id="primary-state"
              value={
                employeeDetails &&
                employeeDetails[0].qualified_iv_benefits_city_state
              }
            />
          </p>
        </div>
        <div className="form-qualified-vetaran">
          <h4>
            13. Qualified Vetaran <br />
            <label htmlFor="q-v">
              Check here if the job applicant is a vetaran of the U.S Armed
              forces
            </label>
            <input
              type="checkbox"
              name="q-v"
              id="q-v"
              checked={employeeDetails && employeeDetails[0].qualified_veteran}
            />
          </h4>
          <p>
            If the job applicant (veteran) is a member of a family receiving
            Supplemental Nutrition Assistance Program (SNAP) benefits, enter the
            name of the{" "}
            <label htmlFor="primary-benefit">primary benefits recipient:</label>{" "}
            <input
              type="text"
              name="primary-benefit"
              id="primary-benefit"
              value={
                employeeDetails &&
                employeeDetails[0]
                  .qualified_veteran_primary_benefits_recipient_name
              }
            />{" "}
            , and the <label htmlFor="primary-state">city and state(s) </label>
            where benefits were received:
            <input
              type="text"
              name="primary-state"
              id="primary-state"
              value={
                employeeDetails &&
                employeeDetails[0].qualified_veteran_benefits_city_state
              }
            />
            <br />
            <span className="note">
              Note: Additional information may be requested to determine the job
              applicant’s qualified veteran eligibility, such as proof of being
              entitled to compensation for a service-connected disability or
              having aggregate periods
            </span>
          </p>
        </div>
        <div className="qualified-fel">
          <h4>
            14. Qualified Ex-felon <br />
            <label htmlFor="q-f">
              Check here if the job applicant is an Ex-Felon
            </label>
            <input
              type="checkbox"
              name="q-f"
              id="q-f"
              checked={employeeDetails && employeeDetails[0].qualified_ex_felon}
            />
            <label htmlFor="q-work-release">
              Check if the job applicant is in a Work Release Program:
            </label>
            <input
              type="checkbox"
              name="q-work-release"
              id="q-work-release"
              checked={
                employeeDetails &&
                employeeDetails[0].job_app_work_release_program
              }
            />
          </h4>
          Enter{" "}
          <label htmlFor="q-date" id="label-date">
            date of felony conviction <span id="italic">(mm/dd/yyyy)</span>
          </label>
          <input
            type="date"
            name="q-date"
            id="q-date"
            value={employeeDetails && employeeDetails[0].felony_conviction_date}
          />{" "}
          and{" "}
          <label htmlFor="q-release-date" id="label-release">
            date of felony conviction <span id="italic">(mm/dd/yyyy)</span>
          </label>
          <input
            type="date"
            name="q-release-date"
            id="q-release-date"
            value={employeeDetails && employeeDetails[0].felony_release_date}
          />
          <h4>
            <label htmlFor="q-federal">Federal Conviction</label>
            <input
              type="checkbox"
              name="q-federal"
              id="q-federal"
              checked={employeeDetails && employeeDetails[0].federal_conviction}
            />

            <label htmlFor="q-state">State conviction</label>
            <input
              type="checkbox"
              name="q-state"
              id="q-state"
              checked={employeeDetails && employeeDetails[0].state_conviction}
            />
            <label htmlFor="q-list-applicable">List applicable state :</label>
            <input
              type="text"
              name="q-list-applicable"
              id="q-list-applicable"
              value={employeeDetails && employeeDetails[0].applicable_state}
            />
          </h4>
        </div>
        <div className="dcr">
          <h4>
            15. Designated Community Resident(DCR) <br />
            Check if the job applicant is at least age 18 but not age 40 on the
            hiring date, and resides in a Rural Renewal
            <label htmlFor="rrc"></label>
            <input
              type="checkbox"
              name="rrc"
              id="rrc"
              checked={
                employeeDetails &&
                employeeDetails[0].designated_community_resident_RRC
              }
            />{" "}
            or an <label htmlFor="ez">Empowerment Zone(EZ)</label>
            <input
              type="checkbox"
              name="ez"
              id="ez"
              checked={
                employeeDetails &&
                employeeDetails[0].designated_community_resident_EZ
              }
            />
          </h4>
          <p>
            Enter{" "}
            <span>
              <label className="jbthday" htmlFor="jbday">
                Job applicant's birthday
              </label>
              (mm/dd/yyyy):
            </span>{" "}
            <input
              type="date"
              value={
                employeeDetails &&
                (employeeDetails[0].designated_community_resident_RRC ||
                  employeeDetails[0].designated_community_resident_EZ)
                  ? employeeDetails[0].date_of_birth
                  : ""
              }
            />
          </p>
        </div>
        <div className="vrr">
          <h4>
            16. Vocational Rehabilitation Referral <br />
            <label htmlFor="vr-ref">
              Check here if the job applicant is a Vocational Rehabilitation
              (VR) Referral
            </label>
            <input
              type="checkbox"
              name="vr-ref"
              id="vr-ref"
              checked={
                employeeDetails &&
                employeeDetails[0].vocational_rehabilitation_referral
              }
            />
          </h4>
          <span>
            {" "}
            Applicant was referred by (select one of the following):{" "}
            <label htmlFor="vr-1">
              Rehabilitation agency approved by the state;
            </label>
            <input
              type="checkbox"
              name="vr-1"
              id="vr-1"
              checked={
                employeeDetails && employeeDetails[0].rehab_approved_state
              }
            />
            <label htmlFor="vr-2">
              Employment Network under the Ticket to Work Program;
            </label>
            <input
              type="checkbox"
              name="vr-2"
              id="vr-2"
              checked={
                employeeDetails && employeeDetails[0].emp_network_work_program
              }
            />
            <label htmlFor="vr-3">Department of Veterans Affairs</label>
            <input
              type="checkbox"
              name="vr-3"
              id="vr-3"
              checked={employeeDetails && employeeDetails[0].vet_affairs}
            />
          </span>
        </div>
        <div className="qsye">
          <h4>
            17. Qualified Summer Youth Employee <br />
            <label htmlFor="check">
              Check here if the job applicant is a Qualified Summer Youth
              Employee
            </label>
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={
                employeeDetails &&
                employeeDetails[0].qualified_summer_youth_employee
              }
            />
          </h4>
          <p>
            Enter{" "}
            <span>
              <label className="jbthday" htmlFor="jbday">
                Job applicant's birthday
              </label>
              (mm/dd/yyyy):
            </span>{" "}
            <input
              type="date"
              value={
                employeeDetails &&
                employeeDetails[0].qualified_summer_youth_employee
                  ? employeeDetails[0].date_of_birth
                  : ""
              }
            />
          </p>
        </div>

        <div className="nutrition">
          <h4>
            18. Qualified Supplemental Nutrition Assistance Program (SNAP)
            Recipient
            <br />
            <label htmlFor="check-snap">
              Check here if the job applicant is a Qualified SNAP (Food Stamps)
              Recipient
            </label>
            <input
              type="checkbox"
              name="check-snap"
              id="check-snap"
              checked={
                employeeDetails && employeeDetails[0].qualified_snap_recipient
              }
            />
          </h4>
          <p>
            Enter{" "}
            <span>
              <label className="jbthday" htmlFor="jbday">
                Job applicant's birthday
              </label>
              (mm/dd/yyyy):
            </span>{" "}
            <input
              type="date"
              value={
                employeeDetails && employeeDetails[0].qualified_snap_recipient
                  ? employeeDetails[0].date_of_birth
                  : ""
              }
            />
          </p>
          <p>
            Enter the name of the{" "}
            <b>
              <label htmlFor="pbr">primary benefits recipient</label>
            </b>
            :
            <input type="text" id="pr-benefits" value={employeeDetails && employeeDetails[0].snap_primary_benefits_recipient_name}/>
          </p>
          <p>
            <label htmlFor="pr-city">
              <b>city and state(s)</b>
            </label>{" "}
            where benefits were recieved:
            <input type="text" value={employeeDetails && employeeDetails[0].snap_benefits_city_state}/>
          </p>
        </div>
        <div className="ssi">
          <h4>
            19. Qualified Supplemental Security Income (SSI) Recipient <br />
            <label htmlFor="ssi-check">
              Check here if the job applicant received or is receiving
              Supplemental Security Income (SSI)
            </label>
            <input type="checkbox" name="ssi-check" id="ssi-check" checked={
                employeeDetails &&
                employeeDetails[0].qualified_ssi_recipient
              } />
          </h4>
        </div>
        <div className="long-term">
          <h4>
            20. Long-Term Family Assistance Recipient <br />
            <label htmlFor="longterm-check">
              Check here if the job applicant is a Long-term Family Assistance
              (long-term TANF) recipient
            </label>
            <input type="checkbox" name="longterm-check" id="longterm-check" checked={
                employeeDetails &&
                employeeDetails[0].long_term_family_assistance_recipient
              }/>
          </h4>
          <p>
            Enter the name of the{" "}
            <b>
              <label htmlFor="lr-benefits">primary benefits recipient</label>
            </b>
            :
            <input type="text" id="lr-benefits" value ={employeeDetails &&
                employeeDetails[0].primary_benefits_recipient_name}/>
          </p>
          <p>
            <label htmlFor="lr-city">
              <b>city and state(s)</b>
            </label>{" "}
            where benefits were recieved:
            <input type="text" value ={employeeDetails &&
                employeeDetails[0].benefits_city_state}/>
          </p>
        </div>
        <div className="unemploy">
          <h4>
            21. Qualified Long-Term Unemployment Recipient <br />
            <label htmlFor="longterm-employ">
              Check here if the job applicant is a qualified long-term
              unemployment recipient (LTUR)
            </label>
            <input
              type="checkbox"
              name="longterm-employ"
              id="longterm-employ"
              checked={employeeDetails &&
                employeeDetails[0].qualified_long_term_unemployment_recipient}
            />
          </h4>
          <p>
            Enter{" "}
            <label htmlFor="employ-state">
              <b>city and state(s)</b>
            </label>{" "}
            where UI claim records/UI wage records were filed:
            <input type="text" name="employ-state" id="employ-state" value = {employeeDetails &&
                employeeDetails[0].ui_claim_records_city_state}/>
          </p>
        </div>
        <div className="doc-eligibility">
          <p>
            <label htmlFor="doc-e">
              <b>22. Sources used to document eligibility. </b>{" "}
            </label>
            List all supporting documentation submitted to SWA. Indicate next to
            each document listed whether it is attached (A) or forthcoming (F).{" "}
            <b>SWA Staff</b>: List all supporting documentation used in
            determining targeted group eligibility for the applicant. Enter your
            initials and date when the determination was made.
          </p>
          <textarea name="doc-e" id="doc-e" rows={8} cols={80} value ={employeeDetails && employeeDetails[0].supporting_doc_list}></textarea>
        </div>
        <div className="certify">
          <h4>
            I certify that this information is true and correct to the best of
            my knowledge. I understand that the information above may be subject
            to verification.{" "}
          </h4>
        </div>
        <div className="sign-block">
          <div className="box1">
            <p>
              <label htmlFor="sign1">
                <b>23(a). Signature</b>
              </label>{" "}
              (See instruction in Box 23(b) for who signs in this signature
              block)
              <img
        src={employeeDetails && employeeDetails[0].employee_signature}
        alt="Employee Signature"
        style={{ display: "block", marginBottom: "10px", maxWidth: "100px" }}
      />
              <textarea name="sign1" id="sign1"></textarea>
            </p>
          </div>
          <div className="box2">
            <p>
              <b>23.(b)</b>{" "}
              <label htmlFor="signed-by">
                Indicate who signed in this form:
              </label>
              <label htmlFor="emp">Employer</label>
              <input type="radio" name="signed-by" id="emp" checked={employeeDetails && employeeDetails[0].signed_employer}/>
              <label htmlFor="emp-p">Employer Preparer</label>
              <input type="radio" name="signed-by" id="emp-p" checked={employeeDetails && employeeDetails[0].signed_employer_preparer}/>
              <label htmlFor="swa-p">SWA/Participating Agency</label>
              <input type="radio" name="signed-by" id="swa-p" checked={employeeDetails && employeeDetails[0].swa}/>
              <label htmlFor="jb-applicant">Job Applicant</label>
              <input type="radio" name="signed-by" id="jb-applicant" checked={employeeDetails && employeeDetails[0].job_applicant}/>
              <label htmlFor="guardian">Parent/Guardian</label>
              <span>(if job applicant is a minor)</span>
              <input type="radio" name="signed-by" id="guardian" checked={employeeDetails && employeeDetails[0].parent_gaurdian}/>
            </p>
          </div>
          <div className="box3">
            <label htmlFor="sign-date">
              <b>Signaure Date</b>:
            </label>
            <textarea name="sign-date" id="sign-date" value={employeeDetails && employeeDetails[0].date_signed}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form9061;
