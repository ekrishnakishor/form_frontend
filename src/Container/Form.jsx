import React from "react";
import "./Form.css";

const Form8850 = ({ companyDetails, employeeDetails }) => {
  // Function to calculate age from date of birth
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Extract date of birth from employeeDetails
  const dob = employeeDetails ? employeeDetails[0].date_of_birth : "";
  
  // Check if the age is under 40
  const isUnder40 = dob ? calculateAge(dob) < 40 : false;

  return (
    <div className="container">
      <div className="header">
        <div className="form-title">
          <p>
            Form <span>8850</span>
          </p>
          <p>(Rev. March 2016)</p>
          <p>Department of the Treasury Internal Revenue Service</p>
        </div>
        <div className="form-subtitle">
          <h2>
            Pre-Screening Notice and Certification Request for the Work
            Opportunity Credit
          </h2>
          <p>
            &#9656; Information about Form 8850 and its separate instructions is
            at <a href="http://www.irs.gov/form8850">www.irs.gov/form8850</a>.
          </p>
        </div>
        <div className="instructions">
          <p>OMB No. 1545-1500</p>
        </div>
      </div>
      <div className="user-instructions">
        <h4>
          Job applicant: Fill in the lines below and check any boxes that apply
        </h4>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employeeDetails ? employeeDetails[0].name:""}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="ssn">Social security number</label>
          <input
            type='tel'
            id="ssn"
            name="ssn"
            value={employeeDetails ? employeeDetails[0].social_security_number: ""}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Street address where you live</label>
          <input
            type="text"
            id="address"
            name="address"
            value={employeeDetails ? employeeDetails[0].street_address: ""}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City or town, state, and ZIP code</label>
          <input
            type="text"
            id="city"
            name="city"
            value={employeeDetails ? employeeDetails[0].city: ""}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="county">County</label>
          <input
            type="text"
            id="county"
            name="county"
            value={employeeDetails ? employeeDetails[0].country: ""}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telephone number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={employeeDetails ? employeeDetails[0].telephone: ""}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">
            If you are under age 40, enter your date of birth (month, day, year)
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={isUnder40 ? dob: ""}
            readOnly
          />
        </div>
        <hr />
        <ol>
          <li>
            <input
              type="checkbox"
              name="option1"
              id="option1"
              value={employeeDetails ? employeeDetails[0].received_conditional_certification: ""}
              checked={employeeDetails ? employeeDetails[0].received_conditional_certification: ""}
              readOnly
            />
            <label for="option1">
              {" "}
              Check here if you received a conditional certification from the
              state workforce agency(SWA) or a participating local agency for
              the work opportunity credit{" "}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="option2"
              id="option2"
              value={employeeDetails ? employeeDetails[0].received_tanf_assistance: ""}
              checked={employeeDetails ? employeeDetails[0].received_tanf_assistance: ""}
              readOnly
            />
            <label for="option2">
              {" "}
              Check here if any of the following statements apply to you,
              <ul>
                <li>
                  {" "}
                  I am a member of a family that has received assistance from
                  Temporary Assistance for Needy Families (TANF) for any 9
                  months during the past 18 months.
                </li>
                <li>
                  I am a veteran and a member of a family that received
                  Supplemental Nutrition Assistance Program (SNAP) benefits
                  (food stamps) for at least a 3-month period during the past 15
                  months.
                </li>
                <li>
                  {" "}
                  I was referred here by a rehabilitation agency approved by the
                  state, an employment network under the Ticket to Work program,
                  or the Department of Veterans Affairs.
                </li>
                <li>
                  I am at least age 18 but not age 40 or older and I am a member
                  of a family that:
                  <ol type="a">
                    <li>
                      Received SNAP benefits (food stamps) for the past 6
                      months;<b>or</b>
                    </li>
                    <li>
                      Received SNAP benefits (food stamps) for at least 3 of the
                      past 5 months, <b>but</b> is no longer eligible to
                    </li>
                  </ol>
                </li>
                <li>
                  During the past year, I was convicted of a felony or released
                  from prison for a felony.
                </li>
                <li>
                  I received supplemental security income (SSI) benefits for any
                  month ending during the past 60 days.
                </li>
                <li>
                  {" "}
                  I am a veteran and I was unemployed for a period or periods
                  totaling at least 4 weeks but less than 6 months during the
                  past year.
                </li>
              </ul>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="option3"
              id="option3"
              value={employeeDetails ? employeeDetails[0].veteran_unemployed_6_months: ""}
              checked={employeeDetails ? employeeDetails[0].veteran_unemployed_6_months: ""}
              readOnly
            />
            <label for="option3">
              {" "}
              Check here if you are a veteran and you were unemployed for a
              period or periods totaling at least 6 months during the past year.{" "}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="option4"
              id="option4"
              value={employeeDetails ? employeeDetails[0].veteran_disabled_recently_discharged: ""}
              checked={employeeDetails ? employeeDetails[0].veteran_disabled_recently_discharged: ""}
              readOnly
            />
            <label for="option4">
              {" "}
              Check here if you are a veteran entitled to compensation for a
              service-connected disability and you were discharged or released
              from active duty in the U.S. Armed Forces during the past year.{" "}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="option5"
              id="option5"
              value={employeeDetails ? employeeDetails[0].veteran_disabled_6_months_unemployed: ""}
              checked={employeeDetails ? employeeDetails[0].veteran_disabled_6_months_unemployed: ""}
              readOnly
            />
            <label for="option5">
              {" "}
              Check here if you are a veteran entitled to compensation for a
              service-connected disability and you were unemployed for a period
              or periods totaling at least 6 months during the past year.{" "}
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="option6"
              id="option6"
              value={employeeDetails ? employeeDetails[0].received_tanf_long_term: ""}
              checked={employeeDetails ? employeeDetails[0].received_tanf_long_term: ""}
              readOnly
            />
            <label for="option6">
              {" "}
              Check here if you are a member of a family that:{" "}
              <ul>
                <li>
                  Received TANF payments for at least the past 18 months;
                  <b>or</b>
                </li>
                <li>
                  Received TANF payments for any 18 months beginning after
                  August 5, 1997, and the earliest 18-month period beginning
                  after August 5, 1997, ended during the past 2 years; <b>or</b>
                </li>
                <li>
                  Stopped being eligible for TANF payments during the past 2
                  years because federal or state law limited the maximum time
                  those payments could be made.
                </li>
              </ul>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              name="option7"
              id="option7"
              value={employeeDetails ? employeeDetails[0].unemployed_27_weeks: ""}
              checked={employeeDetails ? employeeDetails[0].unemployed_27_weeks: ""}
              readOnly
            />
            <label for="option7">
              {" "}
              Check here if you are in a period of unemployment that is at least
              27 consecutive weeks and for all or part of that period you
              received unemployment compensation.{" "}
            </label>
          </li>
        </ol>
        <div className="sign">
          <h4>Signature - All applicants Must Sign</h4>
          <p>
            Under penalties of perjury, I declare that I gave the above
            Information to the employer or or before the day I was offered a
            job, and it is, to the best of my knowledge, true, correct, and
            complete{" "}
          </p>
          <div className="signature">
            <h5>job applicant's Signature </h5>
            <img
        src={employeeDetails && employeeDetails[0].employee_signature}
        alt="Employee Signature"
        style={{ display: "block", marginBottom: "10px", maxWidth: "100px" }}
        readOnly
      />
            <h5>Date</h5>
            <input type="date" name="date" id="date" value= {employeeDetails && employeeDetails[0].date_signed} readOnly/>
          </div>
        </div>
        <div className="employer">
          <div className="employer-use">
            <h4>For Employer's Use Only</h4>
            <div className="employer-use"></div>
            <label htmlFor="name">Employer's name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={companyDetails ? companyDetails.employer_name: ""}
              readOnly
            />
            <label htmlFor="telephone">Telephone No</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={companyDetails ? companyDetails.employer_telephone: ""}
              readOnly
            />
            <label htmlFor="ein">EIN</label>
            <input type="number" id="ein" name="ein" />
            <br />
            <label htmlFor="address">Street Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={companyDetails ? companyDetails.employer_address: ""}
              readOnly
            />
            <br />
            <label htmlFor="pin">City or town,state, and ZIP code</label>
            <input
              type="number"
              id="pin"
              name="pin"
              value={companyDetails ? companyDetails.contact_address: ""}
              readOnly
            />
            <br />
            <label htmlFor="g-name">
              Person to contact, if different from above
            </label>
            <input type="text" id="g-name" name="g-name" />
            <label htmlFor="g-telephone">Telephone No</label>
            <input
              type="tel"
              id="g-telephone"
              name="g-telephone"
              value={companyDetails ? companyDetails.employer_telephone: ""}
              readOnly
            />
            <label htmlFor="g-address">Street Address</label>
            <input
              type="text"
              id="g-address"
              name="g-address"
              value={companyDetails ? companyDetails.contact_address: ""}
              readOnly
            />
            <br />
            <label htmlFor="g-pin">City or town,state, and ZIP code</label>
            <input
              type="text"
              id="g-pin"
              name="g-pin"
              value={companyDetails ? companyDetails.contact_address: ""}
              readOnly
            />
            <br />

            <p>
              If, based on the individual’s age and home address, he or she is a
              member of group 4 or 6 (as described under Members of Targeted
              Groups in the separate instructions), enter that group number (4
              or 6) . . . . . . . . . . . .
            </p>
          </div>
        </div>
        <div className="applicant">
          <p>Date applicant:</p>
          <div className="applicant-info">
            <label htmlFor="gave-info">Gave infomation</label>
            <input type="date" id="gave-info" name="gave-info" />
            <label htmlFor="offer">Was offered Job</label>
            <input type="date" id="offer" name="offer" />
            <label htmlFor="hired">Was hired</label>
            <input type="date" id="hired" name="hired" />
            <label htmlFor="started">Started job</label>
            <input type="date" id="started" name="started" />
          </div>
          <p id="fine-print">
            Under penalties of perjury, I declare that the applicant provided
            the information on this form on or before the day a job was offered
            to the applicant and that the information I have furnished is, to
            the best of my knowledge, true, correct, and complete. Based on the
            information the job applicant furnished on page 1, I believe the
            individual is a member of a targeted group. I hereby request a
            certification that the individual is a member of a targeted group
          </p>
          <div className="signature">
            <h5>job applicant's Signature </h5>
            <img
        src={employeeDetails && employeeDetails[0].employee_signature}
        alt="Employee Signature"
        style={{ display: "block", marginBottom: "10px", maxWidth: "100px" }}
        readOnly
      />
            <h5>Title</h5>
            <input type="text" value ={employeeDetails && employeeDetails[0].name} readOnly/>
            <h5>Date</h5>
            <input type="date" value ={employeeDetails && employeeDetails[0].date_signed} readOnly/>

          </div>
        </div>
        <div className="privacy-act">
          <div className="one">
            <h3>Privacy Act and Paperwork Reduction Act Notice</h3>
            <p>
              Section references are to the Internal Revenue Code. Section
              51(d)(13) permits a prospective employer to request the applicant
              to complete this form and give it to the prospective employer. The
              information will be used by the employer to complete the
              employer’s federal tax return. Completion of this form is
              voluntary and may assist members of targeted groups in securing
              employment. Routine uses of this form include giving it to the
              state workforce agency (SWA), which will contact appropriate
              sources to confirm that the applicant is a member of a targeted
              group. This form may also be given to the Internal Revenue Service
              for administration of the Internal Revenue laws, to the Department
              of Justice for civil and
            </p>
          </div>
          <div className="two">
            criminal litigation, to the Department of Labor for oversight of the
            certifications performed by the SWA, and to cities, states, and the
            District of Columbia for use in administering their tax laws. We may
            also disclose this information to other countries under a tax
            treaty, to federal and state agencies to enforce federal nontax
            criminal laws, or to federal law enforcement and intelligence
            agencies to combat terrorism. You are not required to provide the
            information requested on a form that is subject to the Paperwork
            Reduction Act unless the form displays a valid OMB control number.
            Books or records relating to a form or its instructions must be
            retained as long as their contents may become material in the
            administration of any Internal Revenue law. Generally, tax returns
            and return information are confidential, as required by section
            6103.
          </div>
          <div className="three">
            The time needed to complete and file this form will vary depending
            on individual circumstances. The estimated average time is: <br />
            <b> Recordkeeping . . 6 hr., 27 min </b>. <br />{" "}
            <b>Learning about the law or the form . . . . . . . 24 min</b>.{" "}
            <br />{" "}
            <b>
              Preparing and sending this form to the SWA . . . . . . . 31 min{" "}
            </b>
            . <br /> If you have comments concerning the accuracy of these time
            estimates or suggestions for making this form simpler, we would be
            happy to hear from you. You can send us comments from
            www.irs.gov/formspubs. Click on “More Information” and then on “Give
            us feedback.” Or you can send your comments to: Internal Revenue
            Service Tax Forms and Publications 1111 Constitution Ave. NW,
            IR-6526 Washington, DC 20224 Do not send this form to this address.
            Instead, see When and Where To File in the separate instructions.
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form8850;
