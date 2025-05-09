import React, { useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import styled from "styled-components";
import { toast } from "react-toastify";

const gradePoints = {
  "A+": 10,
  A: 9,
  "B+": 8,
  B: 7,
  C: 6,
  D: 5,
  E: 4,
  F: 0,
};

const gradeOptions = Object.keys(gradePoints);

export default function App() {
  const [inputs, setInputs] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      credit: "",
      grade: "",
    }))
  );

  const handleChange = (index, key, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index][key] = value;
    setInputs(updatedInputs);
  };

  const handleSubmit = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    let valid = true;

    inputs.forEach(({ credit, grade }) => {
      if (credit && grade) {
        if (!gradePoints.hasOwnProperty(grade)) {
          toast.warn("Invalid grade entered.", { position: "top-center" });
          valid = false;
          return;
        }
        const creditVal = parseFloat(credit);
        totalCredits += creditVal;
        totalPoints += creditVal * gradePoints[grade];
      }
    });

    if (!valid) return;

    if (totalCredits === 0) {
      toast.info("Please enter at least one subject to calculate SGPA.", {
        position: "top-center",
      });
      return;
    }

    const SGPA = totalPoints / totalCredits;
    toast.success(`Your SGPA is: ${SGPA.toFixed(2)}`, {
      position: "top-center",
    });
  };

  return (
    <SGPAStyle>
      <div className="SGPA-form">
        <MDBTable borderless>
          <MDBTableHead>
            <tr>
              <th className="text-center table-heading">Credits</th>
              <th className="text-center table-heading">Grade</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {inputs.map((input, index) => (
              <tr key={index}>
                <td>
                  <div className="floating-label-group">
                    <input
                      type="number"
                      name="credit"
                      value={input.credit}
                      onChange={(e) =>
                        handleChange(index, "credit", e.target.value)
                      }
                      className="form-control"
                      required
                    />
                    <label className="floating-label">Enter Credit</label>
                  </div>
                </td>
                <td>
                  <div className="floating-label-group">
                    <select
                      name="grade"
                      value={input.grade}
                      onChange={(e) =>
                        handleChange(index, "grade", e.target.value)
                      }
                      className="form-control"
                      required
                    >
                      <option value="">Select Grade</option>
                      {gradeOptions.map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </div>
      <button
        type="button"
        className="btn btn-primary d-flex"
        onClick={handleSubmit}
      >
        Calculate SGPA
      </button>
    </SGPAStyle>
  );
}

const SGPAStyle = styled.section`
  .table-heading {
    font-size: 1.25rem;
    font-weight: 500;
  }
  .btn {
    margin: 5% auto !important;
  }

  .SGPA-form {
    margin: 5% 15% 5% 15%;
  }

  .floating-label-group {
    align-item: center;
    width: 50%;
    margin: 0 auto;
    position: relative;

    .form-control {
      transition: all 0.1s ease;
    }

    .floating-label {
      font-size: 15px;
      color: #cccccc;
      position: absolute;
      pointer-events: none;
      top: 9px;
      left: 12px;
      transition: all 0.1s ease;
    }

    input:focus ~ .floating-label,
    input:not(:focus):valid ~ .floating-label,
    select:focus ~ .floating-label,
    select:not(:focus):valid ~ .floating-label {
      top: -15px;
      bottom: 0px;
      left: 0px;
      font-size: 13px;
      opacity: 1;
      color: #0d6efd;
    }
  }

  @media (max-width: 768px) {
    .SGPA-form {
      margin: 5% 0% 5% 0%;
    }

    .floating-label-group {
      width: 70%;
    }
  }
`;
